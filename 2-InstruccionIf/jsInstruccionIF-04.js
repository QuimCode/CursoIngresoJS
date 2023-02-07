function mostrar() {
	//tomo la edad  
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;

	// primer if y dentro el otro if por si no se cumplre, luego entre corchetes el alert//

	if (edadIngresada >= 13 && edadIngresada <= 17) {
		alert("Usted es Adolecente");
	}

}//FIN DE LA FUNCIÓN