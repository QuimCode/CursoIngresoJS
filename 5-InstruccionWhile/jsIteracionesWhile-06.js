// -Quimey Alejo Fontan
function mostrar() {
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;
	let i;

	contador = 5;
	acumulador = 0;

	for (i = 0; i < contador; i++) {
		numeroIngresado = parseInt(prompt("Ingrese los " + contador + " números."));

		while (isNaN(numeroIngresado)) {
			numeroIngresado = parseInt(prompt("Error, ingrese un número, no letras."));
		}
		acumulador = acumulador + numeroIngresado;
	}

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}
//FIN DE LA FUNCIÓN