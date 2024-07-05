import { EventProps } from "@/types/Event"; // Importa a interface Event conforme necessário
import { useRouter } from "next/router";


export default function EventComponent({ eventData }: EventProps) {

  const { data } = eventData

  const router = useRouter()

  const handleClick = (id: number) => {
    router.push('/registration')
    localStorage.setItem('event_id', JSON.stringify(id));
  }

  const formatDate = (dateString:string) => {
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('pt-BR', options);
    return formattedDate;
  }

  return (
    <div className="gap-6 pt-4 p-2">
      <div className="flex flex-col gap-6 justify-center mt-12 md:flex-row">
        {data && data.map((event) => (
          <div key={event.id} className="p-4 flex flex-col rounded-sm bg-white w-3/5">
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
            <button className="bg-dark-blue p-2 rounded-md disabled:opacity-20" disabled={!event.status} onClick={()=> handleClick(event.id)}>
              <span className="text-white text-sm">Participar do evento</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

