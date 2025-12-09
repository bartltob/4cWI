import { useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import type { iItem } from "./components/Store/Itemlist.tsx";

export default function StoreDetailsApp() {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  const [error, setError] = useState<string | null>(null);
  const [item, setItem] = useState<iItem>();
  useEffect(() => {
    try {
      if (!location.state || location.state.item.id !== Number(id)) {
        throw new Error("Could not find location");
      }
      setItem(location.state.item);
    } catch (err: unknown) {
      setError(String(err));
    }
  }, [id, location.state]);
  return (
    <div>
      {error ? <p style={{ color: "red" }}>{error}</p> : <pre>{JSON.stringify(item, null, 2)}</pre>}
    </div>
  );
}
