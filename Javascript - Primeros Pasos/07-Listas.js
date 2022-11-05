const ciudad1 = "Bogota";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

// Formas de declarar un arreglo.
const cuidadesDisponibles = new Array("Bogota", "Lima", "Santiago");
console.log(cuidadesDisponibles);

// Otra forma mas abreviada.
const paisesDisponibles = ["Colombia", "Peru", "Chile", "Brasil", "Argentina"];
console.log(paisesDisponibles);

paisesDisponibles.push("Uruguay");
cuidadesDisponibles.push("MonteVideo");

paisesDisponibles.unshift("Ecuador");
cuidadesDisponibles.unshift("Quito");

console.log(paisesDisponibles);
console.log(cuidadesDisponibles);


// Mostrando el primer elemento de la lista.
console.log(paisesDisponibles[0]);
console.log(cuidadesDisponibles[0]);


// Eliminando elementos.
paisesDisponibles.splice(1, 2, 'Venezuela');
console.log(paisesDisponibles);