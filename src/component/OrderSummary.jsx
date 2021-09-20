import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import OrderAPI from '../services/OrderAPI'

export default class OrderSummary extends Component {

    constructor(props) {
        super(props)

        this.retrieveOrders = this.retrieveOrders.bind(this)
        this.state = {
            orders: []
            // message: null
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.retrieveOrders();
        
        
    }

    retrieveOrders(){
        let username = AuthenticationService.getLoggedInUsername()
        OrderAPI.GetOrdersByEmail(username)
            .then(
                response => {
                    console.log(response);
                    this.setState({ orders: response.data })
                }

            )
     }

    render() {
        return (
            <div>
                <div className="container">
                    <p />
                    <table className="table table-dark table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer Email</th>
                                <th>Order Date</th>
                                <th>Bill Amount</th>
                                <th>Order Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.orders.map(
                                    order =>
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.email}</td>
                                            <td>{order.orderDate}</td>
                                            <td>{order.amount}</td>
                                            <td>{order.orderStatus}</td>
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
