import React, { Component } from 'react'
import UserAPI from '../services/UserAPI'


export default class Users extends Component {

    constructor(props) {
        super(props)
        this.retrieveUsers = this.retrieveUsers.bind(this)
        this.deleteUserClicked = this.deleteUserClicked.bind(this)
        this.updateUserClicked = this.updateUserClicked.bind(this)

        // this.handleSuccessResponse = this.handleSuccessResponse.bind(this)
        // this.handleError = this.handleError.bind(this)
        this.state = {
            users:
                [
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

    deleteUserClicked(email) {
        UserAPI.deleteUser(email)
            .then(
                response => {
                    console.log(response);
                    this.setState({ message: `Deletion of user ${email} successful` })
                    this.retrieveUsers();
                }
            )
        //   .catch(error => this.handleError(error))
    }

    updateUserClicked(email) {
        console.log('update ' + email)
        this.props.history.push(`/users/${email}`);
    }

    render() {
        return (
            <div>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
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
                                            <td><button className="btn btn-success" onClick={() => this.updateUserClicked(user.email)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteUserClicked(user.email)}>Delete</button></td>
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
