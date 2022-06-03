function muestra_oculta(id) {
    if (document.getElementById) {
        var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
    }
}
window.onload = function() {
    muestra_oculta('contenido');
}

let boton = document.getElementById('ver-menos');

let contador = 0

function ver_menos() {
    contador++
    if (contador > 1) {
        contador = 0
    }

    if (contador === 0) {
        boton.innerHTML = 'Ver más'
    } else {
        boton.innerHTML = 'Ver menos'
    }
}

function cartel(contenido) {
    ver_menos();
    muestra_oculta(contenido);
}