// Arreglo de palabras
const palabras = ["manzana", "computadora", "programador", "javascript", "web", "diseñador", "matematicas", "html", "edtecnica"];

// Función para seleccionar una palabra al azar
function seleccionarPalabra() {
  const indiceAleatorio = Math.floor(Math.random() * palabras.length);
  return palabras[indiceAleatorio];
}

// Función para inicializar el juego
function iniciarJuego() {
  // Seleccionar una palabra al azar
  const palabraSecreta = seleccionarPalabra();

  // Inicializar variables del juego
  let palabraMostrada = palabraSecreta.replace(/./g, "_"); // Reemplazar cada letra por un guion bajo
  let intentosRestantes = 10;
  let letrasAdivinadas = [];

  // Bucle principal del juego
  while (intentosRestantes > 0 && palabraMostrada.indexOf("_") !== -1) {
    console.log(`\nPalabra: ${palabraMostrada}`);
    console.log(`Letras adivinadas: ${letrasAdivinadas.join(", ")}`);
    console.log(`Intentos restantes: ${intentosRestantes}`);

    // Solicitar una letra al jugador
    const letra = prompt("Ingrese una letra:").toLowerCase();

    // Validar la entrada del jugador
    if (letrasAdivinadas.includes(letra) || !isNaN(letra) || letra.length !== 1) {
      alert("Letra inválida. Intente nuevamente.");
      continue;
    }

    // Verificar si la letra está en la palabra secreta
    if (palabraSecreta.includes(letra)) {
      // Actualizar la palabra mostrada con la letra adivinada
      for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
          palabraMostrada = palabraMostrada.substr(0, i) + letra + palabraMostrada.substr(i + 1);
        }
      }
      // Agregar la letra a las letras adivinadas
      letrasAdivinadas.push(letra);
    } else {
      // Disminuir los intentos restantes
      intentosRestantes--;
      console.log(`Letra incorrecta. ¡Te quedan ${intentosRestantes} intentos!`);
    }
  }

  // Mostrar el resultado final
  if (palabraMostrada.indexOf("_") === -1) {
    console.log(`¡Felicidades! Adivinaste la palabra: ${palabraSecreta}`);
  } else {
    console.log(`¡Has perdido! La palabra era: ${palabraSecreta}`);
  }
}

// Iniciar el juego
iniciarJuego();
