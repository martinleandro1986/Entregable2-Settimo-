let saldo =980000;
let tipoDeCambio=1475;
const montoPrestamo="$250.000  plazo:6 años 38% T.N.A"
 
function comprarDolares(){
    let montoIngresado =document.getElementById("dolares").value;
    const equivalente=montoIngresado/tipoDeCambio;
    if(montoIngresado>=saldo) {




