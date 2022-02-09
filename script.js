let formulario = document.getElementById("formulario-contato")


function chameOAbacate() {
    if (formulario.className === "form") {

        formulario.className = "mostrar-formulario"
    } else {
        formulario.className = "form"
    }
    
}



