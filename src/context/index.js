import { ProductProvider } from './productContext';
import { PurchaseProvider } from './purchaseContext';

export default function Providers({ children }) {
  return (
    <PurchaseProvider>
      <ProductProvider>{children}</ProductProvider>
    </PurchaseProvider>
  );
}
