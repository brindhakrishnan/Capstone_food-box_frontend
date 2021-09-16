import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default class Footer extends Component {
    render() {
        return (

            <div class="container">
                <footer class="py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Home</Link></li>
                        <li class="nav-item"><Link to="/offers" class="nav-link px-2 text-muted">Offers</Link></li>
                        <li class="nav-item"><Link to="/help" class="nav-link px-2 text-muted">Help</Link></li>
                        <li class="nav-item"><Link to="/about" class="nav-link px-2 text-muted">About</Link></li>
                    </ul>
                    <p class="text-center text-muted">&copy; 2019 FoodBox, Ltd</p>
                </footer>
            </div>

        )
    }
}
