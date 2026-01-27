import { Link } from "react-router";


export default function CartIcon() {
  return (
    <div className="relative">
      <Link
        to="/ShoppingCart"
        className="flex items-center justify-center p-2 rounded-full bg-stone-100 hover:bg-stone-200 active:scale-95 transition-transform shadow-md"
        aria-label="Warenkorb"
      >
        <img src="/images/Store/cart.png" alt="Warenkorb" className="h-8 w-8" />
        {/*<span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
          3
        </span>*/}
      </Link>
    </div>
  );
};