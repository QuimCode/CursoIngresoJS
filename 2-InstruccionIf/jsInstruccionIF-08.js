/* -Quimey Alejo Fontan*/
function mostrar() {
	//tomo la edad  
	let edadIngresada;
	let estadoCivil;
	let mensaje;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edadIngresada => 18 && estadoCivil != "Soltero") {
		mensaje = "Es soltero y no es menor."
		alert(mensaje)
	}


}//FIN DE LA FUNCIÓN