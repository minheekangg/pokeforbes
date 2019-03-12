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
                <td>${this.id}</td>
                <td>${this.name}</td>
                <td>${this.weight}</td>
                <td>${this.height}</td>
                <td>${this.type}</td>
                </tr>`
    }



}
Pokemon.all = []