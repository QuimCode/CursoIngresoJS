/* Quimey Alejo Fontan
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;
	let respuesta;

	contador = 0;
	acumulador = 0;
	respuesta = "si";

	while (respuesta == "si") {

		numeroIngresado = parseInt(prompt("Ingrese un número"));

		while (isNaN(numeroIngresado)) {
			numeroIngresado = parseInt(prompt("Error, ingrese un número válido"));
		}

		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
		respuesta = prompt("¿Desea seguir ingresando números? (si/no)")
	}

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN