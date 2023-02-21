/* -Quimey Alejo Fontan*/
function mostrar() {

	let edadIngresada;
	let mensaje;

	edadIngresada = document.getElementById("txtIdEdad").value;

	if (edadIngresada < 13 || edadIngresada > 17) {
		mensaje = "Ustedes no es adolescente ";
	}
	else {
		mensaje = "Ustedes es adolescente ";
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN