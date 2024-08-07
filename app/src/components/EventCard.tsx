import { RootState } from "@/redux/reducers";
import { useState } from "react";
import { useSelector } from "react-redux";


export default function EventComponent() {
  const [selectedEventIds, setSelectedEventIds] = useState<number[]>([]);

  const events = useSelector((state: RootState) => state.EventsSlice.value)


  const handleClick = (id: number) => {
    if (!selectedEventIds.includes(id)) {
      setSelectedEventIds((prevIds) => [...prevIds, id]);
      localStorage.setItem('event_id', JSON.stringify(selectedEventIds));
    }
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };

    const formattedDate = new Date(dateString).toLocaleDateString('pt-BR', options);

    return formattedDate;
  }


  return (
    <div className="flex gap-6  p-10">
      <div className="flex justify-start items-start flex-col mt-20">
        <h1 className="font-extrabold text-2xl">Eventos disponíveis</h1>
      <div className="flex flex-col items-center gap-6 justify-center mt-12 md:flex-row">
        {events && events.map((event) => (
          <div key={event.id} className="p-4 flex flex-col rounded-sm bg-white w-4/5">
            <h3 className="mb-2 text-2xl font-bold text-black">{event.name}</h3>
            <span>{formatDate(event.start_date)}</span>
            {event.status === false ? (
              <div className="flex items-center p-4 mb-4  mt-4 text-sm text-blocky-dark rounded-lg bg-gray" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">As inscrições foram encerradas</span>
                </div>
              </div>
            ): (
              <div className="bg-soft-blue border-t border-b border-soft-green text-blocky-dark px-4 py-3 mt-4 mb-4 rounded-sm" role="alert">
                <p className="text-sm">Restam alguns ingressos!</p>
              </div>
            )
            }
            <button className="bg-dark-blue p-2 rounded-md disabled:opacity-20 hover:bg-blocky-dark" disabled={!event.status} onClick={()=> handleClick(event.id)}>
              <span className="text-white text-sm">Adicionar ao carrinho</span>
            </button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

