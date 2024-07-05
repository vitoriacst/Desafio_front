// types/Event.ts
export interface Event {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  status: boolean;
}


export interface EventProps {
  eventData: {
    data: Event[];
  };
}
