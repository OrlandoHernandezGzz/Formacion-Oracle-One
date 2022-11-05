// Operaciones de comparación.

const ciudadDestino = "Bogota";
const cuidadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");


/*
    Palabra reservada if
    Evalua una condición
*/
console.log(`Verificando pasajes para ${ciudadDestino}`);
if(cuidadesDisponibles.indexOf(ciudadDestino) >= 0){
    console.log('Pasaje disponible para venta');
} else {
    console.log('Ciudad no disponible para viajar');
}

const valorPasaje = "1000";

// el == valida lo siguiente: "1000" == 1000 -> true.
if(valorPasaje === 1000){
    console.log('El pasaje vale 1000');
}


/**
 * Operadores logicos.
 * Y(AND), O(OR) y NO(NOT)
 * AND - && - Se deben cumplir todas las condiciones.
 * OR - || - Se debe cumplir al menos una condicion
 * NOT - ! - No se cumple la condicion.
 */

const edadPasajero = 19;
const estaAcompanado = true

console.log(`Verificando pasajes para ${ciudadDestino}`);
if(cuidadesDisponibles.indexOf(ciudadDestino) >= 0){
    console.log('Pasaje disponible para venta');
} else {
    console.log('Ciudad no disponible para viajar o pasajero no cumple las reglas.');
}