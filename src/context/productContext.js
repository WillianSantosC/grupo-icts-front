import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import api from '../services';
import { usePurchase } from './purchaseContext';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { retrievePurchases } = usePurchase();

  function createProduct(data) {
    api
      .post('/product/create', data)
      .then(() => {
        toast.success('Novo produto criado');
        retrieveProducts();
      })
      .catch(() => toast.error('Problema ao cadastrar novo produto'));
  }

  function updateProductPrice(productId, data) {
    api
      .put(`/product/${productId}`, data)
      .then(() => {
        toast.success('Produto atualizado');
        retrieveProducts();
        retrievePurchases();
      })
      .catch((err) => console.log(err));
  }

  function updateProduct(productId, data) {
    api
      .patch(`/product/${productId}`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function deleteProduct(productId) {
    api
      .delete(`/product/${productId}`)
      .then(() => {
        toast.success('Produto deletado');
        retrieveProducts();
        retrievePurchases();
      })
      .catch((err) => console.log(err));
  }

  function retrieveProducts() {
    api
      .get('/product')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    retrieveProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        createProduct,
        updateProductPrice,
        retrieveProducts,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
