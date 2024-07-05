import { createAction } from "@reduxjs/toolkit";

interface Event {
  data: {
    id: number,
    start_date: string
    end_date: string,
    status: boolean
  }
}

export const  events = createAction<Event[]>('event/events');
