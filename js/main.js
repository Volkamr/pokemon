let pokemon1, pokemon2;
let name1, name2;
let ataque1, ataque2;
let defensa1, defesensa2;

function duelo(){
    let aleatorio = Math.round(Math.random()*(100-1)+parseInt(1));;
    let aleatorio2 = Math.round(Math.random()*(100-2)+parseInt(1));;
    pokemon1 = document.getElementById("duelo1");
    name1 = document.getElementById("duelo1p");
    pokemon2 = document.getElementById("duelo2");
    name2 = document.getElementById("duelo2p");
    ataque1 = document.getElementById("dueloa");
    ataque2 = document.getElementById("dueloa2");
    defensa1 = document.getElementById("duelod");
    defensa2 = document.getElementById("duelod2");
    traerDatos(pokemon1,name1,ataque1,defensa1,aleatorio);
    traerDatos(pokemon2,name2,ataque2,defensa2,aleatorio2);
}

function traerDatos(contenedor,nombre,ataque,defensa,id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
      contenedor.src = data.sprites.front_default;
      nombre.innerHTML = data.name;
      ataque.innerHTML = "Attack: " + data.stats[1].base_stat;
      defensa.innerHTML = "Defense: " + data.stats[2].base_stat;
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

    ataque1 = document.getElementById("teama1");
    ataque2 = document.getElementById("teama2");
    ataque3 = document.getElementById("teama3");
    ataque4 = document.getElementById("teama4");

    defensa1 = document.getElementById("teamd1");
    defensa2 = document.getElementById("teamd2");
    defensa3 = document.getElementById("teamd3");
    defensa4 = document.getElementById("teamd4");

    traerDatos(pokemon1,name1,ataque1,defensa1,aleatoriot);
    traerDatos(pokemon2,name2,ataque2,defensa2,aleatoriot2);
    traerDatos(pokemon3,name3,ataque3,defensa3,aleatoriot3);
    traerDatos(pokemon4,name4,ataque4,defensa4,aleatoriot4);

}

let imagen, nombre, vida, ataque, defensa, ataquee, defensae, velocidad;

function poketotal(){

    imagen = document.getElementById("pokecomp");
    nombre = document.getElementById("nombre");
    vida = document.getElementById("vida");
    ataque = document.getElementById("ataque");
    defensa = document.getElementById("defensa");
    ataquee = document.getElementById("ataque especial");
    defensae = document.getElementById("defensa especial");
    velocidad = document.getElementById("velocidad");
    id = Math.round(Math.random()*(100-5)+parseInt(1));

    estado(imagen,vida,ataque,defensa,ataquee,defensae,velocidad,id);

}

function estado(imagen,vida,ataque,defensa,ataquee,defensae,velocidad,id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
      nombre.innerHTML = data.name;
      imagen.src = data.sprites.front_default;
      vida.innerHTML = "Hp: " + data.stats[0].base_stat;
      ataque.innerHTML = "Attack: " + data.stats[1].base_stat;
      defensa.innerHTML = "Defense: " + data.stats[2].base_stat;
      ataquee.innerHTML = "Special Attack: " + data.stats[3].base_stat;
      defensae.innerHTML = "Special Defense" + data.stats[4].base_stat;
      velocidad.innerHTML = "Speed: " + data.stats[5].base_stat;
     })
}