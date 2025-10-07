interface Car {
  brand: string;
  model: string;
  price: number;
  year: number;
}
const cars: Car[] = [
  { brand: "Mercedes-Benz", model: "E-Class", price: 62000, year: 2023 },
  { brand: "BMW", model: "M3", price: 75000, year: 2024 },
  { brand: "Audi", model: "A6", price: 58000, year: 2022 },
  { brand: "Volkswagen", model: "Golf GTI", price: 37000, year: 2023 },
  { brand: "Porsche", model: "911 Carrera", price: 120000, year: 2025 },
  { brand: "Fiat", model: "Panda", price: 3000, year: 2010 },
];

function getTotalPrice(cars: Car[]): number {
  let TotalPrice: number = 0;
  cars.forEach((car) => {
    TotalPrice += car.price;
  });
  return TotalPrice;
}

function printCars(cars: Car[]): void {
  cars.forEach((car) => {
    console.log(`
    Marke: ${car.brand} 
    Modell: ${car.model} 
    Preis: ${car.price} 
    Baujahr: ${car.year} `);
  });
}

function getExpensiveCars(cars: Car[], minPrice: number): Car[] {
  let ExpensiveCars: Car[] = [];
  cars.forEach((car: Car): void => {
    if (car.price >= minPrice) {
      ExpensiveCars.push(car);
    }
  });
  return ExpensiveCars;
}

function getTotalPriceReduce(cars: Car[]): number {
  return cars.reduce((total, car) => total + car.price, 0);
}

function getExpensiveCarsFilter(cars: Car[], minPrice: number): Car[] {
  return cars.filter((car) => car.price >= minPrice);
}

console.log(`\nSUMME: ${getTotalPrice(cars)}`);
console.log("\nLISTE ALLER AUTOS:");
printCars(cars);
console.log("\nTEUERSTES AUTO:");
printCars(getExpensiveCars(cars, 100000));
console.log(`\nSUMME MIT REDUCE: ${getTotalPriceReduce(cars)}`);
console.log("\nTEUERSTES AUTO MIT FILTER:");
printCars(getExpensiveCarsFilter(cars, 100000));
