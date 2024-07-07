import { RootState } from "@/redux/reducers";
import { CartItem } from "@/types/Cart";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const [eventIds, setEventIds] = useState<number[]>([]);
  const [eventQuantity, setEventQuantity] = useState<number>(1);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [alertFinishCart, setAlertFinishCart] = useState<boolean>(false);

  const events = useSelector((state: RootState) => state.EventsSlice.value);

  const router = useRouter();

  useEffect(() => {
    const storedEventIds = localStorage.getItem("event_id");
    if (storedEventIds) {
      const parsedEventIds = JSON.parse(storedEventIds);
      setEventIds(parsedEventIds);
    }
  }, []);

  const addToCart = (eventId: number) => {
    const event = events.find((e) => e.id === eventId);
    if (event) {
      const item: CartItem = {
        id: event.id,
        name: event.name,
        quantity: eventQuantity,
      };
      setCartItems((prevCartItems) => [...prevCartItems, item]);
      localStorage.setItem("cart_items", JSON.stringify([...cartItems, item]));
    }
  };

  const removeFromCart = (itemId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cart_items", JSON.stringify(updatedCart));
  };

  const finalizePurchase = () => {
    localStorage.setItem("purchased_items", JSON.stringify(cartItems));
    setEventIds([]);
    setEventQuantity(1);
    setCartItems([]);
    localStorage.removeItem("event_id");
    localStorage.removeItem("cart_items");
    setAlertFinishCart(true);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    setEventQuantity(newQuantity);
  };

  const handleReturnToStart = () => {
    router.push('/')
    setAlertFinishCart(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {!alertFinishCart && eventIds.length > 0 ? (
        <div className="bg-white gap-4 p-4 w-4/5 mt-4">
          {eventIds.map((eventId) => {
            const event = events.find((e) => e.id === eventId);
            return (
              event && (
                <div  key={eventId}>
                  <h3 className="text-black font-semibold">{event.name}</h3>
                  {
                    eventQuantity ?  <p>Quantidade de ingressos: {eventQuantity}</p> :  <p>Adicione ingressos ao seu carrinho</p>
                  }
                  <div className="flex items-start justify-start flex-col gap-2">
                    <input
                      type="number"
                      value={eventQuantity}
                      onChange={handleQuantityChange}
                      className="border-gray-300 border rounded-md p-1 text-center"
                    />
                    <button
                      className="text-white bg-blocky-dark hover:bg-dark-blue focus:ring-4 focus:ring-blue font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                      onClick={() => addToCart(eventId)}
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              )
            )
          })}
        </div>
      ) : !alertFinishCart && (
        <div className="bg-white gap-4 p-4 w-4/5 mt-4 rounded-md">
          <h3 className="text-black">Seu carrinho está vazio!!</h3>
          <button
            className="bg-black hover:bg-dark-blue text-white font-bold py-2 px-4 rounded mt-2"
            onClick={handleReturnToStart}
          >
            Voltar para o Início
          </button>
        </div>
      )}

      {!alertFinishCart && cartItems.length > 0 && (
        <div className="mt-4  w-4/5">
          <h2 className="text-lg font-semibold mb-2">Itens no Carrinho:</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-2 gap-4">
              <h3 className="text-black font-semibold">{item.name}</h3>
              <p>Quantidade: {item.quantity}</p>
              <button
                className="text-white bg-blocky-dark hover:bg-dark-blue focus:ring-4 focus:ring-blue font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                onClick={() => removeFromCart(item.id)}
              >
                Remover do Carrinho
              </button>
            </div>
          ))}
          <button
            className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={finalizePurchase}
          >
            Finalizar Compra
          </button>
        </div>
      )}

      {alertFinishCart && (
        <div className="bg-green-200 p-4 mt-4 rounded-lg">
          <p className="text-lg font-semibold">Compra finalizada!</p>
          <button
            className="bg-black hover:bg-dark-blue text-white font-bold py-2 px-4 rounded mt-2"
            onClick={handleReturnToStart}
          >
            Voltar para o Início
          </button>
        </div>
      )}
    </div>
  );
}
