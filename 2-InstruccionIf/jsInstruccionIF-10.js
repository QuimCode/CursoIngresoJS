/*Quimey Alejo Fontan*/
function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	let notaRandom;
	let maximo = 10;
	let minimo = 1;

	notaRandom = Math.round(Math.random() * (maximo - minimo) + minimo)

	if (notaRandom >= 9) {
		alert("Exelente nota: " + notaRandom)
	} else

		if (notaRandom >= 4) {
			alert("Aprobo: " + notaRandom)
		}

		else {
			alert("Vamos, la proxima se puede: " + notaRandom)
		}
}
//FIN DE LA FUNCIÓN