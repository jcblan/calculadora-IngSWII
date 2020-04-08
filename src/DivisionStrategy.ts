import iStrategy from "./iStrategy";


class DivisionStrategy implements iStrategy{
    constructor(){

    }

    operar(x: number, y:number): number{
        return Math.floor(x / y);
    }
}

export default DivisionStrategy;