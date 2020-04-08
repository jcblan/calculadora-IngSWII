import { expect } from "chai";
import Parser from "../src/Parser";


describe('Test Parser', function() {
    it('Parser.parsear("uno dos tres") -> numero = 123', function() {
        let p = new Parser();
        let numero = p.parsear("uno dos tres");
        expect(numero).equal(123);
    }); 
    it('Parser.parsear("cuatro cinco seis") -> numero = 456', function() {
        let p = new Parser();
        let numero = p.parsear("cuatro cinco seis");
        expect(numero).equal(456);
    });
    it('Parser.parsear("siete ocho nueve") -> numero = 789', function() {
        let p = new Parser();
        let numero = p.parsear("siete ocho nueve");
        expect(numero).equal(789);
    });
    it('Parser.parsear("cero") -> numero = 0', function() {
        let p = new Parser();
        let numero = p.parsear("cero");
        expect(numero).equal(0);
    });
});