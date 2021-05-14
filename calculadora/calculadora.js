var result;


function asignarValor(){
    primernum = parseFloat(document.getElementById("numero1").value);
    segundonum = parseFloat(document.getElementById("numero2").value);
}

function operar(operacion){

    asignarValor();

    switch(operacion){
        case 1:
            result = primernum + segundonum;
            document.getElementById("operacion").innerHTML= "+";
            break;
        case 2:
            result = primernum - segundonum;
            document.getElementById("operacion").innerHTML= "-";
            break;
        case 3:
            result = primernum * segundonum;
            document.getElementById("operacion").innerHTML= "*";
            break;
        case 4:
            result = primernum / segundonum;
            document.getElementById("operacion").innerHTML= "%";
            break;
        case 5:
            document.getElementById("numero1").value = 0;
            document.getElementById("numero2").value = 0;
            document.getElementById("resultado").innerHTML = "";
            document.getElementById("operacion").innerHTML= "";
            break;
        case 6:
            document.getElementById("resultado").innerHTML= result;
            break;
    }

    
}

function introducirNumeros(valor){

    document.getElementById("numero1").value = valor;


    for(var i; i<=0; i++){
        return valor += i;
    }

}

