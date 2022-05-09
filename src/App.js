import { Toaster } from 'react-hot-toast';
import Router from './routes';
import { GlobalStyle } from './styles';
function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
      <Toaster />
    </>
  );
}

export default App;
