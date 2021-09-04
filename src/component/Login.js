import React from 'react'
import './signin.css'

export default function Login() {
    return (
        <div className="div-signin">
            <form className="form-signin">

                <h1 className="h4 mb-3 font-weight-normal">Please login</h1>
                <div className="container">
                    <div className="row form-group">
                        <label for="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                    </div>
                    <div className="row form-group">
                        <label for="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
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
    )
}
