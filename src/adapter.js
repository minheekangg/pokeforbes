class JSONAPIAdapter{
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getAll(){
        return fetch(this.endpoint, {method:'GET'})
    }


}