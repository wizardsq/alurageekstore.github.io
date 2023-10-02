const productContainer = document.getElementById("product-container");
import { GetAllProducts } from './routes/productsRoute.mjs';

// Obtener la tarjeta de producto que se clonará
const productCard = productContainer.querySelector(".card");

// Función para crear y llenar una tarjeta de producto
function crearTarjetaProducto(producto) {
    const nuevaTarjeta = productCard.cloneNode(true);

    nuevaTarjeta.querySelector("img").src = producto.imagen;
    nuevaTarjeta.querySelector("#product-name").textContent = producto.nombre;
    nuevaTarjeta.querySelector("#product-price").textContent = `Precio: ${producto.price}`;
    nuevaTarjeta.querySelector("#product-description").textContent = producto.descripcion;

    nuevaTarjeta.classList.add("product-card"); // Agrega la clase de estilo

    return nuevaTarjeta;
}

// Agregar cada tarjeta de producto al contenedor
GetAllProducts().then(productos => {
    console.log(productos);
    // Eliminar la tarjeta clonada inicial
    productCard.remove();

    // Agregar cada tarjeta de producto al contenedor
    productos.forEach(producto => {
        const tarjetaProducto = crearTarjetaProducto(producto);
        productContainer.appendChild(tarjetaProducto);
    });
}).catch(error => {
    console.error(error);
});
