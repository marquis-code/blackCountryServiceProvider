import { ref, computed } from 'vue';

export function usePropertyImages(property: any) {
  const propertyImages = ref<{ name: string; image: string }[]>([]);

  // Extract property cover images
  const extractPropertyImages = () => {
    const coverImages = property.images.map((image: string) => ({
      name: 'Property Cover Image',
      image,
    }));
    propertyImages.value.push(...coverImages);
  };

  // Extract common area images
  const extractCommonAreaImages = () => {
    const commonAreaImages = property.commonAreas.flatMap((area: any) =>
      area.images.map((image: string) => ({
        name: `Common Area - ${area.name}`,
        image,
      }))
    );
    propertyImages.value.push(...commonAreaImages);
  };

  // Extract room feature images
  const extractRoomFeatureImages = () => {
    const roomImages = property.rooms.flatMap((room: any) =>
      room.features.flatMap((feature: any) =>
        feature.images.map((image: string) => ({
          name: `Room ${room.name} Feature - ${feature.name}`,
          image,
        }))
      )
    );
    propertyImages.value.push(...roomImages);
  };

  // Combine all extraction functions
  const extractAllImages = () => {
    extractPropertyImages();
    extractCommonAreaImages();
    extractRoomFeatureImages();
  };

  // Call the function to populate the array
  extractAllImages();

  return {
    propertyImages: computed(() => propertyImages.value),
  };
}
