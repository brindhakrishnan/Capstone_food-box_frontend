const apiURL = 'http://localhost:9002/users';

//Register or create a new user
export const addUser = (user)=> {
    const headers = {'Content-Type':'application/json'};
    const body = JSON.stringify(user);
    return fetch(apiURL,{method:'POST',headers:headers,body:body}).then((response)=>{
        return response.json();
    });
};