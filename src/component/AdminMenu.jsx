import React, { Component } from 'react'
import MenuAPI from '../services/MenuAPI'


export default class AdminMenu extends Component {

    constructor(props) {
        super(props)
        this.retrieveMenu = this.retrieveMenu.bind(this)
        this.deleteMenuClicked = this.deleteMenuClicked.bind(this)
        this.state = {
            menus:
                [
                ],
            message: null
        }

    }

    componentDidMount() {
        // let username = AuthenticationService.getLoggedInUsername()
        this.retrieveMenu();
    }

    //async calls with Promise

    //Retrieve the list of all users through UserAPI Rest calls
    retrieveMenu() {
        MenuAPI.getAllMenus()
            .then(
                response => {
                    console.log(response);
                    this.setState({ menus: response.data })
                }
            )
        //   .catch(error => this.handleError(error))
    }

    deleteMenuClicked(id) {
        MenuAPI.deleteMenu(id)
            .then(
                response => {
                    console.log(response);
                    this.setState({ message: `Deletion of menu ${id} successful` })
                    this.retrieveMenu();
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
                                <th>Menu Name</th>
                                <th>Price</th>
                                <th>Cuisine</th>
                                <th>Description</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.menus.map(
                                    menu =>
                                        <tr key={menu.id}>
                                            <td>{menu.menuname}</td>
                                            <td>{menu.price}</td>
                                            <td>{menu.cuisineid}</td>
                                            <td>{menu.description}</td>
                                            <td>{menu.menustatus}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateMenuClicked(menu.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteMenuClicked(menu.id)}>Delete</button></td>
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
