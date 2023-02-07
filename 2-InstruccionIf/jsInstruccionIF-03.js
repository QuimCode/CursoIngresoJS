/*Quimey Alejo Fontan*/
function mostrar() {
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;

	if (edadIngresada >= 18) {
		alert("Usted es mayor de edad ")
	}
	else (edadIngresada < 18)
	{
		alert("Usted es menor de edad ")
	}
}
//FIN DE LA FUNCIÓN