/* -Quimey Alejo Fontan*/
function mostrar() {
	//tomo la edad  
	let edadIngresada;
	let mensaje;

	edadIngresada = document.getElementById("txtIdEdad").value;

	// primer if y dentro el otro if por si no se cumplre, luego entre corchetes el alert//

	if (edadIngresada >= 13 && edadIngresada <= 17) {
		mensaje = "Usted es Adolecente";
	}
	else {
		mensaje = "Usted es Pre-Adolencente o Mayor de 18";
	}

}//FIN DE LA FUNCIÓN