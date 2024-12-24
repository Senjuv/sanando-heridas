document.addEventListener("DOMContentLoaded", () => {
    const pieces = document.querySelectorAll(".heart-piece");
    const textElement = document.getElementById("text");
    const textElement2 = document.getElementById("text-2");
    const text = "Siento lo ocurrido,<br>me siento muy arrepentida por lo que he hecho.<br>Por favor, perdóname.";
    const text2 = "Te prometo que no volverá a ocurrir.<br>Te amo mucho.";
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
        } else {
            // Animar el texto 1 para que desaparezca
            setTimeout(() => {
                textElement.classList.add('text-exit-up'); // Aplica la animación de salida
                textElement.addEventListener(
                    'animationend',
                    () => {
                        textElement.style.visibility = 'hidden'; // Oculta el texto 1 después de la animación
                        textElement2.style.visibility = 'visible'; // Asegura que el texto 2 sea visible
                        textElement2.classList.add('text-enter'); // Aplica la animación de entrada
                        showNextCharacter2(); // Comienza la animación del texto 2
                    },
                    { once: true } // Asegura que el listener se ejecute solo una vez
                );
            }, 1000); // Espera 1 segundo antes de animar el texto 1
        }
    }
    
    function showNextCharacter2() {
        let text2Index = 0;
        function typeNextCharacter() {
            if (text2Index < text2.length) {
                textElement2.innerHTML += text2[text2Index];
                text2Index++;
                setTimeout(typeNextCharacter, 100); // Ajusta el tiempo entre caracteres del segundo texto
            } else {
                // Cuando termina el texto 2, aplicamos la animación de salida
                setTimeout(() => {
                    textElement2.classList.add('text-2-exit'); // Aplica la animación de salida
                    textElement2.addEventListener(
                        'animationend',
                        () => {
                            textElement2.style.visibility = 'hidden'; // Oculta el texto 2 después de la animación
                        },
                        { once: true }
                    );
                }, 1000); // Espera 1 segundo después de completar el texto 2
            }
        }
        typeNextCharacter();
    }

    showNextPiece();
    showNextCharacter();
});