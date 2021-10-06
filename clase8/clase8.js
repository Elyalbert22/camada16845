
const cortes = [
    // Carne sin hueso
    {id: 1, nombre: "Bife de Chorizo", precio: 900, img: "./media/bife_chorizo.jpg" },
    {id: 2, nombre: "Colita de Cuadril", precio: 820, img: "./media/colita_cuadril.jpg"},
    {id: 3, nombre: "Entraña", precio: 830, img: "./media/entrana.jpg"},
    {id: 4, nombre: "Bife de Vacio", precio: 820, img: "./media/bife_vacio.jpg"},
    // Carne con hueso
    {id: 5, nombre: "Bife Angosto", precio: 640, img: "./media/bife_angosto.jpg"},
    {id: 6, nombre: "Bife Ancho", precio: 620, img: "./media/bife_ancho.jpg"},
    {id: 7, nombre: "Asado", precio: 720, img: "./media/bife_angosto.jpg"},
    {id: 8, nombre: "Bife de Costilla", precio: 570, img: "./media/bife_angosto.jpg"},
    {id: 9, nombre: "Ossobuco", precio: 490, img: "./media/bife_angosto.jpg"},
    // Embutidos frescos
    {id: 10, nombre: "Chorizo", precio: 580, img: "./media/bife_angosto.jpg"},
    {id: 11, nombre: "Chorizo Bombon", precio: 520, img: "./media/bife_angosto.jpg"},
    {id: 12, nombre: "Salchicha Parrillera", precio: 600, img: "./media/bife_angosto.jpg"},
    {id: 13, nombre: "Morcilla", precio: 380, img: "./media/bife_angosto.jpg"},
    {id: 14, nombre: "Morcilla Bombon", precio: 300, img: "./media/bife_angosto.jpg"},
    // Achuras
    {id: 15, nombre: "Chinchulín", precio: 280, img: "./media/bife_angosto.jpg"},
    {id: 16, nombre: "Molleja de Corazón", precio: 1020, img: "./media/bife_angosto.jpg"},
    {id: 17, nombre: "Riñon", precio: 370, img: "./media/bife_angosto.jpg"},
    {id: 18, nombre: "Lengua", precio: 430, img: "./media/bife_angosto.jpg"},
]


const cortesSinHueso = document.getElementById("cortes-sin-hueso")

const carrito = []

const mostrarProductos = (array) =>{
    cortesSinHueso.innerHTML= '';

    array.forEach((card) => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
                    <img src=${card.img} class="card-img-top" alt="bife angosto">
                    <div class="card-body">
                        <h4 class="card-title">${card.nombre}</h4>
                        <h5>Precio por kilo: $${card.precio}.-</h5>
                        <botton onclick="agregarAlCarrito(${card.id})" class="btn btn-primary">Comprar</botton>
                    </div>`
        cortesSinHueso.appendChild(div);
    });

}
mostrarProductos(cortes)





const agregarAlCarrito = function carri(itemId) {
    let itemEnCarrito = cortes.find( el => el.id === itemId);
    
    if(itemEnCarrito){
        itemEnCarrito.cantidad +=1; 
    } else{
        const producto = cortes.find( (el) => el.id == itemId);
        carrito.push(cortes.id)
    }
    localStorage.setItem("carrito",JSON.stringify(carrito))
    
    const producto = cortes.find( (prod) => prod.id === itemId);
    
    console.log(producto);
}

// let produc = document.getElementById("agregarCarrito");
// produc.addEventListener("click", agregarAlCarrito);







// switch (corteDeCarne) {
//     case "nalga":
//         alert(`El precio de ${gramos} gramos es: $${precioPorKilo(gramos, cortes[0].precio)}`);
//         break;
//     case "picada":
//         alert(`El precio de ${gramos} gramos es: $${precioPorKilo(gramos, cortes[1].precio)}`);
//         break;
//     case "lomo":
//         alert(`El precio de ${gramos} gramos es: $${precioPorKilo(gramos, cortes[2].precio)}`);
//         break;
//     case "nalga y picada":
//         alert(`El precio es: $${calcularDosCortes()}`);
//         break;
//     case "nalga y lomo":
//         alert(`El precio es: $${calcularDosCortes()}`);
//         break;
//     case "picada y nalga":
//         alert(`El precio es: $${calcularDosCortes()}`);
//         break;
//     case "picada y lomo":
//         alert(`El precio es: $${calcularDosCortes()}`);
//         break;
//     case "nalga, picada y lomo":
//         alert(`El precio es: $${calcularTresCortes()}`);
//         break;
//     default:
//         alert("Ingrese nuevamente.");
//         break;
// }


function precioPorKilo(gramos, precio) {
    let precioCorte = (gramos * precio) / 1000;
    return Math.round(precioCorte);
}

// function calcularDosCortes() {
//     let gramos1 = parseInt(prompt("Ingrese el peso deseado en Gramos del 1° Corte."));
//     let precio1 = parseInt(prompt("Ingrese precio por Kilo del 1° Corte."));
//     let gramos2 = parseInt(prompt("Ingrese el peso deseado en Gramos del 2° Corte."));
//     let precio2 = parseInt(prompt("Ingrese precio por Kilo del 2° Corte."));
//     const precioTotal1 = precioPorKilo(gramos1, precio1) + precioPorKilo(gramos2, precio2);
//     return Math.round(precioTotal1);
// }

// function calcularTresCortes() {
//     let gramos1 = parseInt(prompt("Ingrese el peso deseado en Gramos del 1° Corte."));
//     let precio1 = parseInt(prompt("Ingrese precio por Kilo del 1° Corte."));
//     let gramos2 = parseInt(prompt("Ingrese el peso deseado en Gramos del 2° Corte."));
//     let precio2 = parseInt(prompt("Ingrese precio por Kilo del 2° Corte."));
//     let gramos3 = parseInt(prompt("Ingrese el peso deseado en Gramos del 3° Corte."));
//     let precio3 = parseInt(prompt("Ingrese precio por Kilo del 3° Corte."));
//     const precioTotal2 = precioPorKilo(gramos1, precio1) + precioPorKilo(gramos2, precio2) + precioPorKilo(gramos3, precio3);
//     return Math.round(precioTotal2);
// }