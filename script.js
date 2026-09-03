// ==========================================
// INTERAÇÕES DO HERO
// ==========================================

const ticketsButton = document.querySelector('.tickets-button');

if (ticketsButton) {
    ticketsButton.addEventListener('click', () => {
        window.open('https://www.marvel.com/', '_blank');
    });
}

// ==========================================
// BOTÃO DE SCROLL SUAVE
// ==========================================

const scrollButton = document.querySelector('.scroll-button');

if (scrollButton) {
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
}

// ==========================================
// LINK DO TRAILER
// ==========================================

const trailerLink = document.querySelector('.trailer-link');

if (trailerLink) {
    trailerLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.open('https://www.youtube.com/watch?v=8TZMtslA3UY', '_blank');
    });
}