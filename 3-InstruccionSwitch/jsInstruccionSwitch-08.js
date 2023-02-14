/*Quimey Alejo Fontan*/
function mostrar() {
	let destinoViaje

	destinoViaje = document.getElementById("txtIdDestino").value;

	switch (destinoViaje) {
		case "Bariloche":
		case "Ushuaia":
			alert("FRIO");
			break;
		case "Mar del plata":
		case "Cataratas":
			alert("CALOR");
			break;
	}

}//FIN DE LA FUNCIÓN