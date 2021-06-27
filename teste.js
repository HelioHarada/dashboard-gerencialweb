// Só precisa add div com .pokemon

async function getPokemon(str){
    let name = str.toLowerCase();
    $('.pokemon').empty();
    let res = await fetch('https://pokeapi.co/api/v2/pokemon/'+name);
    let pokemon = await res.json();
    console.log(pokemon)
    let imgback = pokemon.sprites.back_default;
    let imgfront = pokemon.sprites.front_default;

    let img = pokemon.sprites;
    let imgVersion = img.versions['generation-vi'];



    let imgV5 = imgVersion['omegaruby-alphasapphire'].front_default
    $('.pokemon').append('<h1 align="center">'+pokemon.name+'</h1>')
    $('.pokemon').append(`<img src="${imgback}" />`)
    $('.pokemon').append(`<img src="${imgfront}" />`)
    $('.pokemon').append(`<h2>${pokemon.name}<h2>`)
    
    // Percorrer array
    let typesArray = pokemon.types

    typesArray.map(function(item, index){
        
        console.log(item.type.url)
        $('.pokemon').append(`<p>${item.type.name}<p>`)
    })

}

getPokemon('gengar');

$('#getPokemon').click(function(){
   console.log( $('#value').val())
   getPokemon($('#value').val())
})