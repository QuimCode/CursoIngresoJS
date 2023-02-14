/*Quimey Alejo Fontan*/
function mostrar() {
	let destinoViaje

	destinoViaje = document.getElementById("txtIdDestino").value;

	switch (destinoViaje) {
		case "Bariloche":
			alert("Oeste");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Ushuaia":
			alert("Sur");
			break;
		case "Mar del plata":
			alert("Este");
			break;
	}

}//FIN DE LA FUNCIÓN