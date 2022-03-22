import { GetServerSidePropsContext } from 'next';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';

import { ProductInterface } from 'src/pages-extras/products/products';
import { getProduct } from 'src/actions/products';

const productDetails = ({ product }: ProductInterface) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h4">Nome muito muito muito muito grande</Typography>
        <img src="https://carrefourbr.vtexassets.com/arquivos/ids/7388204/MV26217756_Calca-Jeans-Preta-Destroyed-Feminina-Lady-Rock_1_Zoom.jpg" width={300} />
      </CardContent>
    </Card>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { query } = ctx;
  const { id } = query;
  const { data: { product } } = await getProduct(id as string);
  console.log(product);

  return { props: { product } };
}

export default productDetails