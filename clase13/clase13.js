
const cortes1 = [
    // Carne sin hueso
    {id: 1, nombre: "Bife de Chorizo", precio: 900, img: "./media/bife_chorizo.jpg" },
    {id: 2, nombre: "Colita de Cuadril", precio: 820, img: "./media/colita_cuadril.jpg"},
    {id: 3, nombre: "Entraña", precio: 830, img: "./media/entrana.jpg"},
    {id: 4, nombre: "Bife de Vacio", precio: 820, img: "./media/bife_vacio.jpg"},
]
const cortes2 = [
    // Carne con hueso
    {id: 5, nombre: "Bife Angosto", precio: 640, img: "./media/bife_angosto.jpg"},
    {id: 6, nombre: "Bife Ancho", precio: 620, img: "./media/bife_ancho.jpg"},
    {id: 7, nombre: "Asado", precio: 720, img: "./media/bife_angosto.jpg"},
    {id: 8, nombre: "Bife de Costilla", precio: 570, img: "./media/bife_angosto.jpg"},
    {id: 9, nombre: "Ossobuco", precio: 490, img: "./media/bife_angosto.jpg"},
]
const cortes3 = [
    // Embutidos frescos
    {id: 10, nombre: "Chorizo", precio: 580, img: "./media/bife_angosto.jpg"},
    {id: 11, nombre: "Chorizo Bombon", precio: 520, img: "./media/bife_angosto.jpg"},
    {id: 12, nombre: "Salchicha Parrillera", precio: 600, img: "./media/bife_angosto.jpg"},
    {id: 13, nombre: "Morcilla", precio: 380, img: "./media/bife_angosto.jpg"},
    {id: 14, nombre: "Morcilla Bombon", precio: 300, img: "./media/bife_angosto.jpg"},
]
const cortes4 = [
    // Achuras
    {id: 15, nombre: "Chinchulín", precio: 280, img: "./media/bife_angosto.jpg"},
    {id: 16, nombre: "Molleja de Corazón", precio: 1020, img: "./media/bife_angosto.jpg"},
    {id: 17, nombre: "Riñon", precio: 370, img: "./media/bife_angosto.jpg"},
    {id: 18, nombre: "Lengua", precio: 430, img: "./media/bife_angosto.jpg"},
]


const cortesSinHueso = document.getElementById("cortes-sin-hueso")


// const mostrarProductos = (array) =>{
//     cortesSinHueso.innerHTML= '';
    
    cortes1.forEach((card) => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
        <img src=${card.img} class="card-img-top" alt=${card.nombre}>
        <div class="card-body">
        <h4 class="card-title">${card.nombre}</h4>
        <h5>Precio por kilo: $${card.precio}.-</h5>
        <botton onclick="agregarAlCarrito(${card.id})" class="btn btn-primary">Comprar</botton>
        </div>`
        cortesSinHueso.append(div);
    });
    
// }
// mostrarProductos(div)

const cortesConHueso = document.getElementById("cortes-con-hueso")


// const mostrarProductos = (array) =>{
//     cortesSinHueso.innerHTML= '';
    
    cortes2.forEach((card) => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
        <img src=${card.img} class="card-img-top" alt=${card.nombre}>
        <div class="card-body">
        <h4 class="card-title">${card.nombre}</h4>
        <h5>Precio por kilo: $${card.precio}.-</h5>
        <botton onclick="agregarAlCarrito(${card.id})" class="btn btn-primary">Comprar</botton>
        </div>`
        cortesConHueso.appendChild(div);
    });
    
// }
// mostrarProductos(div)



const carrito = []



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

function precioPorKilo(gramos, precio) {
    let precioCorte = (gramos * precio) / 1000;
    return Math.round(precioCorte);
}
