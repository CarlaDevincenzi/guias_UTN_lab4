const productos = ["Producto 1", "Producto 2", "Producto 3"]

let lista = document.getElementById("listaProductos");

productos.forEach( p => {    
    lista.innerHTML += `<li>${p}<button onclick="agregarProducto('${p}')">Agregar a lista de deseados</button></li>`;
})

const listaDeseos = [];

// Función para agregar un producto a la lista de deseos
function agregarProducto(nombreProducto) {
    // Verificar si el producto ya está en la lista de deseos
    if (listaDeseos.includes(nombreProducto)) {
        alert('El producto ya está en la lista de deseos');
    } else {
        listaDeseos.push(nombreProducto);
        renderizarListaDeseos();
    }
}

// Función para quitar un producto de la lista de deseos
function quitarProducto(producto) {
    let index = listaDeseos.indexOf(producto);
    listaDeseos.splice(index, 1);
    renderizarListaDeseos();
}

// Función para renderizar la lista de deseos en el HTML
function renderizarListaDeseos() {
    let listaDeseosElement = document.getElementById('listaDeseos');
    listaDeseosElement.innerHTML = '';

    listaDeseos.forEach( e => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `${e}<button onclick="quitarProducto('${e}')">Quitar</button>`;
        listaDeseosElement.appendChild(listItem);
    });    
}
