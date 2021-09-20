import React, { Component } from 'react'
import './album.css'

export default class Offer extends Component {
    render() {
        return (
            <div>
                <main role="main">

                    <section className="jumbotron text-center">
                        <div className="container">
                            <h1 className="jumbotron-heading">Hot Deals!</h1>
                            <p className="lead text-muted">Get flat 25% off on your first purchase!</p>
                            <p className="lead text-muted">FoodBox has been one of the leading food delivery services in our country. Stay home, stay safe, relax and order your favorite food in a few clicks. Save money with our best deals on every purchase! </p>
                            
                            <button className="btn btn-primary my-2">Explore Cuisines</button>
                            <button href="#" className="btn btn-secondary my-2">Register here!</button>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}
