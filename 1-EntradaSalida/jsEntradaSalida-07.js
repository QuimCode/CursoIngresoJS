/*Quimey Alejo Fontan
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
	let numUno;
	let numDos;
	let numResUno;
	let numResDos;
	let resultado;
	let mensaje;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;
	numResUno = parseInt(numUno);
	numResDos = parseInt(numDos);

	resultado = numResUno + numResDos;
	mensaje = "El resultado de la suma es " + resultado

	alert(mensaje);
}

function restar() {
	let numUno;
	let numDos;
	let numResUno;
	let numResDos;
	let resultado;
	let mensaje;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;
	numResUno = parseInt(numUno);
	numResDos = parseInt(numDos);

	resultado = num1 - num2;
	mensaje = "El resultado de la resta es " + resultado

	alert(mensaje);
}

function multiplicar() {
	let numUno;
	let numDos;
	let numResUno;
	let numResDos;
	let resultado;
	let mensaje;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;
	numResUno = parseInt(numUno);
	numResDos = parseInt(numDos);

	resultado = num1 * num2;
	mensaje = "El resultado de la multiplacion es " + resultado

	alert(mensaje);
}

function dividir() {
	let numUno;
	let numDos;
	let numResUno;
	let numResDos;
	let resultado;
	let mensaje;

	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;
	numResUno = parseInt(numUno);
	numResDos = parseInt(numDos);

	resultado = num1 / num2;
	mensaje = "El resultado de la division es " + resultado

	alert(mensaje);
}

