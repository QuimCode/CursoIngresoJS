/* -Quimey Alejo Fontan*/
function mostrar() {
	//Genero el número RANDOM entre 1 y 10
	let numeroRandom;
	let maximo = 10;
	let minimo = 1;
	let mensaje;

	numeroRandom = Math.round(Math.random() * (maximo - minimo) + minimo)

	mensaje = "El numero es " + numeroRandom;
	alert(mensaje);

}//FIN DE LA FUNCIÓN