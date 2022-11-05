console.log(`Trabajando con condiciones`);

const ciudadesDisponibles = ['Bogota', 'Caracas', 'Lima'];
console.log(ciudadesDisponibles);

let edadComprador = 22;

if(edadComprador >= 18) {
    console.log(`El comprador es mayor de edad`);
    console.log(`Ciuidades disponibles para viaje: `);
    console.log(ciudadesDisponibles);
} else {
    console.log(`El comprador no es mayor de edad`);
    console.log(`No es posible ofrecer viajes`);
}

console.log(edadComprador >= 18);
console.log(edadComprador > 18);
console.log(edadComprador <= 18);
console.log(edadComprador < 18);
console.log(edadComprador == 18);