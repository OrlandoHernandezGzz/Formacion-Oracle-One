import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta{

    constructor(cliente, numero, agencia){
        super(cliente, numero, agencia, 0);
    }

    // Sobreescribiendo los metodos.
    retirarDeCuenta(valor){
        super._retirarDeCuenta(valor, 2);
    }
    
}