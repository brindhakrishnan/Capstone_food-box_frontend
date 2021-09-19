import axios from "axios";

class MenuAPI{

    menuByCuisine(cuisineid){
        console.log("menuByCuisine called")
        return axios.get(`http://localhost:9002/menu/cuisine/${cuisineid}`)
    }

    menuById(id){
        console.log("menuById called")
        return axios.get(`http://localhost:9002/menu/${id}`)
    }

}export default new MenuAPI();