let corteDeCarne = prompt("¿Que corte de carne desea?: \nNalga \nPicada \nLomo \n\nCombinalos como quieras.");

// do {
    switch (corteDeCarne) {
        case "nalga":
            console.log(calcularPrecio());
            break;
        case "picada":
            console.log(calcularPrecio());
            break;
        case "lomo":
            console.log(calcularPrecio());
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


function calcularPrecio() {
    let gramos = parseInt(prompt("Ingrese el peso deseado en Gramos."));
    let costo = parseInt(prompt("Ingrese precio por Kilo del Corte."));
    let precioCorte = (gramos * costo) / 1000;
    return Math.round(precioCorte);
}

function calcularDosCortes() {
    let gramos1 = parseInt(prompt("Ingrese el peso deseado en Gramos del 1° Corte."));
    let precio1 = parseInt(prompt("Ingrese precio por Kilo del 1° Corte."));
    let gramos2 = parseInt(prompt("Ingrese el peso deseado en Gramos del 2° Corte."));
    let precio2 = parseInt(prompt("Ingrese precio por Kilo del 2° Corte."));
    const precioCorte1 = (gramos1 * precio1) / 1000;
    const precioCorte2 = (gramos2 * precio2) / 1000;
    const precioTotal1 = precioCorte1 + precioCorte2;
    return Math.round(precioTotal1);
}

function calcularTresCortes() {
    let gramos1 = parseInt(prompt("Ingrese el peso deseado en Gramos del 1° Corte."));
    let precio1 = parseInt(prompt("Ingrese precio por Kilo del 1° Corte."));
    let gramos2 = parseInt(prompt("Ingrese el peso deseado en Gramos del 2° Corte."));
    let precio2 = parseInt(prompt("Ingrese precio por Kilo del 2° Corte."));
    let gramos3 = parseInt(prompt("Ingrese el peso deseado en Gramos del 3° Corte."));
    let precio3 = parseInt(prompt("Ingrese precio por Kilo del 3° Corte."));
    const precioCorte1 = (gramos1 * precio1) / 1000;
    const precioCorte2 = (gramos2 * precio2) / 1000;
    const precioCorte3 = (gramos3 * precio3) / 1000;
    const precioTotal2 = precioCorte1 + precioCorte2 + precioCorte3;
    return Math.round(precioTotal2);
}