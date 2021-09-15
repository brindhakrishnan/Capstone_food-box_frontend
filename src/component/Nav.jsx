import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src="./FoodBox_logo2.png" width="350" height="75" alt="" />
            </a>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/" exact>Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/cuisine">Cuisines</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/menu">Menu</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/offers">Offers</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/help">Help</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                </ul>

                <ul className="navbar-nav navbar-collapse justify-content-end">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                    

                </ul>
            </div>
        </nav>
    )

}