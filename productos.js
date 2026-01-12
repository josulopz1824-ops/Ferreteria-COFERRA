const productos = [
    { id: 1, nombre: "Lámina de Zinc Aluzinc", categoria: "techos", imagen: "https://tse1.explicit.bing.net/th/id/OIP.Emi3xdXv_U3mBpjEikPFTgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3", precio: "L. 250.00" },
    { id: 2, nombre: "Taladro DeWalt 20V", categoria: "maquinas", imagen: "https://http2.mlstatic.com/D_NQ_NP_633420-MLA45467093493_042021-F.jpg", precio: "L. 3,500.00" },
    { id: 3, nombre: "Martillo", categoria: "herramientas", imagen: "https://tse2.mm.bing.net/th/id/OIP.tBKGVCFNd9TRhrLaUO6cDQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", precio: "L. 180.00" },
    { id: 4, nombre: "Bolsa de Cemento Argos", categoria: "construccion", imagen: "https://tse4.mm.bing.net/th/id/OIP.GAVtxJs6XfT-iklFYxkFXwHaGf?rs=1&pid=ImgDetMain&o=7&rm=3", precio: "L. 210.00" },
    { id: 5, nombre: "Varilla", categoria: "construccion", imagen: "https://tse4.mm.bing.net/th/id/OIP.wbkCgjxcCfmwGSOHjoT9hQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3", precio: "L. 145.00" },
    { id: 6, nombre: "Pala", categoria: "construccion", imagen: "https://http2.mlstatic.com/pala-modelo-espanol-puno-y-41-plg-truper-17165-D_NQ_NP_307321-MLM20773934617_062016-F.jpg", precio: "L. 320.00" },
    { id: 7, nombre: "Cemento Gris", precio: 210, imagen: "https://tse4.mm.bing.net/th/id/OIP.9dcoKOr-5ri-hfuJyidQYwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 10, nombre: "Soldadora Profesional", precio: 10000, imagen: "https://m.media-amazon.com/images/I/81F0aUMa0SL._SL1500_.jpg" },
    { id: 12, nombre: "Tornillos punta de broca", precio: 15, imagen: "https://tse1.mm.bing.net/th/id/OIP.vSiiyX7x9QUaj-6G6_5xxAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" }
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
                <a href="https://wa.me/50432901909?text=Busco ${p.nombre}" class="btn-ver">Consultar</a>
            </div>
        </div>
    `).join('');
}

function mostrarProductos(cat) {
    const filtrados = (cat === 'todos') ? productos : productos.filter(p => p.categoria === cat);
    renderizarProductos(filtrados);
}

function buscarProducto() {
    const texto = document.getElementById('inputBuscador').value.toLowerCase();
    const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(texto));
    renderizarProductos(filtrados);
}

// --- FUNCIONES DEL CHATBOT ---
function toggleChat() {
    const chat = document.getElementById('ventana-chat');
    chat.style.display = (chat.style.display === 'flex') ? 'none' : 'flex';
}

function enviarMensaje() {
    const input = document.getElementById('user-input');
    const texto = input.value.trim();
    if (!texto) return;

    agregarBurbuja(texto, 'user');
    input.value = "";

    setTimeout(() => {
        const respuesta = generarRespuesta(texto);
        agregarBurbuja(respuesta, 'bot');
    }, 600);
}

function generarRespuesta(mensaje) {
    const msj = mensaje.toLowerCase();
    
    // Buscar si el mensaje menciona algún producto
    const encontrado = productos.find(p => msj.includes(p.nombre.toLowerCase()));

    if (encontrado) {
        return `¡Sí! El ${encontrado.nombre} está disponible y tiene un precio de ${encontrado.precio}.`;
    }
    
    if (msj.includes("hola")) return "¡Hola! ¿En qué producto de Coferra estás interesado?";
    return "No encontré ese producto, pero pregúntale al jefe por WhatsApp.";
}

function agregarBurbuja(texto, clase) {
    const body = document.getElementById('chat-body');
    const div = document.createElement('div');
    div.className = `msg ${clase}`;
    div.innerText = texto;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
}

// Iniciar
window.onload = () => mostrarProductos('todos');

// Escuchar tecla Enter en el chat
document.addEventListener('keypress', (e) => {
    if(e.key === 'Enter' && document.activeElement.id === 'user-input') enviarMensaje();
});


