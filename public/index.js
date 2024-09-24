// SPIN LOAD

// Ejecutar el código una vez que la página se haya cargado completamente
window.addEventListener('load', function() {
    // Agregar la clase 'loaded' al body para indicar que la página está cargada
    document.body.classList.add('loaded');
    setTimeout(function() {
        document.getElementById("loader-container").style.display = 'none'; // Finalmente, establecer display: none
    }, 1000); // Esperar el tiempo de la transición antes de ocultar
}, 10000); // 10 segundos


const sectionIndex1 = document.getElementById("index1")
const sectionIndex2 = document.getElementById("index2")
const sectionNosotros1 = document.getElementById("nosotros1")
const sectionProyectos1 = document.getElementById("proyectos1")
const sectionContacto1 = document.getElementById("contacto1")

const menu = document.getElementById("menu");
const nav = document.getElementById("nav")
const inicio = document.getElementById("inicio")
const nosotros = document.getElementById("nosotros")
const proyectos = document.getElementById("proyectos")
const contacto = document.getElementById("contacto")
const whatsapp = document.getElementById("whatsapp")

const terrazas = document.getElementById("terrazas")
const casas = document.getElementById("casas")
const quinchos = document.getElementById("quinchos")
const cocinas = document.getElementById("cocinas")
const otros = document.getElementById("otros")

const terrazas1 = document.querySelectorAll("terrazas1")
const casas1 = document.querySelectorAll("casas1")
const quinchos1 = document.querySelectorAll("quinchos1")
const cocinas1 = document.querySelectorAll("cocinas1")
const otros1 = document.querySelectorAll("otros1")


inicio.addEventListener("click", function(){
    sectionIndex1.style.display = "block";
    sectionIndex2.style.display = "flex";
    sectionNosotros1.style.display = "none";
    sectionProyectos1.style.display = "none";
    sectionContacto1.style.display = "none"
})

nosotros.addEventListener("click", function(){
    sectionIndex1.style.display = "none";
    sectionIndex2.style.display = "none";
    sectionNosotros1.style.display = "flex";
    sectionProyectos1.style.display = "none";
    sectionContacto1.style.display = "none"
})

proyectos.addEventListener("click", function(){
    sectionIndex1.style.display = "none";
    sectionIndex2.style.display = "none";
    sectionNosotros1.style.display = "none";
    sectionProyectos1.style.display = "flex";
    sectionContacto1.style.display = "none"
})

contacto.addEventListener("click", function(){
    sectionIndex1.style.display = "none";
    sectionIndex2.style.display = "none";
    sectionNosotros1.style.display = "none";
    sectionProyectos1.style.display = "none";
    sectionContacto1.style.display = "flex"
    
})

function adjustMenuDisplay() {
    const nav = document.getElementById("nav");

    if (window.innerWidth > 662) {
        nav.style.display = "block";
    } else if (nav.style.display === "block") {
        nav.style.display = "none";
    }
}

// Verificar el tamaño de la pantalla al cargar la página
document.addEventListener("DOMContentLoaded", adjustMenuDisplay);

// Verificar el tamaño de la pantalla al redimensionar la ventana
window.addEventListener("resize", adjustMenuDisplay);



document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const nav = document.getElementById("nav");

    const menuItems = [
        inicio,
        contacto,
        proyectos,
        nosotros,
    ];

    // Alternar la visibilidad del menú al hacer clic en el botón del menú
    menu.addEventListener("click", function(event) {
        event.stopPropagation(); // Evita que el clic se propague al documento

        if (window.innerWidth <= 662) { // Verifica si el ancho de la ventana es menor o igual a 662px
            if (nav.style.display === "flex") {
                nav.style.display = "none";
            } else {
                nav.style.display = "flex";
            }
        }
    });

    // Cerrar el menú al hacer clic en cualquiera de los elementos del menú
    menuItems.forEach(item => {
        if (item) {
            item.addEventListener("click", function() {
                if (window.innerWidth <= 662) { // Solo aplica si el ancho de la ventana es menor o igual a 662px
                    nav.style.display = "none";
                }
            });
        }
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", function(event) {
        if (window.innerWidth <= 662 && nav.style.display === "flex" && !nav.contains(event.target) && !menu.contains(event.target)) {
            nav.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.container-botones-proyectos button');
    const proyectos = document.querySelectorAll('.container-proyectos .proyecto-number');

    // Mostrar solo los primeros 5 proyectos al cargar la página
    proyectos.forEach((proyecto, index) => {
        if (index < 5) {
            proyecto.style.display = "flex"; // Mostrar proyecto
        } else {
            proyecto.style.display = "none"; // Ocultar proyecto
        }
    });

    // Añadir eventos de clic a los botones de categoría
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            // Mostrar u ocultar proyectos según la categoría seleccionada
            if (category === "todos") {
                // Mostrar todos los proyectos, sin límite de 5
                proyectos.forEach(proyecto => {
                    proyecto.style.display = "flex";
                });
            } else {
                // Mostrar proyectos de la categoría seleccionada
                proyectos.forEach(proyecto => {
                    if (proyecto.getAttribute('data-category') === category) {
                        proyecto.style.display = "flex";
                    } else {
                        proyecto.style.display = "none";
                    }
                });
            }
        });
    });
});

// Función para detectar cuando parte de un elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // Verifica si el elemento está parcialmente visible
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return vertInView && horInView;
}

// Agregamos un "event listener" para detectar el scroll
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.fade-in-section'); // Selecciona todas las secciones con la clase

    sections.forEach(function(section) {
        // Si parte del elemento está en el viewport, le agregamos la clase 'visible'
        if (isInViewport(section)) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});