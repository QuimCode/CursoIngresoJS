/* -Quimey Alejo Fontan*/
function mostrar() {
	let destinoViaje
	let mensaje

	destinoViaje = document.getElementById("txtIdDestino").value;

	switch (destinoViaje) {
		case "Bariloche":
		case "Ushuaia":
			mensaje = "FRIO";
			break;
		case "Mar del plata":
		case "Cataratas":
			mensaje = "CALOR";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN