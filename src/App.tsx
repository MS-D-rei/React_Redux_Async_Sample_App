import Layout from '@/components/Layout/Layout';
import Cart from '@/components/Cart/Cart';
import Products from '@/components/Shop/Products';
import { useAppDispatch, useAppSelector } from '@/hooks/store-hooks';
import { useEffect } from 'react';
import { useFirebaseCart } from '@/hooks/firebase-hooks';
import Notification from '@/components/UI/Notification';
import { getCartData, sendCartData } from './store/cartSlice';

const firebaseRequestConfig = {
  url: 'https://react-httprequest-sample-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
};

let isInitial = true;

function App() {
  const dispatch = useAppDispatch();
  const isCartVisible = useAppSelector((state) => state.ui.isCartVisible);
  const cart = useAppSelector((state) => state.cart);
  const notification = useAppSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

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
