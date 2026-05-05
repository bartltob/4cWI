import { Link } from "react-router";

export default function CartIcon() {
  return (
    <div>
      <Link
        to="/ShoppingCart"
        className="flex items-center justify-center p-3 rounded-full bg-stone-100 hover:bg-stone-200 active:scale-95 transition-transform shadow-md"
        aria-label="Warenkorb"
      >
        <img src="/images/Store/cart.png" alt="Warenkorb" className="h-7 w-7" />
      </Link>
    </div>
  );
}
