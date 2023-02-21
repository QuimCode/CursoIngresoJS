/* -Quimey Alejo Fontan*/
function mostrar() {
	//tomo la edad  
	let edadIngresada;
	let estadoCivil;
	let mensaje;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("txtEstadoCivil").value;

	if (edadIngresada < 18 && estadoCivil != "Soltero") {
		mensaje = "Eres muy pequeño para NO ser soltero."
		alert(mensaje)
	}




}//FIN DE LA FUNCIÓN