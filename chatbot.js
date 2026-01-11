// 1. FUNCIÓN PARA MOSTRAR/OCULTAR EL CHAT
function toggleChat() {
    const chatVentana = document.getElementById('ventana-chat');
    // Si está oculto o no tiene estilo, lo mostramos
    if (chatVentana.style.display === 'none' || chatVentana.style.display === '') {
        chatVentana.style.display = 'flex';
    } else {
        chatVentana.style.display = 'none';
    }
}

// 2. FUNCIÓN PARA ENVIAR MENSAJES
function enviarMensaje() {
    const input = document.getElementById('user-input');
    const msgTexto = input.value.trim();
    
    if (msgTexto === "") return; // No enviar si está vacío

    // Agregar mensaje del usuario al chat
    agregarBurbuja(msgTexto, 'user');
    input.value = ""; // Limpiar el campo

    // Respuesta del bot después de un pequeño retraso
    setTimeout(() => {
        const respuestaBot = generarRespuesta(msgTexto);
        agregarBurbuja(respuestaBot, 'bot');
    }, 600);
}

// 3. LA LÓGICA DE INTELIGENCIA DEL BOT
function generarRespuesta(mensaje) {
    const consulta = mensaje.toLowerCase();
    
    // Si el usuario saluda
    if (consulta.includes("hola") || consulta.includes("buenos dias")) {
        return "¡Hola! Bienvenido a Coferra. ¿En qué producto estás interesado hoy?";
    }

    // BUSCAR EN EL CATÁLOGO (Lee lo que está en el HTML en ese momento)
    // Buscamos todas las tarjetas de productos que se están mostrando
    const productosEnPantalla = document.querySelectorAll('.tarjeta-producto');
    let encontrado = null;

    productosEnPantalla.forEach(tarjeta => {
        const nombreProducto = tarjeta.querySelector('h3').innerText.toLowerCase();
        if (consulta.includes(nombreProducto)) {
            const precio = tarjeta.querySelector('.precio').innerText;
            encontrado = { nombre: nombreProducto, precio: precio };
        }
    });

    if (encontrado) {
        return `¡Sí, tenemos ${encontrado.nombre}! Su precio actual es de ${encontrado.precio}. ¿Te gustaría que te ayude con algo más?`;
    }

    // Respuestas por defecto si no encuentra el producto
    if (consulta.includes("precio") || consulta.includes("cuanto cuesta")) {
        return "Dime el nombre del producto para darte el precio exacto.";
    }

    if (consulta.includes("ubicacion") || consulta.includes("donde estan")) {
        return "Estamos ubicados en Santa Cruz de Yojoa. ¡Visítanos!";
    }

    return "No pude encontrar ese producto exacto, pero puedes consultarle al jefe directamente usando el botón de WhatsApp de arriba. 👆";
}

// 4. FUNCIÓN AUXILIAR PARA CREAR LAS BURBUJAS
function agregarBurbuja(texto, clase) {
    const chatBody = document.getElementById('chat-body');
    const div = document.createElement('div');
    div.className = `msg ${clase}`;
    div.innerText = texto;
    
    chatBody.appendChild(div);

    // Scroll automático al último mensaje
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Extra: Permitir enviar mensaje al presionar 'Enter'
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        enviarMensaje();
    }
});