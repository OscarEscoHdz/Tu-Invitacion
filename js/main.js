// Definimos la fecha del evento (Año, Mes (0-11, donde 0 es Enero), Día, Hora, Minuto)
// Ejemplo: 1 de Agosto de 2026 a las 19:00 hrs
const fechaEvento = new Date(2026, 9, 1, 19, 0, 0).getTime();

const intervalo = setInterval(function() {
    const ahora = new Date().getTime();
    const distancia = fechaEvento - ahora;

    // Cálculos matemáticos para días, horas, minutos y segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Inyectamos los resultados en el HTML, añadiendo un '0' si es menor a 10
    document.getElementById("dias").innerText = dias < 10 ? "0" + dias : dias;
    document.getElementById("horas").innerText = horas < 10 ? "0" + horas : horas;
    document.getElementById("minutos").innerText = minutos < 10 ? "0" + minutos : minutos;
    document.getElementById("segundos").innerText = segundos < 10 ? "0" + segundos : segundos;

    // Si la fecha ya pasó, detenemos el contador y mostramos un mensaje
    if (distancia < 0) {
        clearInterval(intervalo);
        document.getElementById("contador").innerHTML = "<h3>¡El gran día ha llegado!</h3>";
    }
}, 1000);

// === LÓGICA DEL REPRODUCTOR DE MÚSICA ===
const musica = document.getElementById("musicaFondo");
const btnPlayPause = document.getElementById("btnPlayPause");

btnPlayPause.addEventListener("click", function() {
    if (musica.paused) {
        musica.play();
        btnPlayPause.innerHTML = "⏸️ Pausar"; // Cambia el texto e ícono
    } else {
        musica.pause();
        btnPlayPause.innerHTML = "▶️ Reproducir";
    }
});