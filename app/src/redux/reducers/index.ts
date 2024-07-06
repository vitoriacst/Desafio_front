import { combineReducers } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import EventsSlice from "./EventsSlice";

const rootReducer = combineReducers({
  EventsSlice,
  CartSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
