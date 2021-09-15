import React from 'react';
import RegistrationForm from './RegistrationForm';
import { addUser } from '../services/RegisterAPI';


class Register extends React.Component {

    constructor() {
        super();

        this.state = {
            user: []
        };
    }//constructor

    // register new user
    handleRegistration = (user) => {
        addUser(user).then((newUser) => {
            console.log(newUser);
            this.setState((prevSate) => {
                return { user: [...prevSate.user, newUser] }
            });
        }).catch((error) => {
            console.log("User registration failed !");
            console.log("Error", error);
        });
    }

    renderForm() {
        return (
            <RegistrationForm onRegister={this.handleRegistration} />
        )
    }

    render() {
        return (
            <div className="row" >
                {this.renderForm()}
                {/* {this.renderPosts()} */}
            </div>
        )
    }


}//Register

export default Register;