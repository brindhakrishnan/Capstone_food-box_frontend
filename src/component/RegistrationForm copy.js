// import React from 'react';
import React, { Component } from 'react'
import './signin.css'
// import { addUser } from '../services/RegisterAPI';


export default class RegistrationForm2 extends Component {

    state = {
        firstName: '', lastName: '', inputEmail: '', mobile: '', inputPassword: '', confirmPassword: ''
    };
    
    //handle change
    handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.setState({ [fieldName]: fieldValue });
        console.log (this.state);
    }

    //events handler
    handleFormSubmit = (event) => {
        //create new user
        event.preventDefault();
        this.props.onRegister(this.state);
     }

    render() {
        return (
            <div className="div-signin">
                <form className="form-register" onSubmit={this.handleFormSubmit}>

                    <h1 className="h4 mb-3 font-weight-normal">Please enter your details</h1>
                    <div className="container">
                        <div className="row form-group">
                            <div className="col-2">
                                <label htmlFor="firstName" className="col-form-label">First Name</label>
                            </div>
                            <div className="col-4">
                                <input type="text" id="firstName" className="form-control" placeholder="First Name" required autofocus onChange={this.handleChange} value={this.state.firstName}/>
                            </div>
                            <div className="col-2">
                                <label htmlFor="lastName" className="col-form-label">Last Name</label>
                            </div>
                            <div className="col-4">
                                <input type="text" id="lastName" className="form-control" placeholder="Last Name" required onChange={this.handleChange} value={this.state.lastName}/>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-2">
                                <label htmlFor="inputEmail" className="col-form-label">Email address</label>
                            </div>
                            <div className="col-4">
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required onChange={this.handleChange}  value={this.state.inputEmail}/>
                            </div>
                            <div className="col-2">
                                <label htmlFor="mobile" className="col-form-label">Mobile Number</label>
                            </div>
                            <div className="col-4">
                                <input type="text" id="mobile" className="form-control" placeholder="Mobile Number" required onChange={this.handleChange}  value={this.state.mobile}/>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="col-2">
                                <label htmlFor="inputPassword" className="col-form-label">Password</label>
                            </div>
                            <div className="col-4">
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={this.handleChange}  value={this.state.inputPassword}/>
                            </div>
                            <div className="col-2">
                                <label htmlFor="confirmPassword" className="col-form-label">Confirm Password</label>
                            </div>
                            <div className="col-4">
                                <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm Password" required onChange={this.handleChange}  value={this.state.confirmPassword}/>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-4">
                                <button className="btn btn-lg btn-primary" type="submit">Register!</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
