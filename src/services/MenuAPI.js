import axios from "axios";

class MenuAPI{
    
    getAllMenus(){
        console.log("getAllMenus called")
        return axios.get(`http://localhost:9002/menu`)
    }

    menuByCuisine(cuisineid){
        console.log("menuByCuisine called")
        return axios.get(`http://localhost:9002/menu/cuisine/${cuisineid}`)
    }

    menuById(id){
        console.log("menuById called")
        return axios.get(`http://localhost:9002/menu/${id}`)
    }

    addMenu(menuDetails){
        console.log("addmenu called")
        return axios.post(`http://localhost:9002/menu`,menuDetails)
    }

    deleteMenu(id){
        console.log("deleteMenu called")
        return axios.delete(`http://localhost:9002/menu/${id}`)
    }

}export default new MenuAPI();