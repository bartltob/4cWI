import type {iItem} from "./Itemlist.tsx";

type props = {
    item: iItem;
};

function Formate_Date(zeit: string): string {
    const d = new Date(zeit);
    return d.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}


function ItemDetails({item}: props) {
    return (
        <div className="max-w-full h-full rounded-2xl border border-stone-300 bg-stone-50 p-6 shadow m-10">
            <h2 className="mb-3 text-2xl font-semibold">{item.title}</h2>

            <div className="mb-4 flex gap-2 overflow-x-auto">
                {item.images.map((bild, i) => (
                    <img
                        key={i}
                        src={bild}
                        alt={item.title}
                        className="h-24 w-24 rounded-lg border border-stone-300 object-cover"
                    />
                ))}
            </div>

            <p className="mb-2 text-lg font-bold">
                Preis: {item.price.toFixed(2)}€
            </p>

            <p className="mb-4 text-sm">{item.description}</p>

            <p className="text-xs text-stone-600">
                Zuletzt erneuert am: {Formate_Date(item.updatedAt)}
            </p>
        </div>
    );
}

export default ItemDetails;