// Fait par Yasmine

document.querySelector(".game-timeline").addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.scroll-section');
    const body = document.body;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.x <= window.innerWidth / 2) {
            if (section.id === 'section1') {
                body.className = 'couleur-mauve';
            } else if (section.id === 'section2') {
                body.className = 'couleur-bleu';
            } else if (section.id === 'section3') {
                body.className = 'couleur-vert';
            }
        }
    });
});