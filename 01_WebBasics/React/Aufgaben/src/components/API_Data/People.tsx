import Card from "./Card.tsx";
import { useEffect, useState } from "react";

function People() {
  interface Persons {
    Job: string;
    name: string;
    avatar: string;
  }
  const [Persons, setPersons] = useState<Persons[]>([]);
  useEffect(() => {
    fetch("https://6909dc1b1a446bb9cc20522c.mockapi.io/Persons")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPersons(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 p-4">
      {Persons.map((person) => (
        <Card job={person.Job} name={person.name} image={person.avatar} />
      ))}
    </div>
  );
}

export default People;
