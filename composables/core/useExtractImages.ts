interface ImageContainer {
  images?: string[];
  [key: string]: any;
}

export function useImageExtractor() {
  const extractImages = (data: ImageContainer | ImageContainer[] | null): string[] => {
    let images: string[] = [];

    // If data is null or undefined, return an empty array
    if (!data) {
      return images;
    }

    // If data is an array, iterate over each item
    if (Array.isArray(data)) {
      data.forEach(item => {
        images = images.concat(extractImages(item));
      });
    } else {
      // If images exist, add them
      if (data.images && data.images.length) {
        images = images.concat(data.images);
      }

      // Recursively check other keys for nested objects
      Object.keys(data).forEach(key => {
        if (typeof data[key] === 'object' && data[key] !== null) {
          images = images.concat(extractImages(data[key]));
        }
      });
    }

    // Use Set to remove duplicates and return the unique images
    return Array.from(new Set(images));
  };

  return {
    extractImages
  };
}
