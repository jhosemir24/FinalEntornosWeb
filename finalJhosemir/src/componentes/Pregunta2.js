
function agregarCero(numero) {
    return numero < 10 ? '0' + numero : numero;
}

function actualizarTiempo() {
    const ahora = new Date();
    const horas = agregarCero(ahora.getHours());
    const minutos = agregarCero(ahora.getMinutes());
    const segundos = agregarCero(ahora.getSeconds());
    const dia = agregarCero(ahora.getDate());
    const mes = agregarCero(ahora.getMonth() + 1); // Los meses empiezan desde 0
    const año = ahora.getFullYear();

    const tiempoActual = `${horas}:${minutos}:${segundos}`;
    const fechaActual = `${dia}/${mes}/${año}`;

    document.getElementById('fecha').innerText = `Fecha: ${fechaActual}`;
    document.getElementById('tiempo').innerText = `Hora: ${tiempoActual}`;
}

setInterval(actualizarTiempo, 1000);
actualizarTiempo();