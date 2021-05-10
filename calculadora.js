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
            break;
        case 2:
            result = primernum - segundonum;
            break;
        case 3:
            result = primernum * segundonum;
            break;
        case 4:
            result = priemrnum / segundonum;
            break;
    }

    document.getElementById("resultado").innerHTML= "El resultado es: "+ result; 
}


