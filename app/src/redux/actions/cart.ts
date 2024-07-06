import { createAction } from "@reduxjs/toolkit";

interface Cart {
  id: string,
  quantity: number
}

export const  carts = createAction<Cart[]>('cartQuantities/carts');
