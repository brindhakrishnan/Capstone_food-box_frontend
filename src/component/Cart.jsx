import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import CartAPI from '../services/CartAPI'

class Cart extends Component {
    constructor(props) {
        super(props)
        //this.deleteCartItems = this.deleteCartItems.bind(this)
        this.calculateTotalAmount = this.calculateTotalAmount.bind(this)
        this.retrieveCart = this.retrieveCart.bind(this)
        this.paymentPage = this.paymentPage.bind(this)

        this.state = {
            cart: [],
            message: null
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.retrieveCart();
        
        
    }

    retrieveCart(){
        let username = AuthenticationService.getLoggedInUsername()
        CartAPI.GetCartByEmail(username)
            .then(
                response => {
                    console.log(response);
                    this.setState({ cart: response.data })

                }

            )
     }

    calculateTotalAmount() {
        let total = 0.0
        this.state.cart.map(
            cartitem => {
                total = cartitem.totalAmount + total
            })
        return total;
    }

    paymentPage(){
        this.props.history.push('/payment')    
     }

    render() {
        return (
            <div>
                {/* {this.state.message && <div className="alert alert-success">{this.state.message}</div>} */}
                <div className="container">
                    <p />
                    <table className="table table-dark table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Menu Item Name</th>
                                <th>Price</th>
                                <th>Total Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cart.map(
                                    cartitem =>
                                        <tr key={cartitem.id}>
                                            <td>{cartitem.menuName}</td>
                                            <td>{cartitem.amount}</td>
                                            <td>{cartitem.totalAmount}</td>
                                            <td>{cartitem.quantity}</td>
                                        </tr>
                                )
                            }
                            <tr>
                                <td> </td>
                                <td>Total Amount</td>
                                <td>{this.calculateTotalAmount()}</td>
                                <td> </td>
                            </tr>
                        </tbody>
                        
                    </table>
                    <button className="btn btn-success" onClick={this.paymentPage} >Proceed to checkout</button>
                </div>
            </div>
        )
    }
}

export default Cart;