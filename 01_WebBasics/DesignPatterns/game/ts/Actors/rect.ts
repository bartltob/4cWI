import {MoveStrategy} from "../movements/MoveStrategy.js";
import {AbstractActor} from "./AbstractActor.js";
import {Observer} from "../Observer/Observer";

export class Rect extends AbstractActor implements Observer {

    constructor(private width:number, private height:number, private color:  string, protected movement: MoveStrategy) {
        super(movement)
    }


    public render(ctx : CanvasRenderingContext2D):void {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.movement.getX(), this.movement.getY(), this.width, this.height);
    }

    inform(event: string, data?: any): void {
        console.log("Rect inform",event, data);
    }


}