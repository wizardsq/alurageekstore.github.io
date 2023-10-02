const productContainer = document.getElementById("product-container");
async function loadJSON() {
    try {
        const response = await fetch('./db/products.json'); // Ajusta la ruta según tu estructura de carpetas
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
        throw error; // Puedes manejar el error según tus necesidades
    }
}
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

loadJSON()
    .then(data => {
        const productos = data.productos; 
        productCard.remove();// Accede a la matriz de productos dentro del objeto
        productos.forEach(producto => {
            const tarjetaProducto = crearTarjetaProducto(producto);
            productContainer.appendChild(tarjetaProducto);
        });
    })
    .catch(error => {
        console.error('Ocurrió un error al cargar el archivo JSON:', error);
    });
