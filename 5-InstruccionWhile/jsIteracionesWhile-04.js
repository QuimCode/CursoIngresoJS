/* Quimey Alejo Fontan
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	let numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado = parseInt(numeroIngresado);

	while (isNaN(numeroIngresado) || numeroIngresado < -1 || numeroIngresado > 10) {
		numeroIngresado = prompt("Error, ingrese un numero entre 0 y 9.");
		numeroIngresado = parseInt(numeroIngresado);
	}
}//FIN DE LA FUNCIÓN