import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services';

export const PurchaseContext = createContext();

export const PurchaseProvider = ({ children }) => {
  const [purchases, setPurchases] = useState([]);

  function createPurchase(activityName) {
    api
      .post('/purchase/create', activityName)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function addProduct(productId, purchaseId) {
    api
      .put(`/purchase/product/${productId}`, { id: purchaseId })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function updatePurchase(productId) {
    api
      .patch(`/purchase/${productId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function deletePurchase(productId) {
    api
      .delete(`/purchase/${productId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function retrievePurchases() {
    api
      .get('/purchase')
      .then((res) => {
        console.log(res);
        setPurchases(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    retrievePurchases();
  }, []);

  return (
    <PurchaseContext.Provider
      value={{
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
