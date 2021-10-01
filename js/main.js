let pokemon1, pokemon2;
let name1, name2;

function duelo(){
    let aleatorio = Math.round(Math.random()*(100-1)+parseInt(1));;
    let aleatorio2 = Math.round(Math.random()*(100-2)+parseInt(1));;
    pokemon1 = document.getElementById("duelo1");
    name1 = document.getElementById("duelo1p");
    pokemon2 = document.getElementById("duelo2");
    name2 = document.getElementById("duelo2p");
    traerDatos(pokemon1,name1,aleatorio);
    traerDatos(pokemon2,name2,aleatorio2);
}

function traerDatos(contenedor,nombre,id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
      contenedor.src = data.sprites.front_default;
      nombre.innerHTML = data.name;
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

    traerDatos(pokemon1,name1,aleatoriot);
    traerDatos(pokemon2,name2,aleatoriot2);
    traerDatos(pokemon3,name3,aleatoriot3);
    traerDatos(pokemon4,name4,aleatoriot4);

}