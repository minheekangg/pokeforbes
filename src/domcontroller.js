class DOMController {
  constructor() {
    this.tableDiv = document.querySelector("table");
    this.filterButton = document.querySelector("#poke-filter");
    this.filterButton.addEventListener("click", this.handleFilterButtonClick);
    
  }

  appendAllPokemons(htmlString) {
      this.tableDiv.innerHTML = `<tr><th>Id</th>
          <th>Name</th>
          <th>Weight</th>
          <th>Height</th>
          <th>Type</th>${htmlString}</tr>`;
  }
  handleFilterButtonClick(e){
      console.log(e.target.innerHTML);
      switch (e.target.innerHTML){
        case "Heaviest":
              document.querySelector(
                "table"
              ).innerHTML = `<tr><th>Id</th>
                  <th>Name</th>
                  <th>Weight</th>
                  <th>Height</th>
                  <th>Type</th>${Pokemon.renderFilterPokemonByWeight()}</tr>`;
        break;
        case "Tallest":
              document.querySelector(
                "table"
              ).innerHTML = `<tr><th>Id</th>
                  <th>Name</th>
                  <th>Weight</th>
                  <th>Height</th>
                  <th>Type</th>${Pokemon.renderFilterPokemonByHeight()}</tr>`;
        break;
        // case "Type":
        //     document.querySelector('#type-button').style.display = "block";
        // break;
        case "Id":
              document.querySelector(
                  "table"
              ).innerHTML = `<tr><th>Id</th>
                  <th>Name</th>
                  <th>Weight</th>
                  <th>Height</th>
                  <th>Type</th>${Pokemon.renderFilterPokemonById()}</tr>`;
        break;
    }
  }
}