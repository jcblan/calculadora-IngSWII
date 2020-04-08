import iStrategy from "./IStrategy";


class RestarStrategy implements iStrategy{
    constructor(){

    }

    operar(x: number, y:number): number{
        return x - y;
    }
}

export default RestarStrategy;