const ciudadDestino = "Bogota";
const cuidadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");

let edadPasajero = 18;
let estaAcompanado = true;
let tienePasaporte = true;
let estaCasado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);

if((cuidadesDisponibles.indexOf(ciudadDestino) > -1) && edadPasajero >= 18 && tienePasaporte && estaCasado){
    console.log('Pasaje de casado disponible para venta');
} else {
    console.log('Ciudad no disponible para viajar o pasajero no cumple las reglas.');
}