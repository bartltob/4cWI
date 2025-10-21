import { NejosCars } from "./NejosCars";
import { Car } from "./Car";
import {AutohausDornbirn} from "./Autogeschäft1";

let nejoscars1: NejosCars = new NejosCars();
let autohausDornbirn1: AutohausDornbirn = new AutohausDornbirn();

console.log(nejoscars1.getAllCars());
console.log(autohausDornbirn1.getAllCars());
console.log("Nejos favorite Car:");
console.log(nejoscars1.findCars("Bone Shaker"));
