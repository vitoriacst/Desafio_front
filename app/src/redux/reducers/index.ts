import { combineReducers } from "@reduxjs/toolkit";
import EventsSlice from "./EventsSlice";

const rootReducer = combineReducers({
  EventsSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
