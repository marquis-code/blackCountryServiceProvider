import { useRouter } from 'vue-router';

export const useHopBack = () => {
  const router = useRouter();

  const hopBack = () => {
    router.back();
  };

  return {
    hopBack,
  };
}
