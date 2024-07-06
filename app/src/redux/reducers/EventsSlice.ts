import { EventProps, EventsData } from "@/types/Event";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EventsState {
  value: EventProps[];
}

const initialState: EventsState = {
  value: [],
};

const eventsSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    events: (state, action: PayloadAction<EventsData>) => {
      state.value = action.payload.data;
    }
  }
});

export const { events } = eventsSlice.actions;
export default eventsSlice.reducer;
