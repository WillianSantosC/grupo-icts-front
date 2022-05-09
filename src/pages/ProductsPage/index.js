import CreateProductForm from '../../components/CreateProductForm';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { useProduct } from '../../context/productContext';
import { Container, ContentContainer } from './style';

function ProductsPage() {
  const { products } = useProduct();

  return (
    <Container>
      <Header />
      <CreateProductForm />
      <ContentContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ContentContainer>
    </Container>
  );
}

export default ProductsPage;
