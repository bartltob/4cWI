// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import {Actor} from "./Actors/actor.js";
import {Rect} from "./Actors/rect.js";
import {Circle} from "./Actors/circle.js";

class MyGame extends Game {
  private actors : Actor[] = [];

  init(): void {
    console.log("Game started!");
    this.actors.push(new Rect(100, 100, 100, 100, 100, "#64066c"));
    this.actors.push(new Circle(100, 100, 10, -100, "#18e6a7"));
  }

  update(deltaTime: number): void {
    this.actors.forEach((actor)=> actor.update(deltaTime));
  }

  render(ctx: CanvasRenderingContext2D): void {
    this.actors.forEach((actor)=> actor.render(ctx));
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
