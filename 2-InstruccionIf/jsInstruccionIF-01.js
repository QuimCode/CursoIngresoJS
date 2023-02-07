/*Quimey Alejo Fontan*/
function mostrar() {
	//tomo la edad  
	let edadIngresada;
	let mensaje;

	edadIngresada = parseInt(document.getElementById("txtIdEdad").value);

	if (edadIngresada == 15) {
		mensaje = "Mi niña bonita";
		alert(mensaje);
	}
}