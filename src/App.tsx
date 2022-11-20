import Layout from '@/components/Layout/Layout';
import Cart from '@/components/Cart/Cart';
import Products from '@/components/Shop/Products';
import { useAppSelector } from './hooks/store-hooks';

function App() {
  const isCartVisible = useAppSelector((state) => state.ui.isCartVisible);
  return (
    <Layout>
      {isCartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
