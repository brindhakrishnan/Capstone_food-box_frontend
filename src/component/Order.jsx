import React, { Component } from 'react'
import OrderAPI from '../services/OrderAPI'
import AuthenticationService from './AuthenticationService.js'
import moment from "moment";

 class Order extends Component {

    constructor(props) {
        super(props)

        this.state = {
           order:[]
        }
    this.submitOrder = this.submitOrder.bind(this)
    }

    submitOrder(total){
        console.log("inside submitOrder");
        let username = AuthenticationService.getLoggedInUsername();
        let date_create = moment().format("YYYY-MM-DD");
  

        let orderObj = {
            id: 0,
            email: username,
            orderDate:date_create,
            amount:total,
            orderStatus:"Order Placed"
        }

        console.log(orderObj)

        OrderAPI.createOrder(username,orderObj)
        .then(
            response => {
                console.log(response);
                
                
            }
        )
    }


    render() {
        return (
            <div>
              Order Page  
            </div>
        )
    }
}

export default new Order();