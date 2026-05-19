export interface MoveStrategy {
    update(deltaTime: number, x:number): void;
    getX():number;
    getY():number;
}