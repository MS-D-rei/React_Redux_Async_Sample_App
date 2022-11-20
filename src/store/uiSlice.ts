import { createSlice } from '@reduxjs/toolkit';

interface UIState {
  isCartVisible: boolean;
}

const initialUIState: UIState = { isCartVisible: false };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    toggle: (state) => {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const { toggle } = uiSlice.actions;
export default uiSlice.reducer;
