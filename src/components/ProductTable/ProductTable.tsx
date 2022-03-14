
import { Paper,
  Table, TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';

import { ProductTableInterface } from './ProductTable.interfaces';

const ProductTable = ({ products }: ProductTableInterface) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Produto</TableCell>
            <TableCell align="center">Tamanho</TableCell>
            <TableCell align="left">Referência</TableCell>
            <TableCell align="center">Quantidade</TableCell>
            <TableCell align="right">Valor</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.id}
              </TableCell>
              <TableCell align="left">{product.name}</TableCell>
              <TableCell align="center">{product.size}</TableCell>
              <TableCell align="left">{product.reference}</TableCell>
              <TableCell align="center">{product.quantity}</TableCell>
              <TableCell align="right">{product.value}</TableCell>
              <TableCell align="center">
                <IconButton size="small" color="primary">
                  <Edit fontSize="small" />
                </IconButton>
                <IconButton size="small" color="error">
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProductTable