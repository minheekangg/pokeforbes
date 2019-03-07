class DOMController{
    constructor(){
        this.tableDiv = document.querySelector('table')
        console.log(this.tableDiv)
    }

    appendAllPokemons(htmlString){
        this.tableDiv.innerHTML += htmlString
    }
}