/**
 * Una clase es como una molde,
 * de esta forma no tendremos que crear demasiadas variables.
 */

// Definicion de clases.
export class Cliente {
    // Atributos.
    nombreCliente;
    dniCliente;
    rfcCliente;
    #clave;

    constructor(nombreCliente, dniCliente, rfcCliente) {
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rfcCliente = rfcCliente;
        this.#clave = "";
    }

    asignarClave(clave){
        this.#clave = clave
    }

    autenticable(clave) {
        // return clave == this.#clave;
        return true;
    }
}