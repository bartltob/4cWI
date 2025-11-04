import { useState } from "react";

function HaggiClicker() {
  const [count, setcount] = useState(0);
  const img = count > 100 ? "/images/thumbs-up.png" : "/images/haggi.jpeg"
  return (
    <div className="relative inline-block p-5">
      <img
        src={`${img}`}
        alt="Haggi :("
        onClick={() => setcount(count + 1)}
      />
      <p className="absolute top-8/12 left-1/2 -translate-x-1/2 bg-white px-4">{count}</p>
    </div>
  );
}

export default HaggiClicker;
