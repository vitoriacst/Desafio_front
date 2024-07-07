import { createAction } from "@reduxjs/toolkit";

interface MeuObjeto {
  [chave: string]: number;
}

export const carts = createAction<MeuObjeto>('updateCartQuantities/carts');
