import axios from "axios";

class CuisineAPI{

    getAllCuisines(){
        console.log("getAllCuisines called")
        return axios.get('http://localhost:9002/cuisine')
    }

    addCuisine(cuisineDetails){
        console.log("addCuisine called")
        return axios.post('http://localhost:9002/cuisine',cuisineDetails)
    }

    deleteCuisine(id){
        console.log("deleteCuisine called")
        return axios.delete(`http://localhost:9002/cuisine/${id}`)
    }

}

export default new CuisineAPI();