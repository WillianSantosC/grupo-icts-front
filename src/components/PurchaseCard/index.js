import * as I from '@mui/icons-material';
import * as M from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePurchase } from '../../context/purchaseContext';
import EditPurchaseModal from '../EditPurchaseModal';

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

export default function PurchaseCard({ purchase }) {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { deletePurchase, setPurchaseId } = usePurchase();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = () => {
    setPurchaseId(purchase.id);
    navigate('/products');
  };
  const handleExpandClick = () => setExpanded(!expanded);

  const formatValue = (value) =>
    value.toLocaleString('pt-br', {
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
      <EditPurchaseModal
        open={open}
        handleClose={handleClose}
        purchaseId={purchase.id}
      />

      <M.CardHeader
        action={
          <>
            <M.IconButton aria-label="settings" onClick={handleOpen}>
              <I.Edit />
            </M.IconButton>
            <M.IconButton
              aria-label="delete"
              onClick={() => deletePurchase(purchase.id)}
            >
              <I.DeleteForever />
            </M.IconButton>
          </>
        }
        title={purchase.tipo_pagamento}
        subheader={`Total: ${formatValue(purchase.total)}`}
      />

      <M.CardActions disableSpacing>
        <M.Button onClick={handleClick}>Adicionar Produtos</M.Button>
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
          <M.Typography paragraph>Status: {purchase.status}</M.Typography>
          <M.Typography paragraph>Produtos:</M.Typography>
          {purchase.products?.map((product, index) => (
            <M.Typography key={index} paragraph>
              {product.nome} - {formatValue(product.preco)}
            </M.Typography>
          ))}
        </M.CardContent>
      </M.Collapse>
    </M.Card>
  );
}
