import Layout from '@/components/Layout/Layout';
import Cart from '@/components/Cart/Cart';
import Products from '@/components/Shop/Products';
import { useAppSelector } from './hooks/store-hooks';
import { useEffect } from 'react';

const firebaseURL =
  'https://react-httprequest-sample-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json';

function App() {
  const isCartVisible = useAppSelector((state) => state.ui.isCartVisible);
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    fetch(firebaseURL, {
      method: 'PUT',
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {isCartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
