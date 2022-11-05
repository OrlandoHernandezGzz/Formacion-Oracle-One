import { valida } from "./validaciones.js";

// Seleccionamos todos los inputs de nuestro html.
const inputs = document.querySelectorAll("input");

// Los iteramos todos para saber cual esta haciendo el evento blur
inputs.forEach( input => {
    input.addEventListener('blur', (input) => {
        // Una vez detectado le mandamos el input target, el input que hizo el blur a la funcion valida de nuestro archivo validaciones
        valida(input.target);
    });
});