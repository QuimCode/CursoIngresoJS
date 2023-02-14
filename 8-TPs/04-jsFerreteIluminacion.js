/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let cantidadDeLamparas
    let marcaLampara


    let precioUnidad
    let precioCantidad
    let descuento

    let impuesto
    let ingresoBruto
    let precioFinalLamparas

    let mensaje

    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLampara = document.getElementById("Marca").value

    precioUnidad = 35;
    precioCantidad = cantidadDeLamparas * precioUnidad;
    descuento = 0;
    ingresoBruto = 0;
    impuesto = 10;

    switch (marcaLampara) {
        case "ArgentinaLuz":
            switch (cantidadDeLamparas) {
                case 5:
                    descuento = 40;
                    break;
                case 4:
                    descuento = 25;
                    break;
                case 3:
                    descuento = 15;
                    break;
                case 2:
                    descuento = descuento;
                    break;
                case 1:
                    descuento = descuento;
                    break;
                default:
                    descuento = 50;
                    break;
            }break;
        case "FelipeLamparas":
            switch (cantidadDeLamparas) {
                case 5:
                    descuento = 30;
                    break;
                case 4:
                    descuento = 25;
                    break;
                case 3:
                    descuento = 10;
                    break;
                case 2:
                    descuento = descuento;
                    break;
                case 1:
                    descuento = descuento;
                    break;
                default:
                    descuento = 50;
                    break;
            }break;
        default:
            switch (cantidadDeLamparas) {
                case 5:
                    descuento = 30;
                    break;
                case 4:
                    descuento = 20;
                    break;
                case 3:
                    descuento = 5;
                    break;
                case 2:
                    descuento = descuento;
                    break;
                case 1:
                    descuento = descuento;
                    break;
                default:
                    descuento = 50;
                    break;
            }
    }

    precioFinalLamparas = precioCantidad - (precioCantidad * descuento) / 100;

    if (precioFinalLamparas > 120) {
        ingresoBruto = (precioFinalLamparas * impuesto) / 100;
        precioFinalLamparas = precioFinalLamparas + ingresoBruto;
        mensaje = "Ah pagado " + ingresoBruto + " de impuestos."
        alert(mensaje);
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinalLamparas.toFixed(2);

}

//TP4 con uso de if

 	// let cantidadDelamparas;
    // let marcaLampara;
    // let precioUnidad;
    // let precioCantidad;
    // let descuento;
    // let precioFinalLamparas;
    // let ingresoBruto;
    // let impuesto;

    // CantidadDelamparas=parseInt(document.getElementById("txtIdCantidad").value);
    // marcaLampara=document.getElementById("Marca").value;
    // precioUnidad=35;
    // precioCantidad= cantidadDelamparas*precioUnidad;
    // descuento=0;
    // ingresoBruto=0;
    // impuesto=10;


    // if(cantidadDelamparas>5){
    //     descuento=50;
    // }
    // else if(cantidadDelamparas==5)
    // {
    //     if(marca=="ArgentinaLuz"){
    //        descuento=40;
    //     }
    //     else{
    //         descuento=30;
    //     }
    // }
    // else if(cantidadDelamparas==4)
    // {
    //     if(marcaLampara=="ArgentinaLuz" || marca=="FelipeLamparas"){
    //         descuento=25;
    //     }
    //     else{
    //         descuento=20;
    //     }

    // }
    // else if(cantidadDelamparas==3){
    //     if(marca=="ArgentinaLuz"){
    //         descuento=15;
    //     }
    //     else if(marcaLampara=="FelipeLuz"){
    //         descuento=10;
    //     }
    //     else{
    //         descuento=5;
    //     }
    // }
    // else {
    //     descuento=0;
    // }

    // precioFinalLamparas=precioCantidad-(precioCantidad*descuento)/100;
    // if(precioFinalLamparas>120)
    // {
    //   ingresoBruto=(precioFinalLamparas*impuesto)/100;
    //   precioFinalLamparas=precioFinalLamparas+ingresoBruto;
    //   alert("Ah pagado "+ ingresoBruto +" de impuesto");
    // }

    // document.getElementById("txtIdprecioDescuento").value=precioFinalLamparas.toFixed(2);

    //TP4 con uso de  SWITCH (las marcas), IF(cantidad)

 	// let cantidadDeLamparas;
    // let marcaLampara;
    // let precioUnidad;
    // let precioCantidad;
    // let descuento;
    // let precioFinalLamparas;
    // let ingresoBruto;
    // let impuesto;

    // cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    // marcaLampara = document.getElementById("Marca").value;
    // precio=35;
    // precioCantidad=cantidadDeLamparas*precioUnidad;
    // descuento=0;
    // ingresoCantidad=0;
    // impuesto=10;

    // if(cantidadDeLamparas>5){
    //     descuento=50;
    // }
    // else if(cantidadDeLamparas==5){
    //     switch (marcaLampara) {
    //         case "ArgentinaLuz":
    //             descuento=40;
    //             break;
    //         default:
    //             descuento=30;
    //             break;
    //     }
    // }
    // else if(cantidadDeLamparas==4){
    //     switch (marcaLampara) {
    //         case "ArgentinaLuz":
    //             descuento=25;
    //             break;
    //         case "FelipeLamparas":
    //             descuento=25;
    //             break;
    //         default:
    //             descuento=20;
    //             break;
    //     }
    // }
    // else if(cantidadDeLamparas==3){
    //     switch marcaLampara) {
    //         case "ArgentinaLuz":
    //             descuento=15;
    //             break;
    //         case "FelipeLamparas":
    //             descuento=10;
    //             break;
    //         default:
    //             descuento=5;
    //             break;
    //     }
    // }
    // precioFinalLamparas=precioCantidad-(precioCantidad*descuento)/100;
    // if(precioFinalLamparas>120)
    // {
    //   ingresoBruto=(precioFinalLamparas*impuesto)/100;
    //   precioFinalLamparas=precioFinalLamparas+ingresoBruto;
    //   alert("Ah pagado "+ingresoBruto+" de impuesto");
    // }

    // document.getElementById("txtIdprecioDescuento").value=precioFinalLamparas.toFixed(2);

    //TP4 con uso de switch(cantidad) y if (marca) TODO Switch

    // let cantidadDeLamparas;
    // let marcaLampara;
    // let precioUnidad;
    // let precioCantidad;
    // let descuento;
    // let precioFinalLamparas;
    // let ingresoBruto;
    // let impuestoIIBB;

    // lamparas=parseInt(document.getElementById("txtIdCantidad").value);
    // marcaLampara=document.getElementById("Marca").value;
    // precioUnidad=35;
    // precioCantidad=cantidadDeLamparas*precioUnidad;
    // descuento=0;
    // ingresoBruto=0;
    // impuesto=10;    
    
    // if(marcaLampara=="ArgentinaLuz"){
    //     switch (cantidadDeLamparas) {
    //         case 5:
    //             descuento=40;
    //             break;
    //         case 4:
    //             descuento=25;
    //             break;
    //         case 3:
    //             descuento=15;
    //             break;
    //         case 2:
    //             descuento=descuento;
    //             break;
    //         case 1:
    //             descuento=descuento;
    //             break;
    //         default:
    //             descuento=50;
    //     }
    // }else if(marcaLampara=="FelipeLamparas") {
    //     switch (cantidadDeLamparas) {
    //         case 5:
    //             descuento=30;
    //             break;
    //         case 4:
    //             descuento=25;
    //             break;
    //         case 3:
    //             descuento=10;
    //             break;
    //         case 2:
    //             descuento=descuento;
    //             break;
    //         case 1:
    //             descuento=descuento;
    //             break;
    //         default:
    //             descuento=50;
    //     }
    // }else if(marcaLampara!="ArgentinaLuz" && marcaLampara!="FelipeLamparas"){
    //     switch (cantidadDeLamparas) {
    //         case 5:
    //             descuento=30;
    //             break;
    //         case 4:
    //             descuento=20;
    //             break;
    //         case 3:
    //             descuento=5;
    //             break;
    //         case 2:
    //             descuento=descuento;
    //             break;
    //         case 1:
    //             descuento=descuento;
    //             break;
    //         default:
    //             descuento=50;
    //     }
    // }   
    
    // precioFinalLamparas=precioCantidad-(precioCantidad*descuento)/100;
    // if(precioFinalLamparas>120)
    // {
    //   ingresoBruto=(precioFinalLamparas*impuesto)/100;
    //   precioFinalLamparas=precioFinalLamparas+ingresoBruto;
    //   alert("Ah pagado "+ ingresoBruto +" de impuesto");
    // }

    // document.getElementById("txtIdprecioDescuento").value=precioFinalLamparas.toFixed(2);
