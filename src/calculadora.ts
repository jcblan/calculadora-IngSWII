
export class Calculadora {

    constructor() {

    }

    sumar(a: number, b: number): number {
        let elem = [];

        if (a == 0)
        {
            return b;
        }
        else if (b == 0)
        {
            return a;
        }

        for(let i = 0;i < a;i++)
        {
            elem.push("1");
        }
        
        for(let i = 0;i < b;i++)
        {
            elem.push("1");
        }
        return elem.length;
    }

    restar(a: number, b:number):number {

        if (a == b){
            return 0;
        }

        let elem = [];
        let men = 0; 
        let may = 0;

        if (a > b){
            may = a;
            men = b;
        }else {
            may = b;
            men = a;
        }
    
        for(let i = 0;i < may;i++)
        {
            elem.push("1");
        }
        
        for(let i = 0;i < men;i++)
        {
            elem.pop();
        }

        return elem.length;
        
    }

}

export default Calculadora;
