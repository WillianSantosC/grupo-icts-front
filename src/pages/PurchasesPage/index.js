import CreatePurchaseForm from '../../components/CreatePurchaseForm';
import Header from '../../components/Header';
import PurchaseCard from '../../components/PurchaseCard';
import { usePurchase } from '../../context/purchaseContext';
// import { purchases } from '../../mock';
import { Container, ContentContainer } from './style';

function PurchasesPage() {
  const { purchases } = usePurchase();
  return (
    <Container>
      <Header />
      <CreatePurchaseForm />
      <ContentContainer>
        {purchases.map((purchase) => (
          <PurchaseCard key={purchase.id} purchase={purchase} />
        ))}
      </ContentContainer>
    </Container>
  );
}

export default PurchasesPage;
