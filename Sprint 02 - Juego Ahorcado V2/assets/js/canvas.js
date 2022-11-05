function dibujarInicioAhorcado(){
    // Estableciendo el ancho de la linea actual del tablero.
    tablero.lineWidth = 8;
    // Establece los estilos de los extremos de una linea (forma redonda en este caso).
    tablero.lineCap = "round";
    // Establece el tipo de esquina creada, cuando dos líneas se encuentran
    tablero.lineJoin = "round";
    // Estilo del color de relleno de la linea.
    tablero.fillStyle = "#f3f5fC"; // F3F5F6
    // Estilo del color de borde de la linea.
    tablero.strokeStyle = "#0A3871";

    tablero.fillRect(0, 0, 600, 600);

    tablero.beginPath();
    tablero.moveTo(100, 400);
    tablero.lineTo(400, 400);
    tablero.closePath();
    tablero.stroke();

    tablero.beginPath();
    tablero.moveTo(180, 400);
    tablero.lineTo(180, 100);
    tablero.closePath();
    tablero.stroke();

    tablero.beginPath();
    tablero.moveTo(300,100);
    tablero.lineTo(180, 100);
    tablero.closePath();
    tablero.stroke();

    tablero.beginPath();
    tablero.moveTo(300, 100);
    tablero.lineTo(300, 130);
    tablero.closePath();
    tablero.stroke();
}

function dibujarLineas(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#e5e5e5";
    tablero.strokeStyle = "#0A3871";

    let ancho = 600 / (palabraSecreta.length);
    let centro = ancho / 2;
    tablero.beginPath();
    for (let i = 0; i < palabraSecreta.length; i++) {
        let trazo = (ancho + (ancho * i)) - centro;
        tablero.moveTo(trazo - 25, 500);
        tablero.lineTo(trazo + 25, 500);
    }
    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index, caracter){
    // Armando el canvas de la letra.
    tablero.font = 'bold 40px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0d99df";

    // Estableciendo la posicion de las letras.
    let ancho = 600 / palabraSecreta.length;
    let centro = ancho / 2;
    tablero.fillText(palabraSecreta[index], (centro-15) + (ancho * index), 490);
    letras.push(caracter);

    for(let i = 0; i < palabraSecreta.length; i++){
        if(letras[i] == palabraSecreta[i]){
            alert("Haz ganadooooo!");
        }
    }
    tablero.closePath();
}

function escribirLetraIncorrecta(caracter, errores){
    // Armando el canvas de la letra.
    tablero.font = 'bold 40px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#df0d0d";

    // Estableciendo la posicion de la letra.
    tablero.fillText(caracter, 20 + (35*(10-errores)), 550);
    tablero.closePath();
}

// function escribirLetraIncorrecta(letra, errorsLeft){
//     tablero.font = 'bold 40px Inter';
//     tablero.lineWidth = 6;
//     tablero.lineCap = "round";
//     tablero.lineJoin = "round";
//     tablero.fillStyle = "#0d99df";

//     tablero.fillText(letra, 535+(40*(10-errorsLeft)), 710, 40);
//     tablero.stroke();
// }