import { EventProps } from "@/types/Event"; // Certifique-se de importar Event e EventProps corretamente
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
    events: (state, action: PayloadAction<EventProps[]>) => {
      state.value = action.payload;
    }
  }
});

export const { events } = eventsSlice.actions;
export default eventsSlice.reducer;

