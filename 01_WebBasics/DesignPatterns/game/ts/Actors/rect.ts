import {Actor} from "./actor";
export class Rect implements Actor{
    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private speed: number;
    private color: string;
    constructor(x:number, y:number, width:number, height:number, speed:number, color: string) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.color = color;
    }
    public update(deltaTime : number):void{
        this.x += deltaTime*this.speed;
        this.y += deltaTime*this.speed;

        if (this.x > 800) {
            this.x = -this.width;
        }
        if (this.x + this.width < 0) {
            this.x = 800;
        }

        // Vertikales Wrapping
        if (this.y > 600) {
            this.y = -this.height;
        }
        if (this.y + this.height < 0) {
            this.y = 600;
        }
    }
    public render(ctx : CanvasRenderingContext2D):void {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}