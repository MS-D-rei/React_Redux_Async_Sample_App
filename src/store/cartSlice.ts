import {
  AnyAction,
  createSlice,
  Dispatch,
  PayloadAction,
  ThunkAction,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { CartItemType } from '@/components/Cart/types';
import { ProductType } from '@/components/Shop/types';
import { showNotification } from '@/store/uiSlice';
import { RootState } from './store';

export interface CartState {
  items: CartItemType[];
  totalQuantity: number;
  isChanged: boolean;
}

const initialCartState: CartState = {
  items: [],
  totalQuantity: 0,
  isChanged: false,
};

/* Rules of Reducers */
/* https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#rules-of-reducers */
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    replaceCart: (state, action: PayloadAction<CartState>) => {
      state.items = action.payload.items || [];
      state.totalQuantity = action.payload.totalQuantity || 0;
    },
    addItemToCart: (state, action: PayloadAction<ProductType>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity += 1;
      state.isChanged = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      }
    },
    increaseItemInCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const targetItem = state.items.find((item) => item.id === id);
      state.totalQuantity += 1;
      targetItem!.quantity += 1;
      targetItem!.totalPrice += targetItem!.price;
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const targetItem = state.items.find((item) => item.id === id);
      state.totalQuantity -= 1;
      if (targetItem!.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        targetItem!.quantity -= 1;
        targetItem!.totalPrice -= targetItem!.price;
      }
    },
  },
});

/* Writing Logic with Thunks */
/* https://redux.js.org/usage/writing-logic-thunks#using-createasyncthunk */

/* Type Checking Redux Thunks */
/* https://redux.js.org/usage/usage-with-typescript#type-checking-redux-thunks */
// const dispatch = useAppDispatch();
/* const dispatch: ThunkDispatch<{
  ui: UIState;
  cart: CartState;
}, undefined, AnyAction> & Dispatch<AnyAction>
*/

// sendCartData is a thunk action creator
export const sendCartData = (cart: CartState) => {
  // return a thunk function
  return async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction> &
      Dispatch<AnyAction>
  ) => {
    const firebaseRequest = {
      url: 'https://react-httprequest-sample-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
    };
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
};

export const getCartData = () => {
  return async (
    dispatch: ThunkDispatch<RootState, undefined, AnyAction> &
      Dispatch<AnyAction>
  ) => {
    const firebaseRequest = {
      url: 'https://react-httprequest-sample-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
    };
    try {
      const response = await fetch(firebaseRequest.url);
      if (!response.ok) {
        throw new Error('Could not fetch cart data');
      }
      const data: CartState = await response.json();
      dispatch(cartSlice.actions.replaceCart(data));
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        dispatch(
          showNotification({
            status: 'error',
            title: 'Error',
            message: 'Fetching cart data failed',
          })
        );
      } else {
        console.log(`Unexpected Error: ${err}`);
      }
    }
  };
};

export const { addItemToCart, increaseItemInCart, removeItemFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
