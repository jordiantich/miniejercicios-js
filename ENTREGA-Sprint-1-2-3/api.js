fetch("https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019")
    .then(res => res.json())
    .then(data => console.log(data))