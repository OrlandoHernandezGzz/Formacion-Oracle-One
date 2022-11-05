// const inputNacimiento = document.getElementById("birth");

// // blur es disparado cuando un elemento ha perdido su foco
// inputNacimiento.addEventListener("blur", (evento) => {
//     validarNacimiento(evento.target);
// });

// Llega el input a nuestra funcion validacion
export function valida(input){
    // dataset es la coleccion de los data.
    const tipoDeInput = input.dataset.tipo;

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    // console.log(input.parentElement);
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");

        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid");

        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
];


const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío"
    },
    
    email: {
        valueMissing: "El campo email no puede estar vacío",
        typeMismatch: "El correo no es valido"
    },

    password: {
        valueMissing: "El campo contraseña no puede estar vacío",
        patternMismatch: "Al menos 6 caracteres, maximo 12, debe contener una letra minuscula, una letra mayuscula, un numero y no debe contener caracteres especiales."
    },

    nacimiento: {
        valueMissing: "Este campo no puede estar vacío",
        customError: "Debes tener al menos 18 años de edad"
    },

    telefono: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El formato requerido es XXXXXXXXXX 10 números"
    },

    direccion: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "La dirección debe contener entre 10 a 40 caracteres"
    },

    ciudad: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres"
    },

    estado: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El estado debe contener entre 10 a 40 caracteres"
    }
};

const validadores = {
    nacimiento: (input) => validarNacimiento(input),
};


function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if (input.validity[error]) {
            console.log(error)
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}




function validarNacimiento(input){
    const fechaUsuario = new Date(input.value);
    let mensaje = "";
    
    if(!mayorDeEdad(fechaUsuario)){
        mensaje = "Debes tener al menos 18 años de edad";
    }

    // Define el mensaje de validacion personalizado para el elemento
    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciasFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());
    //console.log(diferenciasFechas);
    //console.log(diferenciasFechas < fechaActual);

    return diferenciasFechas < fechaActual;
}