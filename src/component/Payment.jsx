import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import CartAPI from '../services/CartAPI'
import Order from './Order'

export default class Payment extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cart: [],
            message: null,
        //    order:[]
        }

        this.calculateTotalAmount = this.calculateTotalAmount.bind(this)
        this.retrieveCart = this.retrieveCart.bind(this)
        this.deleteCartItems = this.deleteCartItems.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)


    }

    componentDidMount() {
        console.log("componentDidMount")
        this.retrieveCart();
    }

    retrieveCart() {
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

    deleteCartItems(){
        let username = AuthenticationService.getLoggedInUsername()
        CartAPI.deleteCart(username)
        .then(
            response => {
                console.log(response);
                // this.setState({ cart: response.data })
            }
        )
    }

        handleFormSubmit(){
        let total = this.calculateTotalAmount();
        console.log("Order Placed!")
        this.props.history.push('/order')
        Order.submitOrder(total);
        this.deleteCartItems();

    }

    render() {
        return (
            <div class="container">
                <main>
                    <div class="py-5 text-center">
                        <h2>Checkout</h2>
                        <p class="lead"></p>
                    </div>

                    <div class="row g-3">
                        <div class="col-md-5 col-lg-4 order-md-last">
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-muted">Shopping Cart</span>
                                <span class="badge bg-secondary rounded-pill">3</span>
                            </h4>
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

                        </div>
                        <div class="col-md-7 col-lg-8">
                            <h4 class="mb-3">Billing Address</h4>
                            <form class="form-register" onSubmit={this.handleFormSubmit}>
                                <div class="row g-3">
                                    <div class="col-sm-5">
                                        <label for="firstName" class="form-label">First Name</label>
                                        <input type="text" class="form-control" id="firstName" placeholder=""  required />

                                    </div>
                                    <div class="col-sm-5">
                                        <label for="lastName" class="form-label">Last Name</label>
                                        <input type="text" class="form-control" id="lastName" placeholder="" required />
                                    </div>

                                    <div class="col-12">
                                        <label for="email" class="form-label">Email<span class="text-muted"></span></label>
                                        <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                                    </div>

                                    <div class="col-12">
                                        <label for="address" class="form-label">Address Line 1</label>
                                        <input type="text" class="form-control" id="address1" placeholder="1234, 1st Cross" required />
                                    </div>

                                    <div class="col-12">
                                        <label for="address2" class="form-label">Address Line 2<span class="text-muted">(Optional)</span></label>
                                        <input type="text" class="form-control" id="address2" placeholder="Apartment No." />
                                    </div>

                                    <div class="col-md-5">
                                        <label for="country" class="form-label">Country</label>
                                        <select class="form-select" id="country" required>
                                            <option value="">Choose...</option>
                                            <option value="India">India</option>
                                        </select>
                                    </div>

                                    <div class="col-md-4">
                                        <label for="state" class="form-label">State</label>
                                        <select class="form-select" id="state" required>
                                            <option value="">Choose...</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Karnataka">Karnataka</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Tamil Nadu">Tamil Nadu</option>
                                        </select>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="zip" class="form-label">Postal code</label>
                                        <input type="text" class="form-control" id="zip" placeholder="" required />
                                    </div>
                                </div>

                                <hr class="my-4" />

                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="same-address" />
                                    <label class="form-check-label" for="same-address">Shipping address is same as Billing address</label>
                                </div>

                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="save-info" />
                                    <label class="form-check-label" for="save-info">Save Billing details for next time</label>
                                </div>

                                <hr class="my-4" />

                                <h4 class="mb-3">Payment Method</h4>

                                <div class="my-3">
                                    <div class="form-check">
                                        <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                                        <label class="form-check-label" for="credit">Credit Card</label>
                                    </div>
                                    <div class="form-check">
                                        <input id="cash" name="paymentMethod" type="radio" class="form-check-input" required />
                                        <label class="form-check-label" for="cash">Cash on Delivery</label>
                                    </div>
                                    <div class="form-check">
                                        <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required />
                                        <label class="form-check-label" for="google pay">Google Pay</label>
                                    </div>
                                </div>

                                <div class="row gy-3">
                                    <div class="col-md-6">
                                        <label for="cc-name" class="form-label">Name on Card</label>
                                        <input type="text" class="form-control" id="cc-name" placeholder="" required />
                                        <small class="text-muted">Full name as displayed on card</small>
                                        <div class="invalid-feedback">

                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="cc-number" class="form-label">16-digit Card Number</label>
                                        <input type="text" class="form-control" id="cc-number" placeholder="" />
                                    </div>

                                    <div class="col-md-3">
                                        <label for="cc-expiration" class="form-label">Expiration Date</label>
                                        <input type="text" class="form-control" id="cc-expiration" placeholder=""/>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="cc-cvv" class="form-label">CVV</label>
                                        <input type="text" class="form-control" id="cc-cvv" placeholder="" />
                                    </div>
                                </div>

                                <hr class="my-4" />

                                <button class="w-100 btn btn-primary btn-lg" type="submit">Place Order</button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
