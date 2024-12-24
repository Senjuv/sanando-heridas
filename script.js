document.addEventListener('DOMContentLoaded', () => {
    const pieces = document.querySelectorAll('.heart-piece');
    const forgiveButton = document.getElementById('forgive-button');

    forgiveButton.addEventListener('click', () => {
        // Animar las piezas hacia el centro para formar el corazón
        pieces.forEach((piece) => {
            piece.style.opacity = 1; // Hacer visible la pieza
            piece.style.transform = 'translate(0, 0) rotate(360deg) scale(1)'; // Mover, rotar y escalar a su posición dentro del grid
        });
    });
});