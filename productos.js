const productos = [
    { id: 1, nombre: "Lámina de Zinc Aluzinc", categoria: "techos", imagen: "img/zinc.jpg", descripcion: "Lámina resistente a la corrosión.", whatsapp: "50432901909" },
    { id: 2, nombre: "Taladro DeWalt 20V", categoria: "maquinas", imagen: "img/taladro.jpg", descripcion: "Potencia profesional para tus proyectos.", whatsapp: "50432901909" },
    { id: 3, nombre: "Martillo de Uña Truper", categoria: "herramientas", imagen: "img/martillo.jpg", descripcion: "Acero forjado de alta calidad.", whatsapp: "50432901909" },
    { id: 4, nombre: "Bolsa de Cemento", categoria: "construccion", imagen: "img/cemento.jpg", descripcion: "Cemento de alta resistencia.", whatsapp: "50432901909" },
    { id: 5, nombre: "Varilla", categoria: "construccion", imagen: "img/cemento.jpg", descripcion: "Varillas resistentes de punta azul.", whatsapp: "50432901909" },
    { id: 6, nombre: "Pala", categoria: "construccion", imagen: "img/cemento.jpg", descripcion: "Pala resistente para palar.", whatsapp: "50432901909" }
];

function mostrarProductos(categoriaFiltrada = 'todos') {
    const contenedor = document.getElementById('contenedor-productos');
    if(!contenedor) return;

    // Filtramos los productos según la categoría
    const productosFiltrados = categoriaFiltrada === 'todos' 
        ? productos 
        : productos.filter(p => p.categoria === categoriaFiltrada);

    contenedor.innerHTML = productosFiltrados.map(p => `
        <div class="tarjeta-producto">
            <img src="${p.imagen}" alt="${p.nombre}">
            <div class="info">
                <span class="categoria-tag">${p.categoria}</span>
                <h3>${p.nombre}</h3>
                <a href="detalle.html?id=${p.id}" class="btn-ver">Ver Detalles</a>
            </div>
        </div>
    `).join('');
};

function buscarProducto() {
    const texto = document.getElementById('inputBuscador').value.toLowerCase();
    const productosFiltrados = productos.filter(p => 
        p.nombre.toLowerCase().includes(texto) || 
        p.categoria.toLowerCase().includes(texto)
    );
    renderizarProductos(productosFiltrados); // Usa una función que pinte el HTML
};

// Función para "dibujar" los productos en pantalla
function renderizarProductos(lista) {
    const contenedor = document.getElementById('contenedor-productos');
    if (lista.length === 0) {
        contenedor.innerHTML = `<p class="sin-resultados">No encontramos productos que coincidan con tu búsqueda.</p>`;
        return;
    }

    contenedor.innerHTML = lista.map(p => `
        <div class="tarjeta-producto">
            <img src="${p.imagen}" alt="${p.nombre}">
            <div class="info">
                <span class="categoria-tag">${p.categoria}</span>
                <h3>${p.nombre}</h3>
                <p class="precio">${p.precio}</p>
                <a href="detalle.html?id=${p.id}" class="btn-ver">Ver Detalles</a>
            </div>
        </div>
    `).join('');
}

// ESTA ES LA FUNCIÓN QUE HACE LA MAGIA
function buscarProducto() {
    const texto = document.getElementById('inputBuscador').value.toLowerCase();
    
    // Filtramos el array de productos comparando el nombre o la categoría
    const filtrados = productos.filter(p => 
        p.nombre.toLowerCase().includes(texto) || 
        p.categoria.toLowerCase().includes(texto)
    );

    renderizarProductos(filtrados);
};

contenedor.innerHTML = lista.map(p => `
    <div class="tarjeta-producto">
        <img src="${p.imagen}" alt="${p.nombre}">
        <div class="info">
            <span class="categoria-tag">${p.categoria}</span>
            <h3>${p.nombre}</h3>
            <p class="cta-consulta">Precio bajo consulta</p> 
            <a href="detalle.html?id=${p.id}" class="btn-ver">Consultar Disponibilidad</a>
        </div>
    </div>
`).join('');

window.onload = () => mostrarProductos('todos');