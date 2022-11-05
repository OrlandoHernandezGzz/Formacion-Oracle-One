/**
 * Una clase es como una molde,
 * de esta forma no tendremos que crear demasiadas variables.
 */

import { Cuenta } from "./Cuenta.js";

// Definicion de clases.
export class CuentaCorriente extends Cuenta {
    // Atributos
    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia) {
        // Referencia el constructor de la clase padre.
        super(cliente, numero, agencia, 0);
        CuentaCorriente.cantidadCuentas++;
    }

    // Sobreescribiendo el metodo.
    prueba(){
        // super.prueba();
        console.log("Metodo hijo");
    }

    retirarDeCuenta(valor){
        super._retirarDeCuenta(valor, 5);
    }
}