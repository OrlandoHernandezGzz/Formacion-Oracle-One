// Variables.
var palabras = ["Alura", "One", "Html", "Css", "Javascript", "Frontend", "Backend"];
var palabraSecreta = "";
var tablero = document.getElementById("myCanvas").getContext("2d");
var btnAgregarNuevaPalabra = document.getElementById("btnAgregarNuevaPalabra");
var btnIniciarJuego = document.getElementById("btnIniciarJuego");
var sectionIniciar = document.querySelector(".iniciar");
var sectionAhorcado = document.querySelector(".ahorcado");
var sectionPalabra = document.querySelector(".palabra");
var letras = [];
var errores = 6;

function iniciarJuego(){
    sectionIniciar.style.display = "none";
    sectionAhorcado.classList.remove("ocultar");

    // Iniciando el juego.
    escogerPalabraSecreta();
    dibujarInicioAhorcado();
    dibujarLineas();

    document.addEventListener("keydown", (e) => {
        let caracter = e.key.toUpperCase();
        console.log(caracter);

        if(comprobarLetra(caracter) && palabraSecreta.includes(caracter)){
            for(let i = 0; i < palabraSecreta.length; i++){
                if(palabraSecreta[i] == caracter){
                    escribirLetraCorrecta(i, caracter);
                }
            }
        } else {
            anadirLetraIncorrecta(caracter);
            escribirLetraIncorrecta(caracter, errores);
        }

    });
}

function agregarNuevaPalabra(){
    sectionIniciar.style.display = "none";
    sectionPalabra.classList.remove("ocultar");
}

function escogerPalabraSecreta(){
    let numPalabraAleatoria = Math.floor(Math.random() * palabras.length);
    palabraSecreta = palabras[numPalabraAleatoria].toUpperCase();
    console.log(palabraSecreta);
}

function comprobarLetra(key){
    let estado = false;
    // num asci letras A-Z
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
        letras.push(key);
        console.log("Agregando la letra" + key);
        return estado;
    } else {
        estado = true;
        console.log(key);
        return estado;
    }
}

/**
 * Name: anadirLetraIncorrecta.
 * Description:
 */
function anadirLetraIncorrecta(){
    errores -= 1;
    console.log(errores);
}

// function


// Eventos.
btnIniciarJuego.addEventListener("click", iniciarJuego);
btnAgregarNuevaPalabra.addEventListener("click", agregarNuevaPalabra);