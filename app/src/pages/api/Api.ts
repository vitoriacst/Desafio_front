import { events } from '@/redux/reducers/EventsSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Api(url: string)  {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log('aqui', data)
        dispatch(events(data))
        console.log('before', data)

      });
  }, []);
};



