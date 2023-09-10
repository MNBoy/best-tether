import { isProd } from '@/core/utilities';
import { useRate } from '@/hooks';

const REFETCH_PER_SECOND = 10;

const useTetherPrice = () => {
  const { data, isLoading } = useRate({
    queryOptions: {
      refetchInterval: isProd ? REFETCH_PER_SECOND * 1000 : false,
    },
    params: {
      'from-symbol': 'IRT',
      'to-symbol': 'USDT',
    },
  });

  return {
    rate: data?.data.data.ratio || 0,
    isLoading,
  };
};

export default useTetherPrice;
