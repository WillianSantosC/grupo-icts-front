import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import api from '../services';

export const PurchaseContext = createContext();

export const PurchaseProvider = ({ children }) => {
  const [purchases, setPurchases] = useState([]);
  const [purchaseId, setPurchaseId] = useState('');

  function createPurchase() {
    api
      .post('/purchase/create')
      .then(() => {
        toast.success('Nova compra criada');
        retrievePurchases();
      })
      .catch((err) => console.log(err));
  }

  function addProduct(productId, purchaseId) {
    api
      .put(`/purchase/product/${productId}`, { id: purchaseId })
      .then(() => {
        toast.success('Produto adicionado à compra');
        retrievePurchases();
      })
      .catch(() =>
        toast.error('Crie uma nova compra depois adicione produtos à ela')
      );
  }

  function updatePurchase(purchaseId, data) {
    api
      .patch(`/purchase/${purchaseId}`, data)
      .then(() => {
        toast.success('Compra atualizada');
        retrievePurchases();
      })
      .catch((err) => console.log(err));
  }

  function deletePurchase(purchaseId) {
    api
      .delete(`/purchase/${purchaseId}`)
      .then(() => {
        toast.success('Compra deletada');
        retrievePurchases();
      })
      .catch((err) => console.log(err));
  }

  function retrievePurchases() {
    api
      .get('/purchase')
      .then((res) => setPurchases(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    retrievePurchases();
  }, []);

  return (
    <PurchaseContext.Provider
      value={{
        purchaseId,
        setPurchaseId,
        purchases,
        createPurchase,
        addProduct,
        retrievePurchases,
        deletePurchase,
        updatePurchase,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};

export const usePurchase = () => useContext(PurchaseContext);
