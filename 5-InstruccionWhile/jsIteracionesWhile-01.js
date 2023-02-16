/* Quimey Alejo Fontan
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar() {
	let nombreIngresado;
	let edadIngresada;
	let edadAdulta;
	let edadJoven;
	let nombreAdulto;
	let nombreJoven;
	let respuesta;
	let primeraBandera;
	let mensaje;

	primeraBandera = true;
	respuesta = "si";

	while (respuesta == "si") {

		nombreIngresado = prompt("Ingrese un Nombre");
		edadIngresada = prompt("Ingrese por favor una edad de 0 a 100");

		while (isNaN(edadIngresada) || edadIngresada < 0 || edadIngresada > 100) {
			edadIngresada = parseInt(prompt("Ingrese un numero valido."));
		}
		if (primeraBandera == "true") {
			edadAdulta = edadIngresada;
			edadJoven = edadIngresada;
			nombreAdulto = nombreIngresado;
			nombreJoven = nombreIngresada;
			bandera = false;
		}
		else {
			if (edadJoven < edadIngresada) {
				edadJoven = edadIngresada;
				nombreJoven = nombreIngresado;
			}
			else {
				edadAdulta = edadIngresada;
				nombreAdulto = nombreIngresado;
			}
		}
		respuesta = prompt("Quiere continuar ? Si/No.");
	}
	mensaje = nombreJoven + " es el sujeto joven, y el adulto es " + nombreAdulto;
	document.write(mensaje);
}
// ---------------------------------------------------

//WHILE genera la linea de codigo muchas veces
//do-while //genera automaticamente la primera vez
//for // cantidad de finita de veces

// ---------------------------------------------------

// 	let i;
// 	let mensaje;


// 	i = 0;

// 	while (i < 11) {
// 		mensaje = "El numero es ..." + i;
// 		i = i + 1;
// 		alert(mensaje);
// 	}