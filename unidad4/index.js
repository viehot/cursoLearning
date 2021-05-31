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
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()