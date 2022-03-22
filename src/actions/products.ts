import AxiosRequest from '../helpers/axiosRequest/axiosRequest';

export const getProducts = async () => AxiosRequest({ endpoint: 'products', method: 'get' });

export const getProduct = async (id: string | string[]) => AxiosRequest({ endpoint: `products/${id}`});
