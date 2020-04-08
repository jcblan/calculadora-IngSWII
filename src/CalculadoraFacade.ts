import OperacionContext from "../src/OperacionContext";
import SumarStrategy from "../src/SumarStrategy";
import RestarStrategy from "../src/RestarStrategy";
import ProductoStrategy from "../src/ProductoStrategy";
import DivisionStrategy from "../src/DivisionStrategy";
import Parser from "../src/Parser";

export class CalculadoraFacade{

    _parseador: Parser
    _opContext: OperacionContext
    
    constructor(){
        this.parseador = new Parser();
        this.opContext = new OperacionContext(null);
    }

    get parseador(): Parser{
        return this._parseador;
    }

    set parseador(parser: Parser){
        this._parseador = parser;
    }

    set opContext(opContext: OperacionContext){
        this._opContext = opContext;
    }
        
    get opContext():OperacionContext{
        return this._opContext;
    }
    
    calcular(x: string, y: string, operacion: string): number{
        let op1 = this.parseador.parsear(x);
        let op2 = this.parseador.parsear(y);
        let resultado = 0;
        switch(operacion){
            case "sumar": 
                this.opContext.estrategia = new SumarStrategy();
                resultado = this.opContext.realizarOperacion(op1, op2);
                break;
            case "restar":
                this.opContext.estrategia = new RestarStrategy();
                resultado = this.opContext.realizarOperacion(op1, op2);
                break;
            case "producto":
                this.opContext.estrategia = new ProductoStrategy();
                resultado = this.opContext.realizarOperacion(op1, op2);
                break;
            case "dividir": 
                this.opContext.estrategia = new DivisionStrategy();
                resultado = this.opContext.realizarOperacion(op1, op2);
                break;
        }
        return resultado;
    }

}

export default CalculadoraFacade;
