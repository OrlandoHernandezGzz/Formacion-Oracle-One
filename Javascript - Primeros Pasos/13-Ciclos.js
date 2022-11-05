const cuidadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");
const precioCiudad = new Array(500, 400, 380, 200);
let presupuestoDisponible = 210;

let i = 0;
// While... 0 o más veces.
// Do ... 1 o más veces.
while (precioCiudad[i] > presupuestoDisponible && i < cuidadesDisponibles.length) {
    i++;
}

if (i == cuidadesDisponibles.length) {
    console.log('No tenemos pasajes disponibles');
} else {
    console.log(`Puedes comprar pasaje para: ${cuidadesDisponibles[i]}`);
}
