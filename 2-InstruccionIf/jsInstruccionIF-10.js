/* -Quimey Alejo Fontan*/
function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	let notaRandom;
	let maximo = 10;
	let minimo = 1;
	let mensaje;

	notaRandom = Math.round(Math.random() * (maximo - minimo) + minimo)

	if (notaRandom >= 9) {
		mensaje = "Exelente nota: " + notaRandom
	}
	else {
		if (notaRandom >= 4) {
			mensaje = "Aprobo: " + notaRandom
		}

		else {
			mensaje = "Vamos, la proxima se puede: " + notaRandom
		}
	}
	alert(mensaje);
}
//FIN DE LA FUNCIÓN