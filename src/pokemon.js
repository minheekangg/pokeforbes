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

    render(){
        return `<tr>
                <th>${this.id}</th>
                <th>${this.name}</th>
                <th>${this.weight}</th>
                <th>${this.height}</th>
                <th>${this.type}</th>
                </tr>`
    }



}
Pokemon.all = []