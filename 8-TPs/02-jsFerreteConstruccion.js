/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    let largoTerreno;
    let anchoTerreno;
    let sumaLarAnc;
    let hilosAlambre = 3;
    let ladosTerreno = 2;

    largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);


    sumaLarAnc = (largoTerreno + anchoTerreno) * ladosTerreno * hilosAlambre;

}
function Circulo() {
    let radioTerreno;
    let hilosAlambre = 3;


    radioTerreno = parseInt(document.getElementById("txtIdRadio").value);

}
function Materiales() {

}

// Perimetro de un circulo es 2 * Pi (3,14) * R (radio)
// Para sacar el Area necesitada para calcular la cantidad de bolsas, se usa el calculo de Ancho * Largo (ingresado por el usuario),
//  para sacar las bolsas de cal o cemento de multiplican por 2 en base a los metros cudrados dados por el largo * ancho.
