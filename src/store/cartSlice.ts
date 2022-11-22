import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemType } from '@/components/Cart/types';
import { ProductType } from '@/components/Shop/types';

interface CartState {
  items: CartItemType[];
  totalQuantity: number;
}

const initialCartState: CartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ProductType>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity += 1;
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

export const { addItemToCart, increaseItemInCart, removeItemFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
