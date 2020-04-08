

class Parser {

    constructor(){

    }

    parsear(cadena: string): number {
        let numero = "";
        let valores = cadena.split(" ");
        for(let i = 0; i < valores.length; i++){
            switch(valores[i]){
                case "cero":
                    numero = numero.concat("0");
                    break;
                case "uno":
                    numero = numero.concat("1");
                    break;
                case "dos":
                    numero = numero.concat("2");
                    break;
                case "tres":
                    numero = numero.concat("3");
                    break;
                case "cuatro":
                    numero = numero.concat("4");
                    break;
                case "cinco":
                    numero = numero.concat("5");
                    break;
                case "seis":
                    numero = numero.concat("6");
                    break;
                case "siete":
                    numero = numero.concat("7");
                    break;
                case "ocho":
                    numero = numero.concat("8");
                    break;
                case "nueve":
                    numero = numero.concat("9");
                    break;
            }
        
        }
        return Number(numero);
    }
}    

export default Parser;