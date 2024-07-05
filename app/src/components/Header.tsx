
export default function Header () {

// const event = useSelector((state: RootState) => state.EventsSlice)
  return(
    <div className="flex bg-blocky-dark w-full h-14 items-center justify-between p-4 fixed">
      <div>
        <span className="font-bold text-pantone">
        DevFest
        </span>
      </div>
      <nav className="flex w-full h-14 items-center justify-end gap-4 text-white">
        <button className="hover:opacity-75">
        Crie o seu evento
        </button>
        <button className="hover:opacity-75">
        Meus Eventos
        </button>
        <button className="hover:opacity-75">
       Carrinho
        </button>
      </nav>
    </div>
  )
}
