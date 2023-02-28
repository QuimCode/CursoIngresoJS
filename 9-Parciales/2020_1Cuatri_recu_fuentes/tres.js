//  Quimey Alejo Fontan

// Bienvenidos.
// En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
// a) la Nacionalidad de la persona con mas temperatura.
// b) Cuantos mayores de edad( más de 17) estan solteros
// c) La cantidad de Mujeres que hay solteras o viudas.
// d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
// e) El promedio de edad entre las mujeres casadas.

function mostrar() {
	let nombrePersona;
	let estadoCivil;
	let edadPersona;
	let sexoPersona;
	let nacionalidadPersona;
	let temperaturaCorporal;
	let ingresoDeDatos;
	let contadorSolteros;
	let contadorSolteras;
	let acumuladorMujeres;
	let contadorMujeresViudas;
	let mayoresDe60;
	let contMayoresViudos;
	let temperaturaMasAlta;
	let nacionalidadTemperaturaMasAlta;
	let hombresPromedio;

	contadorSolteras = 0;
	contadorSolteros = 0;
	acumuladorMujeres = 0;
	contadorMujeresViudas = 0;
	mayoresDe60 = 0;
	contMayoresViudos = 0;
	ingresoDeDatos = "si";

	//---------------------------------------------------------------------------------------

	while (ingresoDeDatos == "si") {
		nombrePersona = prompt("Ingrese su nombre")
		edadPersona = parseInt(prompt("Ingrese su edad"));
		while (edadPersona < 1 || edadPersona > 100) {
			edadPersona = parseInt(prompt("Ingrese su edad dentro de los valores esperados (0-100"));
		}

		temperaturaCorporal = parseInt(prompt("Ingrese su temperaturaCorporal"));
		while (isNan(temperaturaCorporal) || temperaturaCorporal < 35 || temperaturaCorporal > 45) {
			temperaturaCorporal = parseInt(prompt("Ingrese su temperaturaCorporal"));
		}

		sexoPersona = prompt("Ingrese su sexo");
		while (sexoPersona != "f" && sexoPersona != "m") {
			sexoPersona = prompt("Ingrese su sexo");
		}

		nacionalidadPersona = prompt("Ingrese su nacionalidad");
		while (!isNaN(nacionalidadPersona)) {
			nacionalidadPersona = prompt("Ingrese su nacionalidad");
		}

		estadoCivil = prompt("Ingrese su estadoCivil");
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("Ingrese su estadoCivil");
		}

		if (temperaturaCorporal > temperaturaMasAlta) {
			temperaturaMasAlta = temperaturaCorporal
			nacionalidadTemperaturaMasAlta = nacionalidadPersona
		}

		if (edadPersona > 17 && estadoCivil == "soltero") {
			contadorSolteros = contadorSolteros + 1
		}

		if (sexoPersona == "f") {
			switch (estadoCivil) {
				case 'soltero':
					contadorSolteras = contadorSolteras + 1;
					acumuladorMujeres = acumuladorMujeres + 1;
					break;
				case 'viudo':
					contadorMujeresViudas = contadorMujeresViudas + 1;
					break;
			}
		}

		if (edadPersona > 59 && temperaturaCorporal > 38) {
			mayoresDe60 = mayoresDe60 + 1
		}

		ingresoDeDatos = prompt("Quiere seguir ingresando datos?: ")
	}

	hombresPromedio = acumuladorMujeres / contadorSolteros

	alert("La persona con mayor temperatura es de nacionalidad " + nacionalidadTemperaturaMasAlta)
	alert("hay " + contadorSolteras + " mujeres solteras.")
	alert("hay " + contadorMujeresViudas + " personas que son mujeres viudas.")
	alert("hay " + mayoresDe60 + " mayores de 60 años con mas de 38 de temperatura")
	alert("El promedio de edad entre hombres solteros es de " + hombresPromedio)
}
