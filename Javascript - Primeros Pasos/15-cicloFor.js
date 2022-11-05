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

const presupuestoDisponible = 400;
let ciudadSeleccionada = "";

for (let i = 0; i < datos.length; i++) {
    if (datos[i].precio <= presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
    }
}

if (ciudadSeleccionada == "") {
    console.log("No tenemos pasajes disponibles");
} else {
    console.log("Puedes comprar pasaje para: " + ciudadSeleccionada);
}