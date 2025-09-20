// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "If you ever find yourself stuck in the middle of the sea", time: 5 },
  { text: "I'll sail the world to find you", time: 11 },
  { text: "If you ever find yourslef lost in the dark and you can't see", time: 16 },
  { text: "I'll be light to guide you", time: 21 },
  { text: "We find out what we're made of", time: 28 },
  { text: "When we are called to help our friends in need", time: 32 },
  { text: "You can count on me like one, two, three, I'll be there", time: 37 },
  { text: "And I know when I need it", time: 46 },
  { text: "I can count on you like four, three, two, and you'll be there", time: 48 },
  { text: "Cause that's what friends are supposed to do, oh, yeah", time: 56 },
  { text: "Ooh, ooh", time: 60 },
  { text: "Ooh, ooh, yeah, yeah", time: 64 },
  { text: "If you're tossing and you're turning and you just can't fall asleep", time: 70 },
  { text: "I'll sing a song beside you", time: 75 },
  { text: "And if you ever forget how much you really mean to me", time: 81 },
  { text: "Everyday I will remind you, oh", time: 86 },
  { text: "We find out what we're made of", time: 93 },
  { text: "When we are called to help our friends in need", time: 97 },
  { text: "You can count on me like one, two, three, I'll be there", time: 102 },
  { text: "And I know when I need it", time: 110 },
  { text: "I can count on you like four, three, two, and you'll be there ", time: 113 },
  { text: "Cause that's what friends arew supposed to do, oh, yeah", time: 121 },
  { text: "Ooh, ooh", time: 126 },
  { text: "Ooh, ooh, yeah, yeah", time: 128 },
  { text: "You'll alaways have my shoulder when you cry", time: 135 },
  { text: "I'll never let go, never say goodbye", time: 145 },
  { text: "You know you can ", time: 153 },
  { text: "Count on me like one, two, three, I'll be there", time: 156 },
  { text: "And I know when I need it ", time: 164 },
  { text: "I can count on you like four, three, two, and you'll be there", time: 167 },
  { text: "Cause that's what friends are supposed to do, oh, yeah", time: 175 },
]

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