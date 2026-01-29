function validar (){
    let usuarioIngresado =document.getElementById("usuario").value;

    let usuarioCorrecto ="martin86";



if(usuarioIngresado===usuarioCorrecto) {
    window.location.href = "pagina2.html" ;
} else {
    document.getElementById("mensaje").textContent ="El usuario no existe";
}
}
