/* -Quimey Alejo Fontan*/
function mostrar() {
	let edadIngresada;
	let mensaje;

	edadIngresada = document.getElementById("txtIdEdad").value;

	if (edadIngresada >= 18) {
		mensaje = "Usted es mayor de edad ";
	}
	else {
		mensaje = "Usted es menor de edad ";
	}

	alert(mensaje);
}
//FIN DE LA FUNCIÓN