function mostrar() {

	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;

	if (edadIngresada < 13 || edadIngresada > 17) {
		alert("Ustedes no es adolescente ")
	}
	else {
		alert("Ustedes es adolescente ")
	}

}//FIN DE LA FUNCIÓN