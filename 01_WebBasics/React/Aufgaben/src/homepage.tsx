import { Link } from "react-router";

const links = [
  { to: "/HaggiClicker", label: "Haggi Clicker (useState)" },
  { to: "/LightSwitch", label: "Lichtschalter (useState)" },
  { to: "/ToDo", label: "ToDo-Liste (useEffekt)" },
  { to: "/Persons", label: "Personen - API (useEffekt)" },
  { to: "/ToDoFilter", label: "ToDoList Filter" },
];


const visitor = {firstname:"Luca Andreas", lastname:"Hagspiel", pet:"Cat"};

export default function Uebersicht() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d1117] p-10">
      <h1 className="text-6xl font-extrabold text-[#f0ebe0] mb-20">
        Übersicht der Anwendungen
      </h1>

      <nav className="flex flex-col space-y-8 w-full max-w-lg">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            state={visitor}
            className="transition-transform duration-200 text-[#f0ebe0] bg-[#1b1f2a] hover:bg-[#2c2f3c] px-8 py-6 rounded-xl text-center text-2xl font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
