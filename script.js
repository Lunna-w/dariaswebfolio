document.querySelectorAll('.artwork-container').forEach(container => {
    const img = container.querySelector('.artwork');
    const hoverSrc = img.getAttribute('data-hover-src');
    container.style.setProperty('--hover-image', `url(${hoverSrc})`);
    container.querySelector('::before').style.backgroundImage = `var(--hover-image)`;
});