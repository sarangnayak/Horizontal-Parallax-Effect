document.addEventListener('DOMContentLoaded', () => {
    const bgImage = document.getElementById('bg-image');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        // Move the background image at half the speed of the scroll
        // This creates the parallax effect
        bgImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});


