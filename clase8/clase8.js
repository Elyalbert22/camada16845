let corteDeCarne = prompt("¿Que corte de carne desea?: \nNalga \nPicada \nLomo \n\nCombinalos como quieras.");
let minusculaCarne = corteDeCarne.toLowerCase();
let gramos = parseInt(prompt("Ingrese el peso deseado en Gramos."));

const cortes = [
    {id: 1, nombre: "Bife Angosto", precio: 700},
    {id: 2, nombre: "Colita de Cuadril", precio: 630},
    {id: 3, nombre: "Entraña", precio: 840},
    {id: 4, nombre: "Bife de Vacio", precio: 570}
]

for(i=0; i<cortes.length; i++){
    console.log(cortes.length);
}
console.log(cortes);

switch (corteDeCarne) {
    case "nalga":
        alert(`El precio de ${gramos} gramos es: $${precioPorKilo(gramos, cortes[0].precio)}`);
        break;
    case "picada":
        alert(`El precio de ${gramos} gramos es: $${precioPorKilo(gramos, cortes[1].precio)}`);
        break;
    case "lomo":
        alert(`El precio de ${gramos} gramos es: $${precioPorKilo(gramos, cortes[2].precio)}`);
        break;
    case "nalga y picada":
        alert(`El precio es: $${calcularDosCortes()}`);
        break;
    case "nalga y lomo":
        alert(`El precio es: $${calcularDosCortes()}`);
        break;
    case "picada y nalga":
        alert(`El precio es: $${calcularDosCortes()}`);
        break;
    case "picada y lomo":
        alert(`El precio es: $${calcularDosCortes()}`);
        break;
    case "nalga, picada y lomo":
        alert(`El precio es: $${calcularTresCortes()}`);
        break;
    default:
        alert("Ingrese nuevamente.");
        break;
}


function precioPorKilo(gramos, precio) {
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