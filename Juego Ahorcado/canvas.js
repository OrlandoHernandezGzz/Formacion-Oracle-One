function dibujarCanvas(){
    // Largo de nuestras lineas
    tablero.lineWidth = 8;
    // Estilo de la línea
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#8A3871";

    tablero.fillRect(0,0, 1200, 860);
    tablero.beginPath();
    tablero.moveTo(650, 500);
    tablero.lineTo(900, 500);
    tablero.stroke();
    tablero.closePath();
}

function dibujarLinea(){
    // Largo de nuestras lineas
    tablero.lineWidth = 6;
    // Estilo de la línea
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#8A3871";

    let = anchura = 600/palabraSecreta.length;

    for(let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(500 + (anchura*i), 640);
        tablero.lineTo(550 + (anchura*i), 640);
    }

    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index){
    tablero.font = 'bold 52px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0d99df";

    let anchura = 600 / palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 505 + (anchura*index), 620);
    tablero.stroke();
}

function escribirLetraIncorrecta(letra, errorsLeft){
    tablero.font = 'bold 40px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0d99df";

    tablero.fillText(letra, 535+(40*(10-errorsLeft)), 710, 40);
    // tablero.stroke();
}