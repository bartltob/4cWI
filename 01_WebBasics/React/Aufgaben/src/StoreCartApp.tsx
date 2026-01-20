import CartItemCom from "./components/Store/CartItemCom.tsx";
import type { CartItem } from "./components/Store/ItemDetails.tsx";

export default function StoreCartApp() {
  const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
  return (
    <div className="mx-auto my-20 max-w-6xl flex flex-col gap-12">
      <h1 className="text-5xl font-bold tracking-tight text-stone-800 mb-12">
        Dein Warenkorb
      </h1>

      {cart.map((item) => (
        <CartItemCom item={item} />
      ))}
    </div>
  );
}
