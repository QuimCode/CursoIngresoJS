/*Quimey Alejo Fontan*/
function mostrar() {
	//tomo la hora
	let numHora;
	let mensaje;

	numHora = parseInt(document.getElementById("txtIdHora").value);

	switch (numHora) {
		case 7:
		case 8:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
			mensaje = "Es de mañana.";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN

/* Perdon profes, quise probar el Switch con el IF y el ELSE para ver si podia funcionar de
esa formar; asi que dejo el ejercicio debajo comentado, lo probe y funcionaba :), queria
sacarme la duda jaja. */

// function mostrar() {
// 	//tomo la hora
// 	let numHora;
// 	let mensaje;

// 	numHora = parseInt(document.getElementById("txtIdHora").value);

// 	if (numHora >= 7 && numHora <= 12) {
// 		switch (numHora) {
// 			case 7:
// 			case 8:
// 			case 8:
// 			case 9:
// 			case 10:
// 			case 11:
// 			case 12:
// 				mensaje = "Es de mañana.";
// 				break;
// 		}
// 	}
// 	else {
// 		if (numHora >= 13 && numHora <= 24) {
// 			mensaje = "No es de mañana.";
// 		}
// 		else {
// 			mensaje = "Recuerde que el dia tiene solo 24 Horas.";
// 		}
// 	}
// 	alert(mensaje);