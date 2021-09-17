import React from 'react'
import { Link } from 'react-router-dom'
import './album.css'
//import IndianMenu from './IndianMenu'

export default function Cuisine() {
    return (
        <div>
            {/* <img src="./images/Cuisine_05_Continental.png"/> */}
            <main role="main">

                {/* <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">Welcome to FoodBox!</h1>
                        <p className="lead text-muted">FoodBox is one of the leading food delivery services in our country. Stay home, stay safe, relax and order your favorite food in a few clicks. Save money with our best deals on every purchase! </p>
                    </div>
                </section> */}


                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <Link to="/IndianMenu"><img src="./images/Cuisine_01_Indian.jpg" className="img-thumbnail" alt="Indian Cuisine" /></Link>
                                <div className="card mb-4 box-shadow">
                                    <div className="card-body">
                                        <p className="card-text"><b>Indian Cuisine </b>- Explore our traditional and modern Indian dishes</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-primary">View</button>
                                            </div>
                                            {/* <small className ="text-muted">9 mins</small> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img src="./images/Cuisine_02_Mexican.jpg" className="img-thumbnail" alt="Mexican Cuisine" />
                                    <div className="card-body">
                                        <p className="card-text"><b>Mexican Cuisine </b>- Tacos, Nachos, Wraps and more...</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-primary">View</button>
                                            </div>
                                            {/* <small className ="text-muted">9 mins</small> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img src="./images/Cuisine_03_Italian.png" className="img-thumbnail" alt="Italian Cuisine" />
                                    <div className="card-body">
                                        <p className="card-text"><b>Italian Cuisine </b>- Oven baked Pizzas, Pastas, Lasagnas and more...</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-primary">View</button>
                                            </div>
                                            {/* <small className ="text-muted">9 mins</small> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img src="./images/Cuisine_04_Chinese.jpg" className="img-thumbnail" alt="Chinese Cuisine" />
                                    <div className="card-body">
                                        <p className="card-text"><b>Chinese Cuisine </b>- Noodles, manchurian, soups, wontons and more...</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-primary">View</button>
                                            </div>
                                            {/* <small className ="text-muted">9 mins</small> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img src="./images/Cuisine_05_Continental.png" className="img-thumbnail" alt="Continental Cuisine" />
                                    <div className="card-body">
                                        <p className="card-text"><b>Continental Cuisine </b>- Salads, Burgers, French fries, Pies and more...</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-primary">View</button>
                                            </div>
                                            {/* <small className ="text-muted">9 mins</small> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img src="./images/Cuisine_06_MiddleEastern.jpg" className="img-thumbnail" alt="Middle Eastern Cuisine" />
                                    <div className="card-body">
                                        <p className="card-text"><b>Middle Eastern Cuisine </b>- Pita, Hummus, Falafels, Manakeesh and more...</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-primary">View</button>
                                            </div>
                                            {/* <small className ="text-muted">9 mins</small> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}
