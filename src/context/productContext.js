import { createContext, useContext, useState } from 'react';
import api from '../services';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  function createProduct(activityName) {
    api
      .post('/product/create', activityName)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function updateProductPrice(productId) {
    api
      .put(`/product/${productId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function updateProduct(productId) {
    api
      .patch(`/product/${productId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function deleteProduct(productId) {
    api
      .delete(`/product/${productId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function retrieveProducts() {
    api
      .get('/product')
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }

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
