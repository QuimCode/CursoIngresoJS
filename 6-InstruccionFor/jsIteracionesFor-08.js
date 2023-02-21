function mostrar() {
	let numeroIngreado;
	let primo;

	numeroIngreado = parseInt(prompt("Ingrese un número:"));
	primo = true;


	for (let i = 2; i < numeroIngreado; i++) {
		if (numeroIngreado % i === 0) {
			primo = false;
		}
	}
	if (primo) {
		alert(numeroIngreado + " es primo.")

	}
	else {
		alert(numeroIngreado + " no es primo.")

	}
}//FIN DE LA FUNCIÓN