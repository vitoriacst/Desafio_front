import { EventProps } from "@/types/Event"; // Importa a interface Event conforme necessário


export default function EventComponent({ eventData }: EventProps) {
  const { data } = eventData

  const formatDate = (dateString:string) => {
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('pt-BR', options);
    return formattedDate;
  }

  return (
    <div className=" gap-6 pt-4">
      <div className=" bg-soft-blue flex gap-6 justify-center mt-12">
        {data  && data.map((event) => (
          <div key={event.id} className="W-48 h-20 bg-white p-24">
            <h3>{event.name}</h3>
            <div className="">
              <span className="text-xs bg-dark-blue text-white font-medium me-2 px-2.5 py-0.5 rounded flex justify-center">
                {formatDate(event.start_date)}
              </span>
                até
              <span className="text-xs bg-dark-blue text-white font-medium me-2 px-2.5 py-0.5 rounded flex justify-center">
                 {formatDate(event.end_date)}
              </span>
            </div>

            <p><strong>Status:</strong> {event.status ? 'Active' : 'Inactive'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

