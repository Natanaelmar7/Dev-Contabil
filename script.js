let formulario = document.getElementById("formulario-contato")

const menuList = document.getElementById("menu-list")
    menuList.style.maxHeight = "0" 
    
    function showMenu(){
       if(menuList.style.maxHeight == "0px"){
         menuList.style.maxHeight = "120px"
       } else{
       menuList.style.maxHeight = "0px" 
       }
    }


function chameOAbacate() {
    if (formulario.className === "form") {

        formulario.className = "mostrar-formulario"
    } else {
        formulario.className = "form"
    }
    
}



