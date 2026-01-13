import { useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import ItemDetails from "./components/Store/ItemDetails.tsx";

export default function StoreDetailsApp() {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    try {
      if (!location.state || location.state.item.id !== Number(id)) {
        throw new Error("Could not find location");
      }
    } catch (err: unknown) {
      setError(String(err));
    }
  }, [id, location.state]);
  return (
    <div>
      {error ? <p style={{ color: "red" }}>{error}</p> : <ItemDetails item={location.state.item} />}
    </div>
  );
}
