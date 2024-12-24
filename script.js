document.addEventListener("DOMContentLoaded", () => {
    const pieces = document.querySelectorAll(".heart-piece");
    const textElement = document.getElementById("text");
    const textElement2 = document.getElementById("text-2");
    const text = "Siento lo ocurrido,<br>me siento muy arrepentida por lo que he hecho.<br>Por favor, perdóname.";
    const text2 = "Te prometo que no volverá a ocurrir. Todos cometemos errores, es lo unico que nos hace humanos y nos hace sentir vivos.";
    let textIndex = 0;
    let pieceIndex = 0;

    // Mostrar las piezas del corazón una por una
    function showNextPiece() {
        if (pieceIndex < pieces.length) {
            pieces[pieceIndex].style.opacity = 1;
            pieceIndex++;
            setTimeout(showNextPiece, 700); // Tiempo entre cada pieza
        }
    }

    // Mostrar texto con efecto de tipeo
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
            setTimeout(showNextCharacter, 100); // Tiempo entre cada carácter
        } else {
            // Animar la salida del texto 1
            setTimeout(() => {
                animateTextExit(textElement, () => {
                    // Mostrar y animar la entrada del texto 2
                    textElement2.style.visibility = 'visible';
                    textElement2.classList.add('text-enter');
                    showNextCharacter2();
                });
            }, 1000); // Esperar un segundo después de terminar el texto 1
        }
    }

    // Mostrar el segundo texto con efecto de tipeo
    function showNextCharacter2() {
        let text2Index = 0;

        function typeNextCharacter() {
            if (text2Index < text2.length) {
                textElement2.innerHTML += text2[text2Index];
                text2Index++;
                setTimeout(typeNextCharacter, 100); // Tiempo entre cada carácter del texto 2
            } else {
                // Animar la salida del texto 2 después de escribirlo completamente
                setTimeout(() => {
                    animateTextExit(textElement2); // Animación de salida del texto 2
                }, 1000); // Esperar un segundo después de terminar el texto 2
            }
        }

        typeNextCharacter();
    }

    // Función para animar la salida del texto
    function animateTextExit(element, callback) {
        element.classList.add('text-exit-up'); // Clase de animación de salida
        element.addEventListener(
            'animationend',
            () => {
                element.style.visibility = 'hidden'; // Ocultar el texto
                if (callback) callback(); // Ejecutar el callback si existe
            },
            { once: true }
        );
    }

    // Iniciar las animaciones
    showNextPiece();
    showNextCharacter();
});
