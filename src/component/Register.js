import React from 'react'
import './signin.css'

export default function Register() {
    return (
        <div className="div-signin">
            <form className="form-register">

                <h1 className="h4 mb-3 font-weight-normal">Please enter your details</h1>
                <div className="container">
                    <div className="row form-group">
                        <div className="col-2">
                            <label htmlFor="FirstName" className="col-form-label">First Name</label>
                        </div>
                        <div className="col-4">
                            <input type="text" id="FirstName" className="form-control" placeholder="First Name" required autofocus />
                        </div>
                        <div className="col-2">
                            <label htmlFor="LastName" className="col-form-label">Last Name</label>
                        </div>
                        <div className="col-4">
                            <input type="text" id="LastName" className="form-control" placeholder="Last Name" required autofocus />
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="col-2">
                            <label htmlFor="inputEmail" className="col-form-label">Email address</label>
                        </div>
                        <div className="col-4">
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                        </div>
                        <div className="col-2">
                            <label htmlFor="Mobile" className="col-form-label">Mobile Number</label>
                        </div>
                        <div className="col-4">
                            <input type="text" id="Mobile" className="form-control" placeholder="Mobile Number" required autofocus />
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="col-2">
                            <label htmlFor="inputPassword" className="col-form-label">Password</label>
                        </div>
                        <div className="col-4">
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        </div>
                        <div className="col-2">
                            <label htmlFor="confirmPassword" className="col-form-label">Confirm Password</label>
                        </div>
                        <div className="col-4">
                            <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm Password" required />
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
