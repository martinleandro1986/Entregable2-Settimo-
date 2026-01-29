const tasa= 30

class PlazoFijo {
    constructor(monto,plazo){
        this.monto=monto;
        this.plazo=plazo;
        this.intereses=this.calcularIntereses();
    }
    calcularIntereses(){
        return (this.monto*tasa*this.plazo)/36500;
    }
}

let nuevoPlazoFijo=[];

function calcular(){

let montoIngresado=Number(document.getElementById("monto").value);
let plazoIngresado=Number(document.getElementById("plazo").value);

let plazoFijoCreado=new PlazoFijo(montoIngresado,plazoIngresado);

nuevoPlazoFijo.push(plazoFijoCreado);
document.getElementById("resultado").textContent="Interés que ganarias $"+plazoFijoCreado.intereses.toFixed(2);

}



