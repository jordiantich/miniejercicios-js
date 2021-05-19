// FETCH POKEMON LOCAL Y EXTERNO

/*const $pokemon = document.querySelector("#pokemon");

function renderPokemon(image){
    $pokemon.setAttribute('src', image);
}


fetch('pokemon.json')
    .then(response => response.json())
    .then(data => {
        renderPokemon(data.image);
    });



fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
     .then(response => response.json())
     .then(informacion =>{
        renderPokemon(informacion.sprites.front_female);
     });*/


let texto = document.querySelector("#apitext");



fetch("https://reqres.in/api/users/2")
     .then(response =>response.json())
     .then(data=> texto.innerHTML = data.data.email)
     .catch(error=> alert("ERROR, NOT FOUND"));