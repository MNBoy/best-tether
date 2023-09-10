import { Tools } from '@/core/utilities';
import axiosInstance from './axiosInstance';
const Server = axiosInstance();

const baseUrl = '/general/currency-price/find';

const rateApi = {
  getRate: ({
    params,
  }: {
    params: { 'from-symbol': string; 'to-symbol': string };
  }) => {
    const url = `${baseUrl}${Tools.objectToQueryString(params)}`;
    return Server({
      url,
      method: 'GET',
    });
  },
};

export { rateApi };
