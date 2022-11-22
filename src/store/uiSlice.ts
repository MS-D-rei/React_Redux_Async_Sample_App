import { NotificationType } from '@/components/UI/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isCartVisible: boolean;
  notification: null | NotificationType;
}

const initialUIState: UIState = { isCartVisible: false, notification: null };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    toggle: (state) => {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification: (state, action: PayloadAction<NotificationType>) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const { toggle, showNotification } = uiSlice.actions;
export default uiSlice.reducer;
