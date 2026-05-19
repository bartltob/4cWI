import {MoveStrategy} from "./MoveStrategy.js";

export class MoveLeft implements MoveStrategy {

    constructor(private x: number, private y: number, private speed: number) {
    }

    update(deltatime: number, x: number) {
        this.x = ((this.x - this.speed * deltatime) % 800 + 800) % 800;
    }

    getX():number{
        return this.x;
    }

    getY():number{
        return this.y;
    }
}