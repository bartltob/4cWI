interface Pets {
  animal: string;
  name: string;
  age: number;
  owner?: string;
}

const pets: Pets[] = [
  { animal: "Katze", name: "Katze", age: 5, owner: "Haggi" },
  { animal: "Katze", name: "Minka", age: 3 },
  { animal: "Papagei", name: "Kiki", age: 2, owner: "Anna" },
  { animal: "Hamster", name: "Flauschi", age: 1 },
  { animal: "Kanari", name: "Sunny", age: 4, owner: "Clara" },
];
console.log(pets);

/*
Allgemeines:
Jede Arrayfunction kann auf 2 Arten aufgebaut sein:
    -Array.function(externeFunktion)
        dabei wird für jedes Element die Funktion aufgerufen,
        und das Element als Übergabeparameter mitgegeben
    -Array.function((übergabe) => Funktion)
        dabei wird die funktion direkt reingeschrieben und keine externe mehr aufgerufen.
        die Funktion hat ein bestimmtes Format, je nach Array-function
        die übergabe variert ebenfalls je nach Array-function
 */

//Example externer und anonymer Funktionsaufruf mit map:

let OldPets: Pets[] = pets.map((pet) => ({
    ...pet,
    pet: pet.age += 1
})); //anonyme Funktion
console.log(OldPets);

function OlderPets(pet: Pets): Pets {
  pet.age += 1;
  return pet;
}

pets.map(OlderPets); //externe Funktion

console.log(pets);



