// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import {Actor} from "./Actors/actor.js";
import {Rect} from "./Actors/rect.js";
import {Circle} from "./Actors/circle.js";
import {MoveRight} from "./movements/MoveRight.js";
import {MoveLeft} from "./movements/MoveLeft.js";
import {Observer} from "./Observer/Observer";

class MyGame extends Game {
  private actors : Actor[] = [];
  private Observers: Observer[] = [];

  init(): void {
    console.log("Game started!");
    const c1:Circle = new Circle(25, "#18e6a7", new MoveLeft(250, 300, 50));
    this.actors.push(new Rect(100, 100, "#64066c", new MoveRight(100, 100, 30) ));
    this.actors.push(new Rect(100, 100, "#93b62b", new MoveLeft(600, 300, 40) ));
    this.actors.push(c1);

    this.addObserver(c1)
  }

  update(deltaTime: number): void {
    this.actors.forEach((actor)=> actor.update(deltaTime));
  }

  render(ctx: CanvasRenderingContext2D): void {
    this.actors.forEach((actor)=> actor.render(ctx));
  }

  addObserver(Observer: Observer): void {
    this.Observers.push(Observer);
  }

  notifyObserver(event:string, data?:any): void {
    this.Observers.forEach(Observer => {Observer.inform(event, data)});
  }

  onMouseClick(x: number, y: number) {
    console.log("onMouseClick", x, y);
    this.notifyObserver("click", {x, y});
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
