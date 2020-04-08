import iStrategy from "./iStrategy";

export class OperacionContext {

   _estrategia: iStrategy;

  constructor(estrategia: iStrategy){
      this.estrategia = estrategia
  }

  set estrategia(estrategia: iStrategy){
      this._estrategia = estrategia
  }

  get estrategia():iStrategy{
      return this._estrategia;
  }

  realizarOperacion(x: number, y: number): number{
    return this.estrategia.operar(x, y);
  }

}

export default OperacionContext;
