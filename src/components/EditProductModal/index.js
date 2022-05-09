import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useProduct } from '../../context/productContext';
import { FormContent } from './style';

export default function EditProductModal({ open, handleClose, productId }) {
  const formSchema = yup.object().shape({
    preco: yup.number().required('Campo Obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { updateProductPrice } = useProduct();

  const handleData = (data) => updateProductPrice(productId, data);

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
              type="number"
              margin="none"
              label="Preço"
              placeholder="Digite um novo valor"
              variant="outlined"
              error={!!errors.preco}
              helperText={errors.preco?.message}
              {...register('preco')}
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
