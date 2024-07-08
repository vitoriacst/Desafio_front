import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header () {
  const [eventIds, setEventIds] = useState<number[]>([]);
  const router = useRouter()


  useEffect(() => {
    const storedEventIds = localStorage.getItem("event_id");
    if (storedEventIds) {
      const parsedEventIds = JSON.parse(storedEventIds);
      setEventIds(parsedEventIds);
    }
  }, [eventIds.length]);

  return(
    <div className="flex bg-teal w-full h-14 items-center justify-between p-4 fixed">
      <div>
        <span className="font-bold text-pantone">
          <Link href={'/'}>
            DevFest
          </Link>
        </span>
      </div>
      <nav className="flex w-full h-14 items-center justify-end gap-4 text-white">
        <button className="hover:opacity-75" onClick={()=> router.push('/MyEvents')}>
        Meus Eventos
        </button>
        <div className="flex gap-1 items-center justify-center">
          <button className="hover:opacity-75" onClick={() => router.push('/Cart')}>
        Carrinho
        </button>
        { eventIds.length > 0 && (
          <div className="badge badge-neutral">{eventIds.length}</div>
          )
        }
        </div>
      </nav>
    </div>
  )
}
