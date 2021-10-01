let pokemon1, pokemon2;
let name1, name2;
let altura1, altura2;
let peso1, peso2;

function duelo(){
    let aleatorio = Math.round(Math.random()*(100-1)+parseInt(1));;
    let aleatorio2 = Math.round(Math.random()*(100-2)+parseInt(1));;
    pokemon1 = document.getElementById("duelo1");
    name1 = document.getElementById("duelo1p");
    pokemon2 = document.getElementById("duelo2");
    name2 = document.getElementById("duelo2p");
    altura1 = document.getElementById("dueloal");
    altura2 = document.getElementById("dueloal2");
    peso1 = document.getElementById("duelope");
    peso2 = document.getElementById("duelope2");
    traerDatos(pokemon1,name1,altura1,peso1,aleatorio);
    traerDatos(pokemon2,name2,altura2,peso2,aleatorio2);
}

function traerDatos(contenedor,nombre,altura,peso,id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
      contenedor.src = data.sprites.front_default;
      nombre.innerHTML = data.name;
      altura.innerHTML = "altura: " + data.height;
      peso.innerHTML = "peso: " + data.weight;
     })
}

function equipo(){
    let aleatoriot = Math.round(Math.random()*(100-1)+parseInt(1));;
    let aleatoriot2 = Math.round(Math.random()*(100-2)+parseInt(1));;
    let aleatoriot3 = Math.round(Math.random()*(100-3)+parseInt(1));;
    let aleatoriot4 = Math.round(Math.random()*(100-4)+parseInt(1));;

    pokemon1 = document.getElementById("team1");
    pokemon2 = document.getElementById("team2");
    pokemon3 = document.getElementById("team3");
    pokemon4 = document.getElementById("team4");

    name1 = document.getElementById("team1p");
    name2 = document.getElementById("team2p");
    name3 = document.getElementById("team3p");
    name4 = document.getElementById("team4p");

    peso1 = document.getElementById("teampe1");
    peso2 = document.getElementById("teampe2");
    peso3 = document.getElementById("teampe3");
    peso4 = document.getElementById("teampe4");

    altura1 = document.getElementById("teamal1");
    altura2 = document.getElementById("teamal2");
    altura3 = document.getElementById("teamal3");
    altura4 = document.getElementById("teamal4");

    traerDatos(pokemon1,name1,altura1,peso1,aleatoriot);
    traerDatos(pokemon2,name2,altura2,peso2,aleatoriot2);
    traerDatos(pokemon3,name3,altura3,peso3,aleatoriot3);
    traerDatos(pokemon4,name4,altura4,peso4,aleatoriot4);

}