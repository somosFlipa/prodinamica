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

function ver_menos(idioma) {
    contador++
    if (contador > 1) {
        contador = 0
    }
if(idioma==='es'){
    if (contador === 0) {
        boton.innerHTML = 'Ver más'
    } else {
        boton.innerHTML = 'Ver menos'
    }
} 
else if(idioma==='en'){

    if (contador === 0) {
        boton.innerHTML = 'See More'
    } else {
        boton.innerHTML = 'See Less'
    }
}
}

function cartel(contenido, idioma) {
    ver_menos(idioma);
    muestra_oculta(contenido);
}