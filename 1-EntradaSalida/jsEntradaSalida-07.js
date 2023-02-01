/*Quimey Alejo Fontan
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
	let num1;
	let num2;
	let resultado;
	let mensaje;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado = num1 + num2;
	mensaje = "El resultado de la suma es " + resultado

	alert(mensaje);
}

function restar() {
	let num1;
	let num2;
	let resultado;
	let mensaje;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado = num1 - num2;
	mensaje = "El resultado de la resta es " + resultado

	alert(mensaje);
}

function multiplicar() {
	let num1;
	let num2;
	let resultado;
	let mensaje;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado = num1 * num2;
	mensaje = "El resultado de la multiplacion es " + resultado

	alert(mensaje);
}

function dividir() {
	let num1;
	let num2;
	let resultado;
	let mensaje;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resultado = num1 / num2;
	mensaje = "El resultado de la division es " + resultado

	alert(mensaje);
}

