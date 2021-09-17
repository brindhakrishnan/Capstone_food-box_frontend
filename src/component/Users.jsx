import React, { Component } from 'react'
import UserAPI from '../services/UserAPI'
import AuthenticationService from './AuthenticationService'

export default class Users extends Component {

    constructor(props) {
        super(props)
        this.retrieveUsers = this.retrieveUsers.bind(this)
        // this.handleSuccessResponse = this.handleSuccessResponse.bind(this)
        // this.handleError = this.handleError.bind(this)
        this.state = {
            users:
                [
                    // { id: 0, firstname: '', lastname: '', email: '', phone: '', password: '', accountstatus: 0 }
                ],
            message: null
        }

    }

    componentDidMount() {
        // let username = AuthenticationService.getLoggedInUsername()
        this.retrieveUsers();
    }

    //async calls with Promise

    //Retrieve the list of all users through UserAPI Rest calls
    retrieveUsers() {
        UserAPI.executeUserAPI()
            .then(
                response => {
                    console.log(response);
                    this.setState({ users: response.data })
                }
            )
        //   .catch(error => this.handleError(error))
    }

    render() {
        return (
            <div>
                {/* <div>
                    <p>This is the react user page.</p>
                    Click here to get list of all users
                    <button onClick={this.retrieveUsers} className="btn btn-lg btn-primary">Users</button>
                    <button onClick={this.retrieveUserByEmail} className="btn btn-lg btn-primary">Users</button>
                </div> */}
                {/* // <div className="container">
                //     {this.state.responsemessage}
                // </div> */}

                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Account Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>{user.firstname}</td>
                                            <td>{user.lastname}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.accountstatus}</td>
                                            {/* <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td> */}
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }



    // retrieveUserByEmail() {
    //     UserAPI.executeUserByEmail("jane.doe@gmail.com")
    //         //.then(response => console.log(response))
    //         .then(response => this.handleSuccessResponse(response))
    //         .catch(error => this.handleError(error))
    // }

    // handleSuccessResponse(response) {
    //     this.setState({
    //         id: response.data.id,
    //         firstname: response.data.firstname,
    //         lastname: response.data.lastname,
    //         email: response.data.email,
    //         phone: response.data.phone,
    //         password: response.data.password,
    //         accountstatus: response.data.accountstatus
    //     })
    // }

    // handleError(error) {
    //     console.log(error.response)
    // }

}
