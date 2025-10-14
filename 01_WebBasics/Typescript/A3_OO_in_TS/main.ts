import { Owner } from "./owner";
import { Engine } from "./engine";

let owner1: Owner = new Owner("Nedzhetin", "Nedzhetin", 18);

let engine1: Engine = new Engine(120, "KTM", owner1);

console.log(engine1.getOwnerName() + " " + owner1.getLastName());

console.log(engine1);
console.log(owner1);
