import HaggiClicker from "./components/useState/Haggi-clicker.tsx";
import { useLocation } from "react-router";

export default function useState() {
  const location = useLocation();
  return (
    <div>
      <p>
        Hallo {location.state.firstname} {location.state.lastname}
      </p>
      <HaggiClicker />
      <HaggiClicker />
      <HaggiClicker />
    </div>
  );
}
