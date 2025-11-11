import { useEffect, useState } from "react";

function LightSwitch() {
  const [State, setState] = useState(false);
  const img = State ? "/images/lightOn.png" : "/images/lightOff.png";
  const bgcolor = State ? "bg-yellow-200" : "bg-gray-300";
  useEffect(() => {
    document.body.className = bgcolor;
  }, [bgcolor]);
  return (
    <div
      className="bg-white w-150 h-100 p-3 rounded-4xl border-8 flex justify-center"
      onClick={() => setState(!State)}
    >
      <img src={`${img}`} alt="lightbulb" className="w-100 h-full" />
    </div>
  );
}

export default LightSwitch;
