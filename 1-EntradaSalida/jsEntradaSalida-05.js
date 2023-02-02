/*Quimey Alejo Fontan
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

function mostrar() {
	let nombreIngresado;
	let edadIngresada;
	let mensaje;

	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;

	mensaje = "Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años."

	alert(mensaje);
}

// /*Quimey Alejo Fontan
// Ejercicio 5.bis:
// se debe mostrar un mensaje :
// "Perez , usted se llama jose y tiene 66 años"
// se debe optener el apellido , de la manera que puedan */

// function mostrar() {

// 	let nombreIngresado;
// 	let apellidoIngresado = "Perez";
// 	let edadIngresada;
// 	let mensaje;

// 	nombreIngresado = document.getElementById("txtIdNombre").value;
// 	edadIngresada = document.getElementById("txtIdEdad").value;

// 	mensaje = apellidoIngresado + ", usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años.";
// 	alert(mensaje);
// }