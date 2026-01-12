const productos = [
    { id: 1, nombre: "Lámina de Zinc Aluzinc", categoria: "techos", imagen: "https://tse1.explicit.bing.net/th/id/OIP.Emi3xdXv_U3mBpjEikPFTgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3", precio: "L. 250.00", desc: "Lámina resistente de alta calidad, ideal para techos duraderos." },
    { id: 2, nombre: "Taladro DeWalt 20V", categoria: "maquinas", imagen: "https://http2.mlstatic.com/D_NQ_NP_633420-MLA45467093493_042021-F.jpg", precio: "L. 3,500.00", desc: "Taladro inalámbrico profesional con batería de larga duración." },
    { id: 3, nombre: "Martillo", categoria: "herramientas", imagen: "https://tse2.mm.bing.net/th/id/OIP.tBKGVCFNd9TRhrLaUO6cDQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", precio: "L. 180.00", desc: "Martillo de acero forjado con mango ergonómico." },
    { id: 4, nombre: "Bolsa de Cemento Argos", categoria: "construccion", imagen: "https://tse4.mm.bing.net/th/id/OIP.GAVtxJs6XfT-iklFYxkFXwHaGf?rs=1&pid=ImgDetMain&o=7&rm=3", precio: "L. 210.00", desc: "Cemento gris de alta resistencia para todo tipo de obra." },
    { id: 5, nombre: "Varilla", categoria: "construccion", imagen: "https://tse4.mm.bing.net/th/id/OIP.wbkCgjxcCfmwGSOHjoT9hQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3", precio: "L. 145.00", desc: "Varilla de hierro corrugado grado 40." },
    { id: 6, nombre: "Pala", categoria: "construccion", imagen: "https://http2.mlstatic.com/pala-modelo-espanol-puno-y-41-plg-truper-17165-D_NQ_NP_307321-MLM20773934617_062016-F.jpg", precio: "L. 320.00", desc: "Pala punta redonda reforzada para trabajo pesado." },
    { id: 7, nombre: "Cemento Gris", categoria: "construccion", precio: "L. 210.00", imagen: "https://tse4.mm.bing.net/th/id/OIP.9dcoKOr-5ri-hfuJyidQYwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Cemento de uso general para acabados finos." },
    { id: 10, nombre: "Soldadora Profesional", categoria: "maquinas", precio: "L. 10,000.00", imagen: "https://m.media-amazon.com/images/I/81F0aUMa0SL._SL1500_.jpg", desc: "Inversora de soldar portátil y potente para uso industrial." },
    { id: 12, nombre: "Tornillos punta de broca", categoria: "herramientas", precio: "L. 15.00", imagen: "https://tse1.mm.bing.net/th/id/OIP.vSiiyX7x9QUaj-6G6_5xxAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", desc: "Tornillos autoperforantes para estructuras metálicas." }
];

// --- FUNCIONES DEL CATÁLOGO ---
function renderizarProductos(lista) {
    const contenedor = document.getElementById('contenedor-productos');
    if (!contenedor) return;
    contenedor.innerHTML = lista.map(p => `
        <div class="tarjeta-producto">
            <img src="${p.imagen}" alt="${p.nombre}">
            <div class="info">
                <h3>${p.nombre}</h3>
                <span class="precio">${p.precio}</span>
                <a href="detalles.html?id=${p.id}" class="btn-ver">Ver Detalles</a>
            </div>
        </div>
    `).join('');
}

// ... (Las funciones de mostrar, buscar y chatbot se quedan igual)

window.onload = () => mostrarProductos('todos');
