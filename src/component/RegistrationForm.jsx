//import React from 'react'
import React, { Component } from 'react'
import './signin.css'
import UserAPI from '../services/UserAPI'


export default class RegistrationForm extends Component {
  
    //constructor
    constructor(props){
        super(props);
        this.state = {
        id: '', firstname: '', lastname: '', email: '', phone: '', password: '', accountstatus:1
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    //handle change
    handleChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        this.setState({ [fieldName]: fieldValue });
        console.log (this.state);
    }

    //events handler
    handleFormSubmit = (event) => {
        //create new user
        console.log(this.state);
        event.preventDefault();
        // alert('it works!');
        UserAPI.addUser(this.state)
        .then(() => this.props.history.push('/login'))
        }
  


    render() {
        return (
            <div className="div-signin">
                <form className="form-register" onSubmit={this.handleFormSubmit}>

                    <h1 className="h4 mb-3 font-weight-normal">Please enter your details</h1>
                    <div className="container">
                        <div className="row form-group">
                            <div className="col-2">
                                <label htmlFor="firstname" className="col-form-label">First Name</label>
                            </div>
                            <div className="col-4">
                                <input type="text" id="firstname" name="firstname" className="form-control" placeholder="First Name" required autofocus onChange={this.handleChange} value={this.state.firstname}/>
                            </div>
                            <div className="col-2">
                                <label htmlFor="lastname" className="col-form-label">Last Name</label>
                            </div>
                            <div className="col-4">
                                <input type="text" id="lastname" name="lastname" className="form-control" placeholder="Last Name" required onChange={this.handleChange} value={this.state.lastname} />
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-2">
                                <label htmlFor="email" className="col-form-label">Email address</label>
                            </div>
                            <div className="col-4">
                                <input type="email" id="email" name="email" className="form-control" placeholder="Email address" required onChange={this.handleChange} value={this.state.email} />
                            </div>
                            <div className="col-2">
                                <label htmlFor="phone" className="col-form-label">Mobile Number</label>
                            </div>
                            <div className="col-4">
                                <input type="text" id="phone" name="phone" className="form-control" placeholder="phone Number" required onChange={this.handleChange}  value={this.state.phone} />
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-2">
                                <label htmlFor="password" className="col-form-label">Password</label>
                            </div>
                            <div className="col-4">
                                <input type="password" id="password" name="password" className="form-control" placeholder="Password" required onChange={this.handleChange} value={this.state.password} />
                            </div>
                            {/* <div className="col-2">
                                <label htmlFor="confirmPassword" className="col-form-label">Confirm Password</label>
                            </div>
                            <div className="col-4">
                                <input type="password" id="confirmPassword" name="confirmPassword" className="form-control" placeholder="Confirm Password" required onChange={this.handleChange} value={this.state.confirmPassword} />
                            </div> */}
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-4">
                                <button className="btn btn-lg btn-primary" type="submit">Register!</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
