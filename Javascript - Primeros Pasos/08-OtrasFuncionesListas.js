// Formas de declarar un arreglo.
const cuidadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");

// Otra forma mas abreviada.
const paisesDisponibles = ["Colombia", "Peru", "Chile", "Brasil", "Argentina", "Uruguay", "Venezuela"];


const cantidadCiudades = cuidadesDisponibles.length;
console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);

const cantidadPaises = paisesDisponibles.length;
console.log(`En la lista de países tenemos ${cantidadPaises} elementos`);


// Remover el primer elemento
cuidadesDisponibles.shift();
console.log(cuidadesDisponibles);
console.log(`En la lista de países tenemos ${cuidadesDisponibles.length} elementos`);

// Remover el ultimo elemento.
cuidadesDisponibles.pop();
console.log(cuidadesDisponibles);
console.log(`En la lista de países tenemos ${cuidadesDisponibles.length} elementos`);


// Filtrando elementos de la lista.
const paisesFiltrados = paisesDisponibles.filter((e) => e.length > 6);
console.log(paisesFiltrados);


// Convirtiendo una lista en una cadena de texto (unificar los elementos en una cadena).
console.log(paisesDisponibles.join("-"));


// Ordenar la lista.
console.log(paisesDisponibles.sort());


// Conociendo la posición.
console.log(`Peru esta en la posicion: ${paisesDisponibles.indexOf('Peru')}`);


// Unificar dos listas.
const listaPaisesYCiudades = paisesDisponibles.concat(cuidadesDisponibles);
console.log(listaPaisesYCiudades);