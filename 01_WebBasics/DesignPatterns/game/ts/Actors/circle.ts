import {MoveStrategy} from "../movements/MoveStrategy";
import {AbstractActor} from "./AbstractActor.js";
import {Observer} from "../Observer/Observer";

export class Circle extends AbstractActor implements Observer {
    constructor(private radius:number, private color: string, protected movement:MoveStrategy) {
        super(movement)
    }

    public render(ctx : CanvasRenderingContext2D):void {
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    inform(event: string, data?: any): void {
        console.log("Circle inform",event, data);
        if (event == "click"){
            this.color = "#64066c";
        }
    }
}