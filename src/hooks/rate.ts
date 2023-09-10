import { rateApi } from '@/api';
import { UseQueryOptions, useQuery } from 'react-query';

export const useRate = ({
  params,
  queryOptions,
}: {
  params: { 'from-symbol': string; 'to-symbol': string };
  queryOptions?: UseQueryOptions<any, any, any, string[]>;
}) => {
  return useQuery({
    queryKey: ['rate'],
    queryFn: () =>
      rateApi.getRate({
        params,
      }),
    ...queryOptions,
  });
};
