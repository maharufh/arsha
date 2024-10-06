// JavaScript to animate skill bars
document.addEventListener('DOMContentLoaded', () => {
    const skillContainers = document.querySelectorAll('.skill-container');

    skillContainers.forEach(container => {
        const bar = container.querySelector('.bar span');
        const width = bar.style.width;
        bar.style.width = '0%';

        container.addEventListener('mouseenter', () => {
            bar.style.width = width;
        });

        container.addEventListener('mouseleave', () => {
            bar.style.width = '0%';
        });
    });
});


