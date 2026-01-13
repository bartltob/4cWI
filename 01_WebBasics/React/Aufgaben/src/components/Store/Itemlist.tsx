import { useEffect, useState } from "react";
import ItemCard from "./ItemCard.tsx";

export interface iItem {
  title: string;
  images: string[];
  price: number;
  id: number;
  description: string;
  updatedAt: string;
}

function Itemlist() {
  const [items, setitems] = useState<iItem[]>([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setitems(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 p-4">
      {items.map((item) => (
        <ItemCard item={item} />
      ))}
    </div>
  );

}

export default Itemlist;
