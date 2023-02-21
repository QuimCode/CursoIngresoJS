/* -Quimey Alejo Fontan*/
function mostrar() {
	//tomo la edad 
	let edadIngresada;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	if (edadIngresada >= 18) {
		mensaje = "Eres Mayor de Edad.";
	}
	else {
		if (edadIngresada <= 17 && edadIngresada >= 13) {
			mensaje = "Eres Adolecente.";
		}
		else {
			mensaje = "Eres un niño.";
		}
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN