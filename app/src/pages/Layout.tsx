import EventCard from "@/components/EventCard";
import Header from "@/components/Header";
import { events } from "@/redux/reducers/EventsSlice";
import { ENDPOINT_URL } from "@/utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


export default function Layout(){
  const dispatch = useDispatch();

  const Api = (url: string) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          dispatch(events(data))
        });
  };

  useEffect(()=>{
    Api(ENDPOINT_URL)
  },[])



  return (
      <>
      <Header/>
      <EventCard />
      </>
  )
}
