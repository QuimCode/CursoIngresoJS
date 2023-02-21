function mostrar() {
	let i;

	let datoNumerico;
	let numeroPar;

	let contadorDeParesDesde1;
	let contadorDePares;

	let respuesta;

	let mensaje

	contadorDeParesDesde1 = 0;
	contadorDePares = 0;

	respuesta = "si";

	for (i = 0; i < Infinity; i++) {
		datoNumerico = parseInt(prompt("Ingrese un valor numerico."));

		while (isNaN(datoNumerico)) {
			datoNumerico = parseInt(prompt("Incorrecto, ingrese un valor numerico."));
		}
		if (datoNumerico % 2 == 0) {
			contadorDePares = contadorDePares + 1;

		} else if (datoNumerico % 2 == 0 > 1) {
			numeroPar = datoNumerico;
			contadorDeParesDesde1 = numeroPar;
		}

		respuesta = prompt("Desea contirnuar ? (si/no).");

		if (respuesta == "si") {
		}
		else {
			mensaje = `
		Contador de pares en base desde 1 al numero ingresado: ${contadorDeParesDesde1}
		Contador de pares en general: ${contadorDePares}
		`
			alert(mensaje);
		}
	}
}//FIN DE LA FUNCIÓN