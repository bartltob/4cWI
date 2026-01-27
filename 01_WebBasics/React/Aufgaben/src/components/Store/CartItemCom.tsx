import type { CartItem } from "./ItemDetails.tsx";
import type { Operation } from "../../StoreCartApp.tsx";

type Props = {
  item: CartItem;
  changeQuantity: (operation: Operation, item: CartItem) => void;
};

export default function CartItemCom({ item, changeQuantity }: Props) {
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
          <div className="mt-4 flex items-center gap-6">
            <button
              onClick={() => changeQuantity("sub", item)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-300 bg-white shadow-sm transition hover:bg-stone-100 active:scale-95"
              aria-label="Menge verringern"
            >
              <img
                src="/images/Store/minus.png"
                alt="-"
                className="h-5 w-5 opacity-80"
              />
            </button>

            <span className="min-w-[4rem] text-center text-xl font-semibold text-stone-800">
              {item.quantity}
            </span>

            <button
              onClick={() => changeQuantity("add", item)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-300 bg-white shadow-sm transition hover:bg-stone-100 active:scale-95"
              aria-label="Menge erhöhen"
            >
              <img
                src="/images/Store/plus.png"
                alt="+"
                className="h-5 w-5 opacity-80"
              />
            </button>

            <button
              onClick={() => changeQuantity("del", item)}
              className="ml-6 flex h-12 w-12 items-center justify-center rounded-full border border-red-300 bg-red-50 shadow-sm transition hover:bg-red-100 active:scale-95"
              aria-label="Artikel entfernen"
            >
              <img
                src="/images/Store/mulleimer.png"
                alt="löschen"
                className="h-5 w-5 opacity-80"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
