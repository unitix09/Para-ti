document.addEventListener("DOMContentLoaded", () => {
    const btnComenzar = document.getElementById("btn-comenzar");
    const pantallaInicio = document.getElementById("pantalla-inicio");
    const pantallaSobre = document.getElementById("pantalla-sobre");
    const pantallaJardin = document.getElementById("pantalla-jardin");
    const envelope = document.getElementById("envelope");
    const musica = document.getElementById("musica");

    // Transición de Inicio al Sobre
    btnComenzar.addEventListener("click", () => {
        if (musica) {
            musica.play().catch(e => console.log("Audio deshabilitado:", e));
        }

        pantallaInicio.classList.remove("activa");
        pantallaInicio.classList.add("oculta");

        setTimeout(() => {
            pantallaSobre.classList.remove("oculta");
            pantallaSobre.classList.add("activa");
        }, 400);
    });

    // Transición del Sobre al Jardín
    envelope.addEventListener("click", () => {
        envelope.classList.add("open");

        // Permite 4.5 segundos de visualización de la carta antes de pasar a las flores
        setTimeout(() => {
            pantallaSobre.classList.remove("activa");
            pantallaSobre.classList.add("oculta");

            setTimeout(() => {
                pantallaJardin.classList.remove("oculta");
                pantallaJardin.classList.add("activa");
            }, 400);
        }, 20000);
    });
});