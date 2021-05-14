
const formCercador = document.querySelector('#form-cercador');
const cerca = document.querySelector('#cercador');



formCercador.addEventListener('submit', validatorCerca);


function validatorCerca(event) {
    event.preventDefault();
    
    const feedback = formCercador.querySelector(".feedback");

    if(cerca.value.length < 3){
        cerca.classList.add('is-invalid');
        feedback.classList.add('invalid-feedback');
        if(!cerca.value.length){
            feedback.innerText = "Por favor introduce una búsqueda."; 
            
        }else{
            feedback.innerText = "Por favor introduce una búsqueda mayor a 3 carácteres.";
        }
        

    }else{
        cerca.classList.remove('is-invalid');
        feedback.classList.remove('invalid-feedback');

    }


}