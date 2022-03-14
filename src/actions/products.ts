import AxiosRequest from '../helpers/axiosRequest/axiosRequest';

export const getProducts = async () => AxiosRequest({ endpoint: 'products', method: 'get' });
