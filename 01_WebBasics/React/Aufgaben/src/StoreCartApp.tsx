import CartItemCom from "./components/Store/CartItemCom.tsx";
import type { CartItem } from "./components/Store/ItemDetails.tsx";
import { useEffect, useState } from "react";
export type Operation = "add" | "sub" | "del";

export default function StoreCartApp() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });
  const [sum, setSum] = useState<number>(0);

  useEffect(() => {
    setSum(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
  }, [cart]);

  function changeQuantity(operation: Operation, item: CartItem) {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      const index = newCart.findIndex((i) => i.id === item.id);

      if (index === -1) return prevCart;

      if (operation === "add") {
        newCart[index].quantity += 1;
      } else if (operation === "sub" && newCart[index].quantity > 1) {
        newCart[index].quantity -= 1;
      } else if (operation === "del") {
        newCart.splice(index, 1);
      }

      localStorage.setItem("cart", JSON.stringify(newCart));

      return newCart;
    });
  }
  return (
    <div className="mx-auto my-20 max-w-6xl flex flex-col gap-6">

      <div className="rounded-3xl border border-stone-200 bg-stone-50 px-8 py-6 shadow-md flex justify-between items-center">
        <h1 className="text-3xl font-bold text-stone-800">Einkaufswagen</h1>
        <p className="text-xl font-semibold text-stone-900">
          Gesamtsumme: {sum} €
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-4">
        {cart.map((item) => (
          <CartItemCom
            key={item.id}
            item={item}
            changeQuantity={changeQuantity}
          />
        ))}
      </div>

      {cart.length > 0 && (
        <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6 shadow-md flex justify-end">
          <button className="rounded-full bg-stone-800 px-6 py-3 text-lg font-bold text-white shadow hover:bg-stone-700 active:scale-95 transition">
            Zur Kasse
          </button>
        </div>
      )}
    </div>
  );
}
