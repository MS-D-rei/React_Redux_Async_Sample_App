import { CartState } from '@/store/cartSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/store-hooks';
import { showNotification } from '@/store/uiSlice';

interface UseFirebaseCartProps {
  url: string;
  method?: string;
  body?: string;
  application?: HeadersInit;
}

export const useFirebaseCart = (firebaseRequest: UseFirebaseCartProps) => {
  const dispatch = useAppDispatch();

  const sendPutRequest = async (cart: CartState) => {
    dispatch(
      showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data',
      })
    );
    try {
      const response = await fetch(firebaseRequest.url, {
        method: 'PUT',
        body: JSON.stringify(cart),
        headers: {
          'Context-Type': 'application/json',
        },
      });
      console.log(response);
      const data = await response.json();
      console.log(data);
      dispatch(
        showNotification({
          status: 'success',
          title: 'Success',
          message: 'Sent cart data successfully',
        })
      );
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        dispatch(
          showNotification({
            status: 'error',
            title: 'Error',
            message: 'Sending cart data failed',
          })
        );
      } else {
        console.log(`Unexpected Error: ${err}`);
      }
    }
  };

  return {
    sendPutRequest,
  };
};
