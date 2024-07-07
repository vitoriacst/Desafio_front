import Link from "next/link";
import { useRouter } from "next/router";

export default function Header () {
  const router = useRouter()
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
        <button className="hover:opacity-75" onClick={() => router.push('/Cart')}>
       Carrinho
        </button>
      </nav>
    </div>
  )
}
