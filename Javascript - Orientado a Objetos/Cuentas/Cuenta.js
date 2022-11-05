export class Cuenta {
    #cliente;
    #saldo;

    constructor(cliente, numero, agencia, saldo) {
        if ( this.constructor == Cuenta) {
            throw new Error("No se debe instanciar objetos de la clase cuenta");
        }

        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    // Metodos.
    depositoEnCuenta(valor){
        if (valor > 0) {
            this.#saldo += valor;
        }

        return this.#saldo;
    }

    retirarDeCuenta(valor){
        // Metodo abstracto
        if (this.constructor == Cuenta) {
            throw new Error("No se debe implementar el metodo retirarDeCuenta en su clase");
        }
    }

    _retirarDeCuenta(valor, comision){
        valor *= (1 + comision / 100);

        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        }

        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }

    transferirParaCuenta(valor, cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }

    prueba() {
        console.log("Metodo padre");
    }
}