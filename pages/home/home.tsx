import { GetServerSidePropsContext } from 'next';

import { getProducts } from 'src/actions/products';
import { HomeInterface } from './home.interfaces';
import ProductTable from 'src/components/ProductTable/ProductTable';

const Home = ({ products }: HomeInterface) => {
  return (
    <ProductTable products={products} />
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { data: { products } } = await getProducts();
  console.log(products)

  return { props: { products } };
}

export default Home;