import axios from "axios";

class OrderAPI{

    GetOrdersByEmail(email) {
        console.log("GetOrdersByEmail called")
        return axios.get(`http://localhost:9002/${email}/orders`)

    }

    createOrder(email, order) {
        console.log("addToCart called")
        return axios.post(`http://localhost:9002/${email}/orders`, order)

    }

}

export default new OrderAPI();
