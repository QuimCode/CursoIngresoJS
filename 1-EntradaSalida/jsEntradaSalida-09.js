/* -Quimey Alejo Fontan
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
	let sueldoBase;
	let sueldoPorcentaje;
	let sueldoBonificacion;
	let sueldoAumento;
	let sueldoResultado;

	sueldoPorcentaje = 100;
	sueldoBonificacion = 10;

	sueldoBase = document.getElementById("txtIdSueldo").value;
	sueldoBase = parseInt(sueldoBase);

	sueldoAumento = (sueldoBase / sueldoPorcentaje) * sueldoBonificacion;
	sueldoResultado = sueldoBase + sueldoAumento;

	document.getElementById("txtIdResultado").value = sueldoResultado;
}
