import Header from "@/components/Header";
import { CartItem } from "@/types/Cart";
import { useEffect, useState } from "react";

export default function MyEvents() {
  const [cartData, setCartData] = useState<CartItem[]>([])

  useEffect(() => {
    const purchaseEvents = localStorage.getItem("purchased_items")
     if (purchaseEvents) {
       setCartData( JSON.parse(purchaseEvents))
     }
  }, [])

  return(
    <div>
      <Header/>
      <div className="flex items-center justify-center flex-col gap-6 mb-4">
        <h2 className="text-white font-bold mt-16 md:mt-24">Meus eventos</h2>
        <p>Informações sobre os seus eventos:</p>
        {
          cartData.map((event, index) => {
            return(
            <div key={index} className="bg-white w-4/5 md:w-3/5 p-4 rounded-md">
              <h4 className="text-black font-bold">
              {event.name}
              </h4>
              <div className="flex items-start justify-start gap-2">
                <h5>
                  quantidade de ingressos:
                </h5>
                <h5>
                  {event.quantity}
                </h5>
              </div>
            </div>
            )
          })
        }
      </div>
    </div>

  )
}
