console.log("Asignando valores a las variables");

let miNombre = "Leonardo";
let miApellido = "Lacruz"
console.log(miNombre);

const miNombreCompleto = miNombre + miApellido;
console.log(miNombreCompleto);

// Plantilla de texto (interpolación de variables.).
const textoMiNombre = `Mi nombre es: ${miNombre} ${miApellido}`;
console.log(textoMiNombre);


// Inmutabilidad de datos.
let variableTexto = "un texto";
console.log(variableTexto);

variableTexto = 10;
console.log(variableTexto);

variableTexto = 10.5;
console.log(variableTexto);

variableTexto = false;
console.log(variableTexto);