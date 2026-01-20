import type { iItem } from "./Itemlist.tsx";
import { Link } from "react-router";

type props = {
  item: iItem;
};

export interface CartItem extends iItem {
  quantity: number;
}

function Formate_Date(zeit: string): string {
  const d = new Date(zeit);
  return d.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function Add_Item_To_Cart(item: iItem) {
  const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const existingItem = cart.find(i => i.id === item.id);
  if (existingItem) {
    existingItem.quantity = existingItem.quantity + 1;
  } else {
    cart.push({...item, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

function ItemDetails({ item }: props) {
  return (
    <div className="mx-auto my-20 max-w-6xl rounded-4xl border border-stone-300 bg-stone-50 p-12 shadow-xl">
      <h2 className="mb-10 text-5xl font-bold tracking-tight text-stone-800">
        {item.title}
      </h2>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
        <div>
          <div className="mb-10 flex gap-6 overflow-x-auto pb-4">
            {item.images.map((bild, i) => (
              <img
                key={i}
                src={bild}
                alt={item.title}
                className="h-40 w-40 shrink-0 rounded-2xl border border-stone-300 object-cover shadow"
              />
            ))}
          </div>

          <p className="mb-6 text-3xl font-semibold text-stone-900">
            Preis: {item.price} €
          </p>

          <p className="max-w-4xl text-lg leading-relaxed text-stone-700">
            {item.description}
          </p>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-stone-300 bg-white p-6 shadow-sm">
          <Link
            onClick={() => Add_Item_To_Cart(item)}
            to={"/ShoppingCart"}
            className="rounded-xl border border-stone-400 bg-stone-100 py-4 text-center text-xl font-medium shadow hover:bg-stone-200"
          >
            Add to cart
          </Link>

          <p className="mt-6 text-sm text-stone-500">
            Zuletzt erneuert am:
            <br />
            {Formate_Date(item.updatedAt)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
