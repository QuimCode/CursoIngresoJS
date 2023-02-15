/* Quimey Alejo Fontan
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar() {
	let i;
	let mensaje;


	i = 0;

	while (i < 11) {
		mensaje = "El numero es ..." + i;
		i = i + 1;
		alert(mensaje);
	}
}
//WHILE genera la linea de codigo muchas veces
//do-while //genera automaticamente la primera vez
//for // cantidad de finita de veces

