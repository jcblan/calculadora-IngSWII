import { expect } from "chai";
import OperacionContext from "../src/OperacionContext";
import SumarStrategy from "../src/SumarStrategy";
import RestarStrategy from "../src/RestarStrategy";
import ProductoStrategy from "../src/ProductoStrategy";
import DivisionStrategy from "../src/DivisionStrategy";


describe('Test OperacionContext', function() {
    it('Sumar 2 + 2 = 4', function() {
    let op = new OperacionContext(new SumarStrategy());
    let numero = op.realizarOperacion(2, 2);
    expect(numero).equal(4);
    });
    it('Restar 10 - 3 = 7', function() {
        let op = new OperacionContext(new RestarStrategy());
        let numero = op.realizarOperacion(10, 3);
        expect(numero).equal(7);
    });
    it('Producto 3 * 3 = 9', function() {
        let op = new OperacionContext(new ProductoStrategy());
        let numero = op.realizarOperacion(3, 3);
        expect(numero).equal(9);
    });
    it('Division 10 / 2 = 5', function() {
        let op = new OperacionContext(new DivisionStrategy());
        let numero = op.realizarOperacion(10, 2);
        expect(numero).equal(5);
    });
    
});
describe('Test Numeros Grandes', function() {
    it('23 cifras 10000000000000000000000', function() {
        let op = new OperacionContext(new SumarStrategy());
        let numero = op.realizarOperacion(9999999999999999999999, 1);
        expect(numero).equal(10000000000000000000000);
    });
    it('50 cifras - 10000000000000000000000000000000000000000000000000', function() {
        let op = new OperacionContext(new SumarStrategy());
        let numero = op.realizarOperacion(9999999999999999999999999999999999999999999999999, 1);
        expect(numero).equal(10000000000000000000000000000000000000000000000000);
    });
});