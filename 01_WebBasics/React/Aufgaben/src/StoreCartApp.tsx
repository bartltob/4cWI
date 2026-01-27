import CartItemCom from "./components/Store/CartItemCom.tsx";
import type { CartItem } from "./components/Store/ItemDetails.tsx";
import { useState } from "react";
export type Operation = "add" | "sub" | "del";

export default function StoreCartApp() {


  const [cart, setCart] = useState<CartItem[]>(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });

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
    <div className="mx-auto my-20 max-w-6xl flex flex-col gap-12">
      <h1 className="text-5xl font-bold tracking-tight text-stone-800 mb-12">
        Dein Warenkorb
      </h1>

      {cart.map((item) => (
        <CartItemCom item={item} changeQuantity={changeQuantity} />
      ))}
    </div>
  );
}
