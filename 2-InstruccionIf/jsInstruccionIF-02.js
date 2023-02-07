/*Quimey Alejo Fontan*/
function mostrar() {
	let edadIngresada;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	if (edadIngresada >= 18) {
		alert("Eres mayor de edad.");
	}
	else {
		alert("Eres menor de edad.");
	}
}