/* -Quimey Alejo Fontan
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

function mostrarAumento() {

	let sueldoBase;
	let sueldoPorcentaje;
	let sueldoDescuento;
	let sueldo;
	let sueldoResultado;

	sueldoPorcentaje = 100;
	sueldoDescuento = 25;

	sueldoBase = document.getElementById("txtIdImporte").value;
	sueldoBase = parseInt(sueldoBase);

	sueldo = (sueldoBase / sueldoPorcentaje) * sueldoDescuento;
	sueldoResultado = sueldoBase - sueldo;

	document.getElementById("txtIdResultado").value = sueldoResultado;
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