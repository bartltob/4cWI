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
type Props = {
  search: string;
};

function Itemlist({ search }: Props) {
  const [items, setitems] = useState<iItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<iItem[]>([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setitems(data);
        setFilteredItems(data);
      });
  }, []);
  useEffect(() => {
    setFilteredItems(
      items.filter((item: iItem) => item.title.includes(search)),
    );
  }, [search, items]);

  return (
    <div className="max-w-6xl mx-auto px-6 pb-10">
      <div
        className="grid gap-10
                  grid-cols-1
                  sm:grid-cols-2
                  md:grid-cols-3
                  lg:grid-cols-4"
      >
        {filteredItems.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default Itemlist;
