import Itemlist from "./components/Store/Itemlist.tsx";
import CartIcon from "./components/Store/CartIcon.tsx";
import { useState } from "react";

export default function StoreApp() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="flex items-center justify-between max-w-5xl mx-auto px-6 py-6">
        <input
          type="text"
          placeholder="Suche nach Waren..."
          className="flex-1 max-w-md px-5 py-3 rounded-full bg-stone-100 hover:bg-stone-200 focus:bg-stone-200 transition shadow-md outline-none text-sm"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />

        <div className="ml-6">
          <CartIcon />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <Itemlist search={searchValue} />
      </div>
    </div>
  );
}
