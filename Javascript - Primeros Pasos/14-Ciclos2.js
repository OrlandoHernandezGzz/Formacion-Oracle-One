const cuidadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");
const precioCiudad = new Array(500, 400, 380, 200);
const datos = [
    {
        'ciudad': 'Bogota',
        'precio': 500
    },
    {
        'ciudad': 'Lima',
        'precio': 400
    },
    {
        'ciudad': 'Santiago',
        'precio': 380
    },
    {
        'ciudad': 'MonteVideo',
        'precio': 200
    }
];

let presupuestoDisponible = 600;

let i = 0;
// While... 0 o más veces.
// Do ... 1 o más veces.
// while (i < datos.length && datos[i].precio > presupuestoDisponible) {
//     i++;
// }


// Usando el do-while.
let ciudadSeleccionada = "";
do {
    if (datos[i].precio < presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
        break;
    }
    i++;
} while (i < datos.length && ciudadSeleccionada == "");


if (ciudadSeleccionada == "") {
    console.log('No tenemos pasajes disponibles');
} else {
    console.log(`Puedes comprar pasaje para: ${ciudadSeleccionada}`);
}
