import type { CartItem } from "./ItemDetails.tsx";
import { useState } from "react";

type Operation = "add" | "sub" | "del";

function changeQuantity(operation: Operation, item: CartItem) {
  const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const currentItem = cart.find((i) => i.id === item.id);



  if (existingItem) {
    existingItem.quantity = existingItem.quantity + 1;
  } else {
    cart.push({ ...item, quantity: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
}

type Props = {
  item: CartItem;
};

export default function CartItemCom({ item }: Props) {
  const [operation, setOperation] = useState<Operation>("add");
  return (
    <div className="rounded-4xl border border-stone-300 bg-stone-50 p-12 shadow-xl">
      <h2 className="mb-8 text-4xl font-bold text-stone-800">{item.title}</h2>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex gap-6 overflow-x-auto pb-4 lg:flex-none lg:w-60">
          <img
            src={item.images[0]}
            alt={item.title}
            className="h-36 w-36 shrink-0 rounded-2xl border border-stone-300 object-cover shadow"
          />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <p className="text-2xl font-semibold text-stone-900">
            Preis: {item.price} €
          </p>

          <p className="text-lg leading-relaxed text-stone-700">
            {item.description}
          </p>

          <p className="text-lg font-medium text-stone-800 mt-2">
            Menge: {item.quantity}
          </p>
        </div>
      </div>
    </div>
  );
}
