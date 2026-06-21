function abrirCarrito(){
    document.getElementById("carrito").style.display = "flex";
}

function cerrarCarrito(){
    document.getElementById("carrito").style.display = "none";
}
let cantidad = 0;
let lista = document.getElementById("lista-carrito");

let carrito = [];

function agregarAlCarrito(nombre, precio){

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    actualizarCarrito();
}

function eliminarProducto(indice){
    carrito.splice(indice, 1);
    actualizarCarrito();
}

function actualizarCarrito(){

    const lista = document.getElementById("lista-carrito");
    const contador = document.getElementById("contador-carrito");

    lista.innerHTML = "";

    let total = 0;

    carrito.forEach((producto, indice) => {

        total += producto.precio;

        lista.innerHTML += `
            <li>
                <strong>${producto.nombre}</strong><br>
                $${producto.precio.toLocaleString()}

                <button onclick="eliminarProducto(${indice})">
                    ❌
                </button>
            </li>
        `;
    });

    if(carrito.length == 0){
        lista.innerHTML = "<li>No hay productos.</li>";
    }

    contador.textContent = carrito.length;

    document.getElementById("total-carrito").textContent =
        "Total: $" + total.toLocaleString();
}