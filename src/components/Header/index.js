import { useNavigate } from 'react-router-dom';
import * as C from './style';

function Header() {
  const navigate = useNavigate();

  return (
    <C.Container>
      <div>
        <h1>Lolja</h1>
      </div>
      <nav>
        <h4 onClick={() => navigate('/')}>Compras</h4>
        <h4 onClick={() => navigate('/products')}>Produtos</h4>
      </nav>
    </C.Container>
  );
}

export default Header;
