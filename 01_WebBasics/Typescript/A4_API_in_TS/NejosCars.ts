import {Car} from "./Car";
import {CarAPI} from "./CarAPI";

let cars: Car[] = [
    { color: "metallic rot", manufacturer: "Hot Wheels", model: "Twin Mill", horsepower: 180 },
    { color: "blau", manufacturer: "Hot Wheels", model: "Bone Shaker", horsepower: 120 },
    { color: "gelb", manufacturer: "Hot Wheels", model: "Deora II", horsepower: 100 },
    { color: "grün", manufacturer: "Hot Wheels", model: "Hot Bird", horsepower: 140 },
    { color: "lila", manufacturer: "Hot Wheels", model: "Street Beast", horsepower: 160 },
    { color: "orange", manufacturer: "Hot Wheels", model: "Sizzler", horsepower: 130 },
    { color: "schwarz", manufacturer: "Hot Wheels", model: "Rip Rod", horsepower: 150 }
];

export class NejosCars implements CarAPI{
    getAllCars(): Car[] {
        return cars;
    }
    findCars(searchText: string): Car[] {
        return cars.filter((car: Car) => car.model === searchText);
    }
}