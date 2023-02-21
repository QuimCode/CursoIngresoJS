/* -Quimey Alejo Fontan */
function mostrar() {
    let numeroIngresado;
    let contadorDeDivisores;
    let mensaje

    numeroIngresado = parseInt(prompt("Ingrese un número:"));
    contadorDeDivisores = 0

    for (let i = 1; i <= numeroIngresado; i++) {

        if (numeroIngresado % i == 0) {
            contadorDeDivisores++;
            mensaje = "Esta es la cantidad de Divisores: " + contadorDeDivisores;
        }
    }

    document.write(mensaje);
}//FIN DE LA FUNCIÓN