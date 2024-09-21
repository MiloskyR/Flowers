// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    { text: "Amar puede doler", time: 15 },
    { text: "El amor puede doler a veces", time: 20 },
    { text: "Pero es lo único que sé", time: 25 },
    { text: "Cuando se pone difícil", time: 31 },
    { text: "Sabes, a veces se puede poner difícil", time: 35 },
    { text: "Es lo único que nos hace sentir vivos", time: 40 },
    { text: "Guardamos este amor en una fotografía", time: 45 },
    { text: "Hicimos estos recuerdos para nosotros mismos", time: 50 },
    { text: "Donde nuestros ojos nunca se cierran", time: 55 },
    { text: "Nuestros corazones nunca se rompen", time: 60 },
    { text: "Y el tiempo está congelado para siempre", time: 65 },
    { text: "Así que puedes llevarme", time: 70 },
    { text: "Dentro del bolsillo de tus jeans rasgados", time: 75 },
    { text: "Sostenerme cerca hasta que nuestros ojos se encuentren", time: 80 },
    { text: "Y jamás estarás sola", time: 85 },
    { text: "Espera a que vuelva a casa", time: 90 },
    { text: "El amor puede sanar", time: 95 },
    { text: "Amar puede reparar tu alma", time: 100 },
    { text: "Y es lo único que sé, sé", time: 105 },
    { text: "Te juro que será más fácil", time: 110 },
    { text: "Recuérdalo con cada pedazo de ti", time: 115 },
    { text: "Y es lo único que llevamos con nosotros cuando morimos", time: 120 },
    { text: "Guardamos este amor en esta fotografía", time: 125 },
    { text: "Hicimos estos recuerdos para nosotros mismos", time: 130 },
    { text: "Donde nuestros ojos nunca se cierran", time: 135 },
    { text: "Nuestros corazones nunca se rompen", time: 140 },
    { text: "Y el tiempo está congelado para siempre", time: 145 },
    { text: "Así que puedes llevarme", time: 150 },
    { text: "Dentro del bolsillo de tus jeans rasgados", time: 155 },
    { text: "Sostenerme cerca hasta que nuestros ojos se encuentren", time: 160 },
    { text: "Y jamás estarás sola", time: 165 },
    { text: "Y si me haces daño", time: 170 },
    { text: "Está bien, nena", time: 175 },
    { text: "Solo las palabras sangran", time: 180 },
    { text: "Dentro de estas páginas, solo me abrazas", time: 185 },
    { text: "Y nunca te dejaré ir", time: 190 },
    { text: "Espera a que vuelva a casa", time: 195 },
    { text: "Espera a que vuelva a casa", time: 200 },
    { text: "Espera a que vuelva a casa", time: 205 },
    { text: "Espera a que vuelva a casa", time: 210 },
    { text: "Y así podrías encajarme", time: 215 },
    { text: "Dentro del collar que tienes", time: 220 },
    { text: "Desde los dieciséis años", time: 225 },
    { text: "Al lado de tu latido, donde yo debería estar", time: 230 },
    { text: "Mantenlo en el fondo de tu alma", time: 235 },
    { text: "Y si me haces daño", time: 240 },
    { text: "Está bien, nena", time: 245 },
    { text: "Solo las palabras sangran", time: 250 },
    { text: "Dentro de estas páginas, solo me abrazas", time: 255 },
    { text: "Y nunca te dejaré ir", time: 260 },
    { text: "Cuando yo esté lejos", time: 265 },
    { text: "Recordaré cómo me besaste", time: 270 },
    { text: "Bajo el poste de luz, en la parte de atrás de la calle 6", time: 275 },
    { text: "Oyéndote susurrar a través del teléfono", time: 280 },
    { text: "Espera a que vuelva a casa", time: 285 },
    { text: "Y eso seria todo", time: 290 },
    { text: "Espero le guste", time: 295},
    { text: ":D", time: 300 },
    { text: ":)", time: 305 }
  ];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);