function mostrar() {
	let numeroIngreado;
	let contadorDePares;

	let mensajeParesEcontrados;

	let i;

	numeroIngreado = parseInt(prompt("Ingrese un número:"));
	contadorDePares = 0

	for (i = 1; i <= numeroIngreado; i++) {

		if (i % 2 == 0) {
			console.log(i);
			contadorDePares++;
		}
	}
	mensajeParesEcontrados = ("Pares encontrados: " + contadorDePares);
	document.write(mensajeParesEcontrados + "<br>");

}//FIN DE LA FUNCIÓN


// ERROR //
/*Contador de pares en base desde 1 al numero ingresado: ${contadorDeParesDesde1}*/

	// let i;

	// let datoNumerico;
	// let numeroPar;

	// let contadorDeParesDesde1;
	// let contadorDePares;

	// let respuesta;

	// let mensaje

	// contadorDeParesDesde1 = 0;
	// contadorDePares = 0;



	// for (i = 0; i < Infinity; i++) {

	// 	while (respuesta == "si") {
	// 		datoNumerico = parseInt(prompt("Ingrese un valor numerico."));

	// 		while (isNaN(datoNumerico)) {
	// 			datoNumerico = parseInt(prompt("Incorrecto, ingrese un valor numerico."));
	// 		}

	// 		if (datoNumerico % 2 == 0) {
	// 			contadorDePares = contadorDePares + 1;
	// 		}
	// 	}

	// 	respuesta = prompt("Desea Continuar (si/no).")

	// 	if (respuesta == "no") {
	// 		mensaje = "Se contaron ... " + contadorDePares + "pares."
	// 		alert(mensaje);
	// 		break;
	// 	}

	// 	// } else if (datoNumerico % 2 == 0 > 1) {
	// 	// 	numeroPar = datoNumerico;
	// 	// 	contadorDeParesDesde1 = numeroPar;
	// 	// }
	// }