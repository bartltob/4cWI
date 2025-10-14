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

//? MAP führt die gegebene Funktion für jedes Element des Arrays aus, und dient meist zur
//? erstellung eines neuen Arrays, in welchem Elemente verändert, entfernt oder hinzugefügt wurden

//Example externer und anonymer Funktionsaufruf mit map:

let OldPets: Pets[] = pets.map((pet) => ({
  ...pet,
  age: pet.age + 1,
}));
//* anonyme Funktion welche nicht den Ursprünglichen Array verändert, sondern den alten array
//* übernimmt, das alter um 1 erhöht und den neuen Array anschließend in einer Variable speichert

console.log(OldPets);

function OlderPets(pet: Pets): Pets {
  pet.age += 1;
  return pet;
}

pets.map(OlderPets); //* externe Funktion
console.log(pets);

let PetOwners: string[] | undefined = pets.map((pet: Pets) => pet.owner);
//* übliche verwendung von map
//* bei einfachen Ausdrücken kann man sich {} und return sparen,
//* der geschriebene befehl
//* wird automatisch als return gesehen

console.log(PetOwners);

//? FILTER führt gegebene Überprüfung für jedes Element aus, und speichert das ergebnis (true/false)
//? die werte mit true werden anschließend zurückgegeben

let HaggisPets: Pets[] = pets.filter((pet: Pets) => pet.owner === "Haggi");
//* mit filter kann nicht der ursprüngliche Array bearbeitet werden
console.log(HaggisPets);

//? FIND gibt das erste Element zurück, auf welches die Bedingung zustimmt

console.log(pets.find((pet: Pets) => pet.age < 3));

//? REDUCE: Es wird nur ein Wert zurückgegeben
//? Aufbau:
//?  const sumWithInitial = array.reduce(
//?  (accumulator, currentValue) => accumulator + currentValue,
//?   initialValue,
//?  );

console.log(pets);
console.log(pets.reduce((acc: number, pet: Pets) => acc + pet.age, 0));

//? SOME führt gegebene Überprüfung für jedes Element aus, sobald sie ein Element findet,
//? wird true zurückgegeben. Wird kein Element gefunden wird false zurückgegeben

console.log(pets.some((pet: Pets) => pet.age > 3));
console.log(pets.some((pet: Pets) => pet.age > 10));

//? EVERY führt gegebene Überprüfung für jedes Element aus, wenn die Überprüfung auf alle Elemente
//? zutrifft wird true zurückgegeben. Wird kein Element gefunden wird false zurückgegeben

console.log(pets.every((pet: Pets) => pet.age > 1));
console.log(pets.every((pet: Pets) => pet.age > 3));
