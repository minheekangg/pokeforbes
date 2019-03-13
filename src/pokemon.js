class Pokemon{
    constructor(pokeData){
        this.id = pokeData.id
        this.name = pokeData.name
        this.weight = pokeData.weight
        this.weight = pokeData.weight
        this.height = pokeData.height
        this.type = pokeData.types
        Pokemon.all.push(this)
    }

    static renderAllPokemon(){
        return Pokemon.all.map(eachPoke=>{
            return eachPoke.render()
        }).join('')
    }

    static renderFilterPokemonByWeight(){
        console.log(Pokemon.all)
        let sortedByWeight = Pokemon.all.sort((a, b) => { return b.weight - a.weight})
        console.log(sortedByWeight)
        return sortedByWeight.map(eachPoke => {
            return eachPoke.render()
        }).join('')
    }
    static renderFilterPokemonByHeight(){
        let sortedByHeight = Pokemon.all.sort((a, b) => { return b.height - a.height })
        // console.log(sortedByHeight);
        return sortedByHeight.map(eachPoke => {
            return eachPoke.render()
        }).join('')
    }
    static renderFilterPokemonById(){
        let sortedById = Pokemon.all.sort((a, b) => { b.id - a.id })
        console.log(sortedById)
        return sortedById.map(eachPoke => {
            return eachPoke.render()
        }).join('')
    }

    render(){
        return `<tr>
                <td>${this.id}</td>
                <td>${this.name}</td>
                <td>${this.weight}</td>
                <td>${this.height}</td>
                <td>${this.type}</td>
                </tr>`
    }



}
Pokemon.all = []