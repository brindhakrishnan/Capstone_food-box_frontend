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

    addUser(userdetails){
        console.log("addUser called")
        return axios.post(`http://localhost:9002/users/`, userdetails)
        
    }

    deleteUser(email){
        console.log("deleteUser called")
        return axios.delete(`http://localhost:9002/users/${email}`)
        
    }

    updateUser(email, userdetails){
        console.log("updateUser called")
        console.log(userdetails)
        return axios.put(`http://localhost:9002/users/${email}`, userdetails)
        
    }
}
export default new UserAPI();