function mostrar() {
	var nombre
	var estadoCivil
	var edad
	var sexo
	var temperaturaCorporal
	var ingreso_datos
	var contador_solteros
	var acumulador_edadHombres
	var contador_hombresViudosySolteros
	var contador_mayoresDe60
	var contador_mayoresViudos
	var mayor_temperatura
	var persona_mayorTemperatura
	var promedio_hombres

	contador_solteros = 0
	contador_hombres = 0
	acumulador_edadHombres = 0
	contador_hombresViudosySolteros = 0
	contador_mayoresDe60 = 0
	contador_mayoresViudos = 0
	ingreso_datos = "si"

	while (ingreso_datos == "si") {
		nombre = prompt("Ingrese su nombre")
		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);
		while (edad < 0 || edad > 100) {
			edad = prompt("Ingrese su edad");
			edad = parseInt(edad);

		}

		temperaturaCorporal = prompt("Ingrese su temperaturaCorporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);
		while (temperaturaCorporal < 35 || temperaturaCorporal > 45) {
			temperaturaCorporal = prompt("Ingrese su temperaturaCorporal");
			temperaturaCorporal = parseInt(temperaturaCorporal);

		}

		sexo = prompt("Ingrese su sexo");
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("Ingrese su sexo");

		}


		estadoCivil = prompt("Ingrese su estadoCivil");
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("Ingrese su estadoCivil");

		}

		if (temperaturaCorporal > mayor_temperatura) {
			mayor_temperatura = temperaturaCorporal
			persona_mayorTemperatura = nombre
		}

		if (edad > 17 && estadoCivil == "viudo") {
			contador_mayoresViudos = contador_mayoresViudos + 1
		}

		if (sexo == "m") {
			switch (estadoCivil) {
				case 'soltero':
					contador_solteros = contador_solteros + 1;
					acumulador_edadHombres = acumulador_edadHombres + edad;

				case 'viudo':
					contador_hombresViudosySolteros = contador_hombresViudosySolteros + 1;
					break

			}

		}

		if (edad > 59 && temperaturaCorporal > 38) {
			contador_mayoresDe60 = contador_mayoresDe60 + 1
		}

		ingreso_datos = prompt("Quiere seguir ingresando datos?: ")
	}

	promedio_hombres = acumulador_edadHombres / contador_solteros

	alert("La persona con mayor temperatura es " + persona_mayorTemperatura)
	alert("hay " + contador_mayoresViudos + " de mayores de edad que son viudos")
	alert("hay " + contador_hombresViudosySolteros + " personas que son hombres solteros y viudos")
	alert("hay " + contador_mayoresDe60 + " mayores de 60 años con mas de 38 de temperatura")
	alert("El promedio de edad entre hombres solteros es de " + promedio_hombres)
}