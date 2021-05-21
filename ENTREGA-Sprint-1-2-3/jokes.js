let texto = document.getElementById("chiste");
let botonJoke = document.getElementById("generateJoke");
let d = new Date();
let ciudad = document.getElementById("ciudad");
let estado = document.getElementById("estado");
let precip = document.getElementById("precipitacion");
let temp = document.getElementById("temp");
let humedad = document.getElementById("humedad");
let winddir = document.getElementById("vientodireccion");
let windvel = document.getElementById("vientovelocidad");



document.getElementById("jornada").innerHTML = d;

fetch("https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019")
    .then(res => res.json())
    .then(data => {
        ciudad.innerHTML = data.municipio.NOMBRE
        estado.innerHTML = `Estado: <span>${data.stateSky.description}</span>`
        precip.innerHTML = `Precipitacion: <span>${data.pronostico.hoy.precipitacion["0"]}%</span>`
        temp.innerHTML = `Temperatura:<span>${data.pronostico.hoy.temperatura["14"]}º</span>`
        humedad.innerHTML = `Humedad: <span>${data.pronostico.hoy.humedad_relativa["14"]}%</span>`
        winddir.innerHTML = `Viento-dirección: <span>${data.pronostico.hoy.viento["14"].direccion}</span>`
        windvel.innerHTML = `Viento-velocidad: <span>${data.pronostico.hoy.viento["14"].velocidad}</span>`
    })
    .catch(error => alert("ERROR, API NOT FOUND"));
  



function generarJoke(){

    fetch('https://icanhazdadjoke.com/',
    {
        headers:{'Accept': 'application/json'}
    })
        .then(res => res.json())
        .then(data => texto.innerHTML = data.joke)
        .catch(error => ("ERROR, JOKE DON'T LOADED"));
}


botonJoke.addEventListener("click", generarJoke);








