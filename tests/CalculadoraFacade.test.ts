import { expect } from "chai";
import CalculadoraFacade from "../src/CalculadoraFacade";


describe('Test CalculadoraFacade', function() {
    it('Sumar 2 + 2 = 4', function() {
        let cal = new CalculadoraFacade();
        let numero = cal.calcular("dos", "dos", "sumar");
        expect(numero).equal(4);
    });
    it('Restar 3 - 1 = 2', function() {
        let cal = new CalculadoraFacade();
        let numero = cal.calcular("tres", "uno", "restar");
        expect(numero).equal(2);
    });
    it('Producto 2 * 2 = 4', function() {
        let cal = new CalculadoraFacade();
        let numero = cal.calcular("dos", "dos", "producto");
        expect(numero).equal(4);
    });
    it('Division 10 / 2 = 5', function() {
        let cal = new CalculadoraFacade();
        let numero = cal.calcular("uno cero", "dos", "dividir");
        expect(numero).equal(5);
    });
    
});