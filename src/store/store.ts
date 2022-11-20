import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '@/store/uiSlice';
import cartReducer from '@/store/cartSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
