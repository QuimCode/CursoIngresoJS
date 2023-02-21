/* -Quimey Alejo Fontan
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables
	let numeroIngresado
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	respuesta = "si";
	numeroMaximo = 0;
	numeroMinimo = 0;

	//iniciar variables

	while (respuesta == "si") {
		numeroIngresado = parseInt(prompt("Ingrese su numero."));

		if (numeroMaximo < numeroIngresado) {
			numeroMaximo = numeroIngresado;
		}
		else if (numeroMinimo > numeroIngresado) {
			numeroMinimo = numeroIngresado;
		}

		respuesta = prompt("Desea continuar ? Si/No");

	}

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;

}//FIN DE LA FUNCIÓN