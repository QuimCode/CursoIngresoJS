/*Quimey Alejo Fontan
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	let numImporte;
	let numDescuento;
	let sueldoCuenta = 100;
	let resultado;

	numImporte = document.getElementById("txtIdImporte").value;

	numImporte = parseInt(numImporte);

	numDescuento = (numImporte / sueldoCuenta) * 25;

	resultado = numImporte - numDescuento;

	document.getElementById("txtIdResultado").value = resultado;
}
