import { Owner } from "./owner";

export class Engine {
  private _Fuel: string = "";

  constructor(
    private _Horsepower: number,
    private _Manufacturer: string,
    private Owner: Owner,
  ) {}

  getFuel(): string {
    return this._Fuel;
  }
  setFuel(fuel: string): void {
    this._Fuel = fuel;
  }

  getHorsepower(): number {
    return this._Horsepower;
  }

  setHorsepower(horsepower: number) {
    this._Horsepower = horsepower;
  }

  getManufacturer(): string {
    return this._Manufacturer;
  }

  setManufacturer(manufacturer: string) {
    this._Manufacturer = manufacturer;
  }

  getOwnerName(): string {
    return this.Owner.getFirstName();
  }
}
