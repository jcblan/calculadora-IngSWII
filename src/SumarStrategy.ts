import iStrategy from "./iStrategy";


class SumarStrategy implements iStrategy{
    constructor(){

    }

    operar(x: number, y:number): number{
        return x + y;
    }
}

export default SumarStrategy;