import { Button } from 'bootstrap'
import React, { Component } from 'react'
import './album.css'

export default class About extends Component {
    render() {
        return (
            <div>
                <main role="main">

                    <section className="jumbotron text-center">
                        <div className="container">
                            <h1 className="jumbotron-heading">About FoodBox</h1>
                            <p className="lead text-muted">Foodbox is a restaurant chain that delivers food items of different cuisines at affordable prices. It was established in 2014 in Bengaluru, India.  </p>
                            <p className="lead text-muted">FoodBox has been one of the leading food delivery services in our country. Stay home, stay safe, relax and order your favorite food in a few clicks. Save money with our best deals on every purchase! </p>
                            <Button className="btn btn-primary my-2">Explore Cuisines</Button>
                            <Button href="#" className="btn btn-secondary my-2">Explore Menus</Button>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}
