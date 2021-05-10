function oscuro() {
    var body = document.body
    body.classList.toggle("oscuro")
}

function mostrarSchool (bloque) {
    var bloqueSchool = document.getElementsByClassName(bloque)
    for(var i = 0; i<bloqueSchool.length; i++) {
        bloqueSchool[i].style.display = 'block'
    }
}

function ocultarSchool (bloque) {
    var bloqueSchool = document.getElementsByClassName(bloque)
    for(var i = 0; i<bloqueSchool.length; i++) {
        bloqueSchool[i].style.display = 'none'
    }
}
