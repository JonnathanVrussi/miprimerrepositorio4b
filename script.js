// Botones
const btnInicio = document.getElementById('inicio');
const btnProductos = document.getElementById('productos');
const btnUsuario = document.getElementById('usuario');
const btnCarrito = document.getElementById('carrito');

// Contenedor principal
const contenido = document.getElementById('contenidoPrincipal');

// Función para mostrar contenido
function mostrarContenido(html) {
    contenido.innerHTML = html;
}

// Eventos
btnInicio.addEventListener('click', () => {
    mostrarContenido(`
        <h2>QUIÉNES SOMOS</h2>
        <div class="box">
            Somos un equipo dedicado a crear tecnología futurista que protege a tus mascotas detectando emociones y necesidades.
        </div>
    `);
});

btnProductos.addEventListener('click', () => {
    mostrarContenido(`
        <h2>Productos Futuristas</h2>
        <div class="box">
            - Collares inteligentes<br>
            - Cámaras emocionales<br>
            - GPS para mascotas<br>
            - Drones de rescate animal
        </div>
    `);
});

btnUsuario.addEventListener('click', () => {
    mostrarContenido(`
        <h2>Registrarse / Iniciar Sesión</h2>
        <div class="box">
            <form>
                <input type="text" placeholder="Nombre de usuario" required><br><br>
                <input type="password" placeholder="Contraseña" required><br><br>
                <button type="submit" class="nav-btn">Iniciar Sesión</button><br><br>
                <button type="button" class="nav-btn">Registrarse</button>
            </form>
        </div>
    `);
});

btnCarrito.addEventListener('click', () => {
    mostrarContenido(`
        <h2>Tu Carrito</h2>
        <div class="box">
            Aquí verás los productos futuristas que vayas agregando.<br><br>
            ¡Protege a tu mascota con lo último en tecnología!
        </div>
    `);
});

// Botón de contacto (WhatsApp)
const contactoBtn = document.getElementById('contactoBtn');
contactoBtn.addEventListener('click', () => {
    window.open('https://wa.me/573001112233', '_blank');
});
