/* -Quimey Alejo Fontan
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
	let claveIngresada;

	claveIngresada = prompt("ingrese el número clave.");

	while (claveIngresada != "utn750") {
		claveIngresada = prompt("Reingrese el número clave de nuevo.");
	}
	alert("Genial, ah ingresado bien la clave.")
}//FIN DE LA FUNCIÓN
