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

describe('Test 100 y 1000 cifras', function() {
    it('100 cifras', function() {
        let cal = new CalculadoraFacade();
        let muchosNueves = "nueve";
        let muchosMillones = "1";
        for(let i = 1; i < 100; i++){
            muchosNueves = muchosNueves.concat(" nueve");
        }
        let numero = cal.calcular(muchosNueves, "uno", "sumar");
        for(let i = 0; i < 100; i++){
            muchosMillones = muchosMillones.concat("0");
        }
        expect(numero).equal(Number(muchosMillones));
    });
    it('1000 cifras', function() {
        let cal = new CalculadoraFacade();
        let muchosNueves = "nueve";
        let muchosMillones = "1";
        for(let i = 1; i < 1000; i++){
            muchosNueves = muchosNueves.concat(" nueve");
        }
        let numero = cal.calcular(muchosNueves, "uno", "sumar");
        for(let i = 0; i < 1000; i++){
            muchosMillones = muchosMillones.concat("0");
        }
        expect(numero).equal(Number(muchosMillones));
    });

});