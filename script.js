// Função para exibir a tela de carregamento
window.addEventListener('load', () => {
    // Espera 1 segundo e então remove a tela de loading
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
        document.querySelector('body').style.overflow = 'auto'; // Habilita o rolar da página
    }, 1000);
});

// Função de transição de animação nas seções
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    section.style.opacity = 0; // Inicializa as seções com opacidade 0
    section.style.transition = 'opacity 1s ease-in-out'; // Define a transição de fade

    // Quando a seção entra na tela, ela fica visível
    window.addEventListener('scroll', () => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 50) {
            section.style.opacity = 1;
        }
    });
});
