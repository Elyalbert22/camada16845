let corteDeCarne = prompt("¿Que corte de carne desea?: \nNalga \nPicada \nLomo \n\nCombinalos como quieras.");
let gramos = parseInt(prompt("Ingrese el peso deseado en Gramos."));
let precioNalga = 650;
let precioPicada = 760;
let precioLomo = 460;

// do {
    switch (corteDeCarne) {
        case "nalga":
            console.log(precioPorKilo(gramos, precioNalga));
            break;
        case "picada":
            console.log(precioPorKilo(gramos, precioPicada));
            break;
        case "lomo":
            console.log(precioPorKilo(gramos, precioLomo));
            break;
        case "nalga y picada":
            console.log(calcularDosCortes());
            break;
        case "nalga y lomo":
            console.log(calcularDosCortes());
            break;
        case "picada y nalga":
            console.log(calcularDosCortes());
            break;
        case "picada y lomo":
            console.log(calcularDosCortes());
            break;
        case "nalga, picada y lomo":
            console.log(calcularTresCortes());
            break;
        default:
            alert("Ingrese nuevamente.");
            break;
    }
// } while (corteDeCarne == "");



function precioPorKilo(gramos, precio){
    let precioCorte = (gramos * precio) / 1000;
    return Math.round(precioCorte);
}

function calcularDosCortes() {
    let gramos1 = parseInt(prompt("Ingrese el peso deseado en Gramos del 1° Corte."));
    let precio1 = parseInt(prompt("Ingrese precio por Kilo del 1° Corte."));
    let gramos2 = parseInt(prompt("Ingrese el peso deseado en Gramos del 2° Corte."));
    let precio2 = parseInt(prompt("Ingrese precio por Kilo del 2° Corte."));
    const precioTotal1 = precioPorKilo(gramos1, precio1) + precioPorKilo(gramos2, precio2);
    return Math.round(precioTotal1);
}

function calcularTresCortes() {
    let gramos1 = parseInt(prompt("Ingrese el peso deseado en Gramos del 1° Corte."));
    let precio1 = parseInt(prompt("Ingrese precio por Kilo del 1° Corte."));
    let gramos2 = parseInt(prompt("Ingrese el peso deseado en Gramos del 2° Corte."));
    let precio2 = parseInt(prompt("Ingrese precio por Kilo del 2° Corte."));
    let gramos3 = parseInt(prompt("Ingrese el peso deseado en Gramos del 3° Corte."));
    let precio3 = parseInt(prompt("Ingrese precio por Kilo del 3° Corte."));
    const precioTotal2 = precioPorKilo(gramos1, precio1) + precioPorKilo(gramos2, precio2) + precioPorKilo(gramos3, precio3);
    return Math.round(precioTotal2);
}