// Selectores
let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";
let letras = [];
let errores = 8;

function comprobarLetra(key){
    let estado = false;
    // num asci letras A-Z
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
        letras.push(key);
        console.log(key);
        return estado;
    } else {
        estado = true;
        console.log(key);
        return estado;
    }
}

// Palabra Secreta.
function escogerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}

function anadirLetraIncorrecta(){
    errores -= 1;
    console.log(errores);
}

// Desapareciendo el boton de iniciar juego.
function iniciarJuego(){
    document.getElementById("iniciar-juego").style.display = "none";

    escogerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();

    // Evento del teclado.
    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();
        
        if(comprobarLetra(letra) && palabraSecreta.includes(letra)){
            for(let i = 0; i < palabraSecreta.length; i++){
                if(palabraSecreta[i] === letra){
                    escribirLetraCorrecta(i);
                }
            }
        } else {
            anadirLetraIncorrecta(letra);
            escribirLetraIncorrecta(letra, errores);
        }
    }
}