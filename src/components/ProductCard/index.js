import * as I from '@mui/icons-material';
import * as M from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useProduct } from '../../context/productContext';
import { usePurchase } from '../../context/purchaseContext';
import EditProductModal from '../EditProductModal';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <M.IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const { addProduct, purchaseId } = usePurchase();
  const { deleteProduct } = useProduct();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = () => addProduct(product.id, purchaseId);
  const handleExpandClick = () => setExpanded(!expanded);

  const formatValue = product.preco.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <M.Card
      sx={{
        width: 250,
        position: 'relative',
        bgcolor: '#40312C',
        color: '#A67E33',
        fontWeight: 'bold',
      }}
    >
      <EditProductModal
        open={open}
        handleClose={handleClose}
        productId={product.id}
      />

      <M.CardHeader
        action={
          <>
            <M.IconButton aria-label="settings" onClick={handleOpen}>
              <I.Edit />
            </M.IconButton>
            <M.IconButton
              aria-label="delete"
              onClick={() => deleteProduct(product.id)}
            >
              <I.DeleteForever />
            </M.IconButton>
          </>
        }
        title={product.nome}
        subheader={`Preço: ${formatValue}`}
      />

      <M.CardActions disableSpacing>
        <M.Button onClick={handleClick}>Adicionar</M.Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <I.ExpandMore />
        </ExpandMore>
      </M.CardActions>

      <M.Collapse in={expanded} timeout="auto" unmountOnExit>
        <M.CardContent>
          <M.Typography paragraph>Descrição:</M.Typography>
          <M.Typography paragraph>{product.descricao}</M.Typography>
        </M.CardContent>
      </M.Collapse>
    </M.Card>
  );
}
