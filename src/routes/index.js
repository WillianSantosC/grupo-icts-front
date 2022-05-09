import { Route, Routes } from 'react-router-dom';
import ProductsPage from '../pages/ProductsPage';
import PurchasesPage from '../pages/PurchasesPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/" element={<PurchasesPage />} />
    </Routes>
  );
}
