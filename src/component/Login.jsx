import React, { Component } from 'react'
import './signin.css'

export default class Login extends Component {

    //constructor
    constructor(props) {
        super(props);
        this.state = { inputEmail: '', inputPassword: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    //handle change
    handleChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        this.setState({ [fieldName]: fieldValue });
        console.log(this.state);
    }

    //events handler
    handleFormSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        if (this.state.inputEmail === "jane.doe@gmail.com" && this.state.inputPassword === "welcomejane") {
        //    this.props.history.push(`/cuisine/${this.state.inputEmail}`);
            this.props.history.push("/cuisine");
        }

    }

    render() {
        return (
            <div className="div-signin">
                <form className="form-signin" onSubmit={this.handleFormSubmit} >

                    <h1 className="h4 mb-3 font-weight-normal">Please login</h1>
                    <div className="container">
                        <div className="row form-group">
                            <label for="inputEmail" className="sr-only">Email address</label>
                            <input type="email" id="inputEmail" name="inputEmail" className="form-control" placeholder="Email address" required autofocus onChange={this.handleChange} value={this.state.inputEmail} />
                        </div>
                        <div className="row form-group">
                            <label for="inputPassword" className="sr-only">Password</label>
                            <input type="password" id="inputPassword" name="inputPassword" className="form-control" placeholder="Password" required onChange={this.handleChange} value={this.state.inputPassword} />
                        </div>
                        <div class="checkbox mb-2">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <div className="row justify-content-md-center">
                            <button className="btn btn-lg btn-primary" type="submit">Login</button>
                        </div>
                        <div className="row justify-content-md-center">
                            <p> New user? Register <a href="#">here</a></p>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}
