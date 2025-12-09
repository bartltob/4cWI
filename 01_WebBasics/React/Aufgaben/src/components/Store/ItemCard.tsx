import { Link } from "react-router";
import type { iItem } from "./Itemlist.tsx";
type Props = {
  item: iItem;
};
export default function ItemCard({ item }: Props) {
  const OItem = { item };
  return (
    <div>
      <Link to={"/" + item.id} state={OItem}>
        <div className="text-center flex-col border-2 h-80 overflow-hidden">
          <img src={item.images[0]} alt="Bild" className="h-2/3 w-full" />
          <div className="w-full h-20">
            <p className="font-bold">{item.title}</p>
          </div>

          <p className="font-bold">{item.price}€</p>
        </div>
      </Link>
    </div>
  );
}
