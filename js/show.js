function muestra_oculta(id){
    if (document.getElementById){ 
    var el = document.getElementById(id); 
    el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
    }
    }
    window.onload = function(){
    muestra_oculta('contenido');
    }

    let boton = document.getElementById('ver-menos');

    
    function ver_menos(){
        boton.innerHTML='Ver menos'
    }

    function cartel(contenido){
        ver_menos();
         muestra_oculta(contenido);
    }