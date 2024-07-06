import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartQuantityState {
  cartQuantities: Record<string, number>;
}

const initialState: CartQuantityState = {
  cartQuantities: {},
};

const cartQuantitiesSlice = createSlice({
  name: 'cartQuantities',
  initialState,
  reducers: {
    updateCartQuantities: (state, action: PayloadAction<Record<string, number>>) => {
      state.cartQuantities = {
        ...state.cartQuantities,
        ...action.payload,
      };
    },
  },
});

export const { updateCartQuantities } = cartQuantitiesSlice.actions;

export default cartQuantitiesSlice.reducer;
