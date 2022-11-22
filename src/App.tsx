import Layout from '@/components/Layout/Layout';
import Cart from '@/components/Cart/Cart';
import Products from '@/components/Shop/Products';
import { useAppDispatch, useAppSelector } from '@/hooks/store-hooks';
import { useEffect } from 'react';
import { useFirebaseCart } from '@/hooks/firebase-hooks';
import Notification from '@/components/UI/Notification';

const firebaseRequestConfig = {
  url: 'https://react-httprequest-sample-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
};

function App() {
  const isCartVisible = useAppSelector((state) => state.ui.isCartVisible);
  const cart = useAppSelector((state) => state.cart);
  const { sendPutRequest } = useFirebaseCart(firebaseRequestConfig);
  const notification = useAppSelector((state) => state.ui.notification);

  useEffect(() => {
    sendPutRequest(cart);
  }, [cart]);

  return (
    <>
      {!!notification && <Notification content={notification} />}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
