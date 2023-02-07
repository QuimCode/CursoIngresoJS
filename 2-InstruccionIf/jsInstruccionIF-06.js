/*Quimey Alejo Fontan*/
function mostrar() {
	//tomo la edad 
	let edadIngresada;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	if (edadIngresada >= 18) {
		alert("Eres Mayor de Edad.");
	}
	else {
		if (edadIngresada <= 17 && edadIngresada >= 13) {
			alert("Eres Adolecente.")
		}
		else {
			alert("Eres un niño.")
		}
	}
}//FIN DE LA FUNCIÓN