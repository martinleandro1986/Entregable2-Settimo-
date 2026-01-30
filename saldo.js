let saldo =980000;
let tipoDeCambio=1475;
const montoPrestamo="$250.000  plazo:6 años 38% T.N.A";
 


class comprarDolares {
    constructor(monto){
        this.monto=monto;
        this.euquivalente=this.calcularEquivalente();
    }
    calcularEquivalente(){
        return this.monto/tipoDeCambio;
    }
}

let nuevaConversion=[];

function convertir(){

let montoIngresado=Number(document.getElementById("cantidadPesos").value);


let conversorCreado=new comprarDolares(montoIngresado);

nuevaConversion.push(conversorCreado);
document.getElementById("mensaje").textContent="Usted ha comprado la cantidad de "+ conversorCreado.euquivalente.toFixed(2) +"dólares";

}


