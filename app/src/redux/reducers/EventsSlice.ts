import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EventsState {
  value: string;
}

const initialState: EventsState = {
  value: ''
};

const eventsSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    events: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
});

export const { events } = eventsSlice.actions;
export default eventsSlice.reducer;
