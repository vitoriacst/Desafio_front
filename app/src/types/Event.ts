export interface EventProps {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  status: boolean;
}

export interface EventsData {
  data: {
    id: number;
    name: string;
    start_date: string;
    end_date: string;
    status: boolean;
  }[];
}
