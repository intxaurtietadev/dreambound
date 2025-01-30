// Script para Mapa de Sueños Interactivo
function viewDreamDetails(dreamType) {
    document.getElementById('dream-details').innerHTML = `<h3>Detalles de ${dreamType}</h3><p>Explora los patrones y significados comunes.</p>`;
  }
  
  // Script para Reloj del Sueño
  function showDreamInterpretation() {
    let time = document.getElementById('dream-time').value;
    let interpretation = `Los sueños ocurren más frecuentemente a las ${time}. Descubre el significado relacionado.`;
    document.getElementById('dream-time-interpreta').innerText = interpretation;
  }
  
  // Script para Generador de Sueños Aleatorios
  function generateDream() {
    const dreams = [
      'Estás volando sobre una ciudad futurista.',
      'Te caes en un abismo sin fin.',
      'Nadas en un océano lleno de criaturas místicas.',
      'Hablas con un ser querido que ya no está.',
    ];
    const randomDream = dreams[Math.floor(Math.random() * dreams.length)];
    document.getElementById('dream-output').innerHTML = `<p>${randomDream}</p>`;
  }
  
  // Script para Explorador de Sueños Comunes
  function showDreamInfo(dream) {
    document.getElementById('dream-info').innerHTML = `<h3>${dream}</h3><p>Este es uno de los sueños más comunes. Descubre qué podría significar.</p>`;
  }
  
  // Script para "Tu Sueño del Día"
  function interpretDream() {
    let userDream = document.getElementById('dream-input').value;
    document.getElementById('dream-interpretation').innerHTML = `<p>Tu sueño: "${userDream}" podría estar relacionado con...</p>`;
  }
  
  // Script para Test de Realidad Onírico
  function startTest() {
    document.getElementById('test-questions').innerHTML = `
      <p>¿Puedes volar? <button onclick="checkAnswer(true)">Sí</button> <button onclick="checkAnswer(false)">No</button></p>
    `;
  }
  
  function checkAnswer(isDreaming) {
    if (isDreaming) {
      document.getElementById('test-questions').innerHTML = "<p>¡Parece que estás soñando! ¿Lo sabías?</p>";
    } else {
      document.getElementById('test-questions').innerHTML = "<p>Probablemente no estés soñando. ¡Sigue explorando!</p>";
    }
  }