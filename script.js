document.addEventListener('DOMContentLoaded', () => {
    const pieces = document.querySelectorAll('.heart-piece');
    const forgiveButton = document.getElementById('forgive-button');

    forgiveButton.addEventListener('click', () => {
        // Animar las piezas hacia el centro para formar el corazón
        pieces.forEach((piece) => {
            piece.style.opacity = 1; // Hacer visible la pieza
            piece.style.transform = 'translate(0, 0) rotate(0deg) scale(1)'; // Mover, rotar y escalar a su posición dentro del grid
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const pieces = document.querySelectorAll(".heart-piece");
    const textElement = document.getElementById("text");
    const text = "Siento lo ocurrido,<br>me siento muy arrepentida por lo que he hecho.<br>Por favor, perdóname.";
    let textIndex = 0;
    let pieceIndex = 0;

    function showNextPiece() {
        if (pieceIndex < pieces.length) {
            pieces[pieceIndex].style.opacity = 1;
            pieceIndex++;
            setTimeout(showNextPiece, 700); // Ajusta el tiempo entre piezas
        }
    }

    function showNextCharacter() {
        if (textIndex < text.length) {
            if (text[textIndex] === '<') {
                const endIndex = text.indexOf('>', textIndex);
                textElement.innerHTML += text.substring(textIndex, endIndex + 1);
                textIndex = endIndex + 1;
            } else {
                textElement.innerHTML += text[textIndex];
                textIndex++;
            }
            setTimeout(showNextCharacter, 100); // Ajusta el tiempo entre caracteres
        }
    }

    showNextPiece();
    showNextCharacter();
});