import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useProduct } from '../../context/productContext';
import { Container, FormContainer, FormContent } from './style';

function CreateProductForm() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formSchema = yup.object().shape({
    preco: yup.number().required('Campo Obrigatório'),
    nome: yup.string().required('Campo Obrigatório'),
    descricao: yup.string().required('Campo Obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { createProduct } = useProduct();

  const handleData = (data) => createProduct(data);

  return (
    <Container>
      <div>
        <Button variant="contained" onClick={handleOpen}>
          Adicionar Novo Produto
        </Button>
      </div>

      <FormContainer>
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
                label="Nome"
                placeholder="Digite o nome do produto"
                variant="outlined"
                error={!!errors.nome}
                helperText={errors.nome?.message}
                {...register('nome')}
              />
              <TextField
                fullWidth
                margin="none"
                label="Descrição"
                placeholder="Descreva o produto"
                variant="outlined"
                error={!!errors.descricao}
                helperText={errors.descricao?.message}
                {...register('descricao')}
              />
              <TextField
                fullWidth
                type="number"
                margin="none"
                label="Preço"
                placeholder="Digite o valor do produto"
                variant="outlined"
                error={!!errors.preco}
                helperText={errors.preco?.message}
                {...register('preco')}
              />
              <Button type="submit" variant="contained">
                Enviar
              </Button>
            </form>
          </FormContent>
        </Modal>
      </FormContainer>
    </Container>
  );
}

export default CreateProductForm;
