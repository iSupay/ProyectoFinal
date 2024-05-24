/*------SECCION PARA SLIDER AUTOMATICO--------*/

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('#animaciones-slider img');
    let current = 0;

    function changeSlide() {
        images[current].classList.remove('active');
        images[current].classList.add('inactive');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
        images[current].classList.remove('inactive');
    }

    setInterval(changeSlide, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('#personajes-slider img');
    let current = 0;

    function changeSlide() {
        images[current].classList.remove('active');
        images[current].classList.add('inactive');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
        images[current].classList.remove('inactive');
    }

    setInterval(changeSlide, 3000);
});

/*-------SECCION PARA PODER MOVER LOS SLIDERS INICIALES--------*/

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    document.getElementById('next').addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    });

    document.getElementById('prev').addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    });
});

/*--------SECCION DE AMIGOS PARA MOSTRAR LAS TARJETAS-----------*/

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.querySelector('.close-btn');
    
    const expandedImage = document.getElementById('expanded-image');
    const expandedName = document.getElementById('expanded-name');
    const expandedPersonality = document.getElementById('expanded-personality');
    const expandedDescription = document.getElementById('expanded-description');

    const cardData = {
        'card-tommy': {
            image: 'img/td.png',
            name: 'Tommy',
            personality: 'Carismatico, creativo, jugueton, leal, honesto, divertiddo, MUY distraído.',
            description: 'Tommy es un pequeño increiblemente carismatico y creativo al que le gusta dejarse llevar por sus fantasías, aprovecha cada situación y desafío que se le presentan en su día a día para crear situaciones ficticias en las que inevitablemente termina involucrando a sus conocidos.'
        },
        'card-connie': {
            image: 'img/cd.png',
            name: 'Connie',
            personality: 'Connie es inteligente y siempre tiene una solución creativa.',
            description: 'Connie es la mejor amiga de Tomy, es su fiel acompañante en todas y cada una de sus aventuras, además de eso es su mayor apoyo dentro de la escuela, ya que es quien mejor lo comprende y quien más paciencia le tiene, sin Connie definitivamente las cosas no serían fáciles para Tommy.'
        },
        'card-robert': {
            image: 'img/rd.png',
            name: 'Robert',
            personality: 'Robert es amable y siempre busca el bienestar de los demás.',
            description: 'Robert es el profesor de la clase de Tommy y Connie, es, en los ojos de Tommy, el villano de su historia, ya que es quien más responsabilidades pone sobre los hombros de Tommy, sin embargo es también de los personajes más confiables y empáticos que hay dentro de la historia, preocupandose siempre por el bienestar de Tommy y compañía.'
        }
    };

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cardId = card.id;
            expandedImage.style.backgroundImage = `url(${cardData[cardId].image})`;
            expandedName.textContent = cardData[cardId].name;
            expandedPersonality.textContent = cardData[cardId].personality;
            expandedDescription.textContent = cardData[cardId].description;

            overlay.classList.remove('hidden');
        });
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.add('hidden');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.add('hidden');
        }
    });
});

/*--------SECCION PARA SLIDERS DE JUGABILIDAD-----------*/

let currentSlideIndexJugabilidad = 0;
const slidesJugabilidad = document.querySelectorAll('.jugabilidad-slide');

function showSlideJugabilidad(index) {
    slidesJugabilidad.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function moveSlideJugabilidad(step) {
    currentSlideIndexJugabilidad += step;
    if (currentSlideIndexJugabilidad < 0) {
        currentSlideIndexJugabilidad = slidesJugabilidad.length - 1;
    } else if (currentSlideIndexJugabilidad >= slidesJugabilidad.length) {
        currentSlideIndexJugabilidad = 0;
    }
    showSlideJugabilidad(currentSlideIndexJugabilidad);
}

// Mostrar mensaje de éxito al enviar el formulario
document.getElementById("reservaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("mensajeExito").style.display = "block";
    window.scrollTo({behavior: 'smooth' });
});

// Cerrar el mensaje de éxito
document.getElementById("cerrarMensaje").addEventListener("click", function() {
    document.getElementById("mensajeExito").style.display = "none";
});

// Vaciar el formulario
document.getElementById("clearFormButton").addEventListener("click", function() {
    document.getElementById("reservaForm").reset();
});
