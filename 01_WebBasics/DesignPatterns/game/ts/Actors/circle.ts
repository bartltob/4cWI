import {Actor} from "./actor";

export class Circle implements Actor {
    private x: number;
    private y: number;
    private radius: number;
    private speed: number;
    private color: string;
    constructor(x:number, y:number, radius:number, speed:number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.color = color;
    }
    public update(deltaTime : number):void{
        this.x += deltaTime*this.speed;
        this.y += deltaTime*this.speed;

        if (this.x > 800) {
            this.x = -this.radius;
        }
        if (this.x + this.radius < 0) {
            this.x = 800;
        }

        if (this.y > 600) {
            this.y = -this.radius;
        }
        if (this.y + this.radius < 0) {
            this.y = 600;
        }
    }
    public render(ctx : CanvasRenderingContext2D):void {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}