function peek() {
    const bunny = document.getElementById('bunny');
    bunny.style.animation = 'bounce 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)'; /* Duration and Bezier curve */

    // Remove the animation after it completes
    bunny.addEventListener('animationend', () => {
        bunny.style.animation = 'none';
    });
}