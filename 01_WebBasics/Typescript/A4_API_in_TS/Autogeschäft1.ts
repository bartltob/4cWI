import {CarAPI} from "./CarAPI";
import {Car} from "./Car";

let cars: Car[] = [
    { color: "rot", manufacturer: "Volkswagen", model: "Golf", horsepower: 150 },
    { color: "blau", manufacturer: "BMW", model: "320i", horsepower: 180 },
    { color: "schwarz", manufacturer: "Audi", model: "A4", horsepower: 200 },
    { color: "weiß", manufacturer: "Toyota", model: "Corolla", horsepower: 130 },
    { color: "grün", manufacturer: "Ford", model: "Focus", horsepower: 160 },
    { color: "gelb", manufacturer: "Opel", model: "Corsa", horsepower: 120 }
];

export class AutohausDornbirn implements CarAPI{
    getAllCars(): Car[] {
        return cars;
    }
    findCars(searchText: string): Car[] {
        return cars.filter((car: Car) => car.model === searchText);
    }
}