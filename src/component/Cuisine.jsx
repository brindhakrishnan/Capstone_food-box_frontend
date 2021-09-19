import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './album.css'

export default class Cuisine extends Component {

    // constructor(props) {
    //     super(props)
    //     //  this.state = {selectedCuisine: '1' }
    // }

    render() {

        return (
            <div>
                <main role="main">

                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card mb-4 box-shadow">
                                        <NavLink className="nav-link" to={{ pathname: "/menu", cuisineProps: { cuisineid: 1 } }}><img src="./images/Cuisine_01_Indian.jpg" className="img-thumbnail" alt="Indian Cuisine" /></NavLink>
                                        <div className="card-body">
                                            <p className="card-text"><b>Indian Cuisine </b>- Explore our traditional and modern Indian dishes</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <NavLink className="nav-link" to={{ pathname: "/menu", cuisineProps: { cuisineid: 1 } }}><button type="button" className="btn btn-sm btn-outline-primary" >View</button></NavLink>
                                                </div>
                                                {/* <small className ="text-muted">9 mins</small> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 box-shadow">
                                        <NavLink className="nav-link" to={{ pathname: "/menu", cuisineProps: { cuisineid: 2 } }}> <img src="./images/Cuisine_02_Mexican.jpg" className="img-thumbnail" alt="Mexican Cuisine" /></NavLink>
                                        <div className="card-body">
                                            <p className="card-text"><b>Mexican Cuisine </b>- Tacos, Nachos, Wraps and more...</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <NavLink className="nav-link" to={{ pathname: "/menu", cuisineProps: { cuisineid: 2 } }}><button type="button" className="btn btn-sm btn-outline-primary">View</button></NavLink>
                                                </div>
                                                {/* <small className ="text-muted">9 mins</small> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 box-shadow">
                                        <NavLink className="nav-link" to={{ pathname: "/menu", cuisineProps: { cuisineid: 3 } }}><img src="./images/Cuisine_03_Italian.png" className="img-thumbnail" alt="Italian Cuisine" /></NavLink>
                                        <div className="card-body">
                                            <p className="card-text"><b>Italian Cuisine </b>- Oven baked Pizzas, Pastas, Lasagnas and more...</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <NavLink className="nav-link" to={{ pathname: "/menu", cuisineProps: { cuisineid: 3 } }}><button type="button" className="btn btn-sm btn-outline-primary">View</button></NavLink>
                                                </div>
                                                {/* <small className ="text-muted">9 mins</small> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card mb-4 box-shadow">
                                        <NavLink className="nav-link" to={{ pathname: "/menu", cuisineProps: { cuisineid: 4 } }}><img src="./images/Cuisine_04_Chinese.jpg" className="img-thumbnail" alt="Chinese Cuisine" /></NavLink>
                                        <div className="card-body">
                                            <p className="card-text"><b>Chinese Cuisine </b>- Noodles, manchurian, soups, wontons and more...</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <NavLink className="nav-link" to={{ pathname: "/menu", cuisineProps: { cuisineid: 4 } }}><button type="button" className="btn btn-sm btn-outline-primary">View</button></NavLink>
                                                </div>
                                                {/* <small className ="text-muted">9 mins</small> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 box-shadow">
                                        <NavLink className="nav-link" to={{ pathname: "/menu", cuisineProps: { cuisineid: 5 } }}><img src="./images/Cuisine_05_Continental.png" className="img-thumbnail" alt="Continental Cuisine" /></NavLink>
                                        <div className="card-body">
                                            <p className="card-text"><b>Continental Cuisine </b>- Salads, Burgers, French fries, Pies and more...</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <NavLink className="nav-link" to={{ pathname: "/menu", cuisineProps: { cuisineid: 5 } }}> <button type="button" className="btn btn-sm btn-outline-primary">View</button></NavLink>
                                                </div>
                                                {/* <small className ="text-muted">9 mins</small> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 box-shadow">
                                        <NavLink className="nav-link" to={{ pathname: "/menu", cuisineProps: { cuisineid: 6 } }}><img src="./images/Cuisine_06_MiddleEastern.jpg" className="img-thumbnail" alt="Middle Eastern Cuisine" /></NavLink>
                                        <div className="card-body">
                                            <p className="card-text"><b>Middle Eastern Cuisine </b>- Pita, Hummus, Falafels, Manakeesh and more...</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <NavLink className="nav-link" to={{ pathname: "/menu", cuisineProps: { cuisineid: 6 } }}>  <button type="button" className="btn btn-sm btn-outline-primary">View</button></NavLink>
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
}

