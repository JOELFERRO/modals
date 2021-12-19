/*Creamos las variables de las class del html para manipularlas*/ 

//Variables REGISTRO MODAL
let abrir = document.querySelectorAll(".cta")[0];
let cerrar = document.querySelectorAll(".close")[0];
let modalC = document.querySelectorAll(".modal-container")[0];
let modal = document.querySelectorAll(".modal")[0];

//Variables LOGIN MODAL
let login = document.querySelectorAll(".login")[0];
let cerrarL = document.querySelectorAll(".close-login")[0];
let modalL = document.querySelectorAll(".modal-login")[0];
let modalLogin = document.querySelectorAll(".modalLogin")[0];

            //REGISTRO MODAL

/*Este método hace que a través de la variable abrir, que corresponde a la clase de html,
el modal se pueda visualizar.*/             
abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close"); /*toggle hace que cada vez que se seleccione el boton de modal va a activar  la clase modal-close*/    
});
/*Este método hace que al cerrar el modal a través del  boton X, se oculte en la posición que establece el css.*/
cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },500)
});
/*Este método hace que cada click fuera del modal cierre u oculte al mismo.*/
window.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target == modalC){
        modal.classList.toggle("modal-close");
        
        setTimeout(function(){
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        },400)
    }
});

            //LOGIN MODAL 

login.addEventListener("click", function(e){
    e.preventDefault();
    modalL.style.opacity = "1";
    modalL.style.visibility = "visible";
    modalLogin.classList.toggle("modal-close-login"); /*toggle hace que cada vez que se seleccione el boton de modal va a activar  la clase modal-close*/    
});

cerrarL.addEventListener("click", function(){
    modalLogin.classList.toggle("modal-close-login");
    
    setTimeout(function(){
        modalL.style.opacity = "0";
        modalL.style.visibility = "hidden";
    },400)
});

window.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target == modalL){
        modalLogin.classList.toggle("modal-close-login");
        
        setTimeout(function(){
            modalL.style.opacity = "0";
            modalL.style.visibility = "hidden";
        },400)
    }
});