// Tipos de datos.

// Alfanumerico
let nombrePasajero = "Pedro Silva";
console.log(nombrePasajero);

// Numerico
let valorBoleto = 1000;
const impuestoAeropuesto = 100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;
console.log(valorBoleto);

// Logicos (true, false)
let boletoActivo = true;


// Operaciones aritmeticas
let totalBoletos = (valorBoleto + impuestoAeropuesto) + (valorBoleto + impuestoAeropuesto) * porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletos); // 1700


// Concatenacion de textos.
let nombre = "Orlando";
let apellido = "Hernandez"
let nombreCompleto = nombre + apellido;
let pasaporte = '1000' + '12';
let division = parseInt('1000') / parseInt('10');

console.log(nombreCompleto);
console.log(pasaporte);
console.log(division);

let noEsUnNumero = parseInt('ASASAS');
console.log(noEsUnNumero)

