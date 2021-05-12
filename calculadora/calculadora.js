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
            document.getElementById("numero1").innerHTML= 0;
            document.getElementById("numero2").innerHTML= 0;
            break;
        case 6:
            document.getElementById("resultado").innerHTML= result;
            break;
    }

    
}


