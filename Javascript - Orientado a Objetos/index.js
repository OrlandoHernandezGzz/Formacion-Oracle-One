// Importación de clases.

import { Cliente } from "./Cliente.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Director } from "./Empleados/Director.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

// const cliente2 = new Cliente("Orlando", "12343241", "645653432342");

const empleado = new Empleado("Juan Perez", "1234612", 10000);
empleado.asignarClave("12345");
console.log(SistemaAutenticacion.login(empleado, "12345"));

const gerente = new Gerente("Pedro Rivas", "231235121", 12000);
gerente.asignarClave("6566");
console.log(SistemaAutenticacion.login(gerente, "6545"));


// const director = new Director("Elena Moreno", "41253131", 15000);

const cliente = new Cliente("Leonardo", "1994121", "5324311231");
cliente.asignarClave("0111");
console.log(SistemaAutenticacion.login(cliente, "1111"));

// console.log(empleado.verBonificacion());
// console.log(gerente.verBonificacion());
// console.log(director.verBonificacion());