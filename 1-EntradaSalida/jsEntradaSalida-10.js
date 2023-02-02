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

	numDescuento = numImporte / sueldoCuenta * 25;
	resultado = numImporte - numDescuento;

	document.getElementById("txtIdResultado").value = resultado;
}



/*Quimey Alejo Fontan
Ejercicio 10.bis: Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
pedirle al usuario un % de descuento y mostrar el importe en el cuadro de texto "RESULTADO"

function mostrarAumento() {

	let importeIngresado;
	let importe;
	let porcentajeDesc;
	let descuento;
	let resultado;

	importeIngresado = document.getElementById("txtIdImporte").value;
	importe = parseInt(importeIngresado);

	porcentajeDesc = prompt("Ingrese debajo el porcentaje de descuento que desea saber: ");
	porcentajeDesc = parseInt(porcentajeDesc);

	descuento = importe * porcentajeDesc / 100;
	resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = resultado;
}*/