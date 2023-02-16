/* Quimey Alejo Fontan
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let numeroIngresado
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 3;
	respuesta = 'si';

	while (respuesta == "si") {
		numeroIngresado = parseInt(prompt("Ingrese su numero."));
		while (isNaN(numeroIngresado)) {
			numeroIngresado = parseInt(prompt("Error, ingrese un número valido"));
		}

		if (numeroIngresado > 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else if (numeroIngresado < 0) {
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		respuesta = prompt("Quiere ingresar otro numero? Si/No.");
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN