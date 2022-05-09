import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { usePurchase } from '../../context/purchaseContext';
import { FormContent } from './style';

export default function EditPurchaseModal({ open, handleClose, purchaseId }) {
  const formSchema = yup.object().shape({
    tipo_pagamento: yup.string(),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { updatePurchase } = usePurchase();

  const handleData = (data) => {
    if (!data.status) {
      delete data.status;
    }
    if (!data.tipo_pagamento) {
      delete data.tipo_pagamento;
    }
    updatePurchase(purchaseId, data);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <FormContent>
          <form onSubmit={handleSubmit(handleData)}>
            <TextField
              fullWidth
              margin="none"
              label="Tipo de pagamento"
              placeholder="Cartão/ À vista/ Boleto"
              variant="outlined"
              error={!!errors.tipo_pagamento}
              helperText={errors.tipo_pagamento?.message}
              {...register('tipo_pagamento')}
            />
            <TextField
              fullWidth
              margin="none"
              label="Status"
              placeholder="Finalizada/ Em andamento"
              variant="outlined"
              error={!!errors.status}
              helperText={errors.status?.message}
              {...register('status')}
            />
            <Button type="submit" variant="contained">
              Atualizar
            </Button>
          </form>
        </FormContent>
      </Modal>
    </div>
  );
}
