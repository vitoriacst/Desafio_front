import { RootState } from "@/redux/reducers";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Cart(){
  type MyData = {
    [key: string]: number;
  };

  const [eventQuantities, setEventQuantities] = useState<MyData | null>(null);

  const events = useSelector((state: RootState) => state.EventsSlice.value);
  console.log(events)

useEffect(()=> {
  let eventData = localStorage.getItem('event_quantities')
  console.log(eventData,'eventData')
  if(eventData){
    setEventQuantities(JSON.parse(eventData))
  }
},[])

  console.log(eventQuantities,'eventQuantities')

  return (
    <div>
      {
        events.map((event) => {
          if (eventQuantities && eventQuantities[event.id]) {
            return (
              <div key={event.id}>
                <h3>{event.name}</h3>
                <p>Quantidade: {eventQuantities[event.id]}</p>
              </div>
            );
          } else {
            return null;
          }
        })
      }
    </div>
  );
}
