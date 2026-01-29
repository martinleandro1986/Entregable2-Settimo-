let intentos=3;

function validar (){
   
    let claveIngresada =document.getElementById("clave").value;

    let claveCorrecta="hendrix";



if(claveIngresada===claveCorrecta) {
    window.location.href = "pagina3.html" ;
} else {
    intentos--;
    if (intentos>0){
    document.getElementById("mensaje").textContent ="La clave es incorrecta , le quedan " + intentos + " oportunidades para ingresarla correctamente";

} else {
    document.getElementById("mensaje").textContent=
    "Su clave se encuentra bloqueada.Concurra a su Banco para solicitar desbloqueo de clave"
}
}
}
