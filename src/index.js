document.addEventListener('DOMContentLoaded', ()=>{
    console.log('loaded')
    const domController = new DOMController;
    const pokeAdapter = new JSONAPIAdapter('http://localhost:3000/pokemon')
    pokeAdapter.getAll()
        .then(response => {
            if (response.ok){
                return response.json()
            }
        })
        .then(pokemonData => {
            console.log(pokemonData)
            pokemonData.forEach(singlePoke=>{
                new Pokemon(singlePoke)
                domController.appendAllPokemons(Pokemon.renderAllPokemon())
            })
        })

    // domController.appendAllPokemons(Pokemon.renderFilterPokemonByHeight());
    // domController.appendAllPokemons(Pokemon.renderFilterPokemonByWeight());
    // domController.appendAllPokemons(Pokemon.renderFilterPokemonByType());



    

})