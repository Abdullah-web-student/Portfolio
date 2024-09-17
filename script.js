document.addEventListener('DOMContentLoaded', function() {
    const servicesSection = document.querySelector('.container-services');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                servicesSection.classList.add('visible');
                observer.unobserve(servicesSection); // Stop observing once animation is triggered
            }
        });
    });

    observer.observe(servicesSection);
});


window.addEventListener('scroll', function() {
    const projectsSection = document.querySelector('.container3');
    const projectsPosition = projectsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (projectsPosition < screenPosition) {
        const projectCards = document.querySelectorAll('.project');
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 200); // Adding a delay for each card
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section1, .edu, .exp');
    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});


