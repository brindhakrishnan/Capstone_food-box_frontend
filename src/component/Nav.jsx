import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthenticationService from './AuthenticationService'

export default function Nav() {

    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    console.log("Value of isUserLoggedIn " + isUserLoggedIn)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">
                <img src="./FoodBox_logo2.png" width="350" height="75" alt="" />
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/" exact>Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        {isUserLoggedIn && <NavLink className="nav-link" to="/cuisine">Cuisines</NavLink>}
                    </li>
                    <li className="nav-item">
                        {isUserLoggedIn && <NavLink className="nav-link" to="/offers">Offers</NavLink>}
                    </li>
                    <li className="nav-item">
                        {isUserLoggedIn && <NavLink className="nav-link" to="/orders">My Orders</NavLink>}
                    </li>
                    <li className="nav-item">
                        {isUserLoggedIn && <NavLink className="nav-link" to="/users">Users</NavLink>}
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/help">Help</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                </ul>

                <ul className="navbar-nav navbar-collapse justify-content-end">
                    <li>
                        {isUserLoggedIn &&
                            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                            </form>
                        }
                    </li>
                    <li className="nav-item">
                        {!isUserLoggedIn && <NavLink className="nav-link" to="/login" onClick={AuthenticationService.registerSuccessfulLogin}>Login</NavLink>}
                    </li>
                    <li className="nav-item">
                        {isUserLoggedIn && <NavLink className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</NavLink>}
                    </li>
                    <li className="nav-item">
                        {!isUserLoggedIn && <NavLink className="nav-link" to="/register">Register</NavLink>}
                    </li>


                </ul>
            </div>
        </nav>
    )

}