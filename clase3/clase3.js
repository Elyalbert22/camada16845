let corteCarne = prompt('Ingresa el corte de carne')

switch (corteCarne) {
    case 'nalga':
        console.log('Elegiste Nalga');
        break;
    case 'picada':
        console.log('Elegiste Picada');
        break;
    case 'lomo':
        console.log('Elegiste Lomo');
        break;
    default:
        console.log('Ingrese nuevamente');
        break;
}

for (let i = 500; i <= 2000; i += 500) {
    console.log(i);
}

let peso = parseInt(prompt("Ingrese peso"));

console.log("Elegiste " + peso + "gr.");
