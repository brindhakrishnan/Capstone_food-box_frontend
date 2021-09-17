import axios from "axios";


class UserAPI{

    executeUserAPI(){
        console.log("executeUserAPI called")
        return axios.get('http://localhost:9002/users/')
        
    }

    executeUserByEmail(email){
        console.log("executeUserByEmail called")
        return axios.get(`http://localhost:9002/users/${email}`)
        
    }
}
export default new UserAPI();