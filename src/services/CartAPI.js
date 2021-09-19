
import axios from "axios";

class CartAPI {
    GetCartByEmail(email) {
        console.log("GetCartByEmail called")
        return axios.get(`http://localhost:9002/cart/${email}`)

    }

    addToCart(cartDetails) {
        console.log("addToCart called")
        return axios.post(`http://localhost:9002/cart`, cartDetails)

    }

    deleteCart(email) {
        console.log("deleteCart called")
        return axios.delete(`http://localhost:9002/cart/${email}`)

    }
} export default new CartAPI();