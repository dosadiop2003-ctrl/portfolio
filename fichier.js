


// Animation apparition au scroll

const cards = document.querySelectorAll('.service-card, .card');

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if(position < screenPosition){
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }

    });

});

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = '0.6s ease';
});
