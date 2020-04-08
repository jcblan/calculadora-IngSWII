import iStrategy from "./IStrategy";


class ProductoStrategy implements iStrategy{
    constructor(){

    }

    operar(x: number, y:number): number{
        return x * y;
    }
}

export default ProductoStrategy;