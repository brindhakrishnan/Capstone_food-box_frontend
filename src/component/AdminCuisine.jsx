import React, { Component } from 'react'
import CuisineAPI from '../services/CuisineAPI'


export default class AdminCuisine extends Component {

    constructor(props) {
        super(props)
        this.retrieveCuisines = this.retrieveCuisines.bind(this)
        this.deleteCuisineClicked = this.deleteCuisineClicked.bind(this)
        // this.updateCuisineClicked = this.updateCuisineClicked.bind(this)

        // this.handleSuccessResponse = this.handleSuccessResponse.bind(this)
        // this.handleError = this.handleError.bind(this)
        this.state = {
            cuisines:
                [
                ],
            message: null
        }

    }

    componentDidMount() {
        // let username = AuthenticationService.getLoggedInUsername()
        this.retrieveCuisines();
    }

    //async calls with Promise

    //Retrieve the list of all users through UserAPI Rest calls
    retrieveCuisines() {
        CuisineAPI.getAllCuisines()
            .then(
                response => {
                    console.log(response);
                    this.setState({ cuisines: response.data })
                }
            )
        //   .catch(error => this.handleError(error))
    }

    deleteCuisineClicked(id) {
        CuisineAPI.deleteCuisine(id)
            .then(
                response => {
                    console.log(response);
                    this.setState({ message: `Deletion of cuisine ${id} successful` })
                    this.retrieveCuisines();
                }
            )
    }


    render() {
        return (
            <div>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Cuisine Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cuisines.map(
                                    cuisine =>
                                        <tr key={cuisine.id}>
                                            <td>{cuisine.cuisinename}</td>
                                            <td>{cuisine.description}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateCuisineClicked(cuisine.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteCuisineClicked(cuisine.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }

}
