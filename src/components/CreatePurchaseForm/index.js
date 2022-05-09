import { Button } from '@mui/material';
import { usePurchase } from '../../context/purchaseContext';
import { Container } from './style';

function CreatePurchaseForm() {
  const { createPurchase } = usePurchase();

  return (
    <Container>
      <div>
        <Button variant="contained" onClick={createPurchase}>
          Adicionar Nova Compra
        </Button>
      </div>
    </Container>
  );
}

export default CreatePurchaseForm;
