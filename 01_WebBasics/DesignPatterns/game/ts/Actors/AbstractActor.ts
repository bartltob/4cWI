import {Actor} from "./actor";
import {MoveStrategy} from "../movements/MoveStrategy";

export abstract class AbstractActor implements Actor {

    constructor(protected movement : MoveStrategy){
    }
    abstract render(ctx : CanvasRenderingContext2D):void;

    update(deltaTime: number) {
        this.movement.update(deltaTime, this.movement.getX())
    }
}