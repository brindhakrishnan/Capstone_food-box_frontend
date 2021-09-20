import React, { Component } from 'react'
import MenuAPI from '../services/MenuAPI'
import AuthenticationService from './AuthenticationService.js'
import CartAPI from '../services/CartAPI'

export default class Menu extends Component {


    //    let cuisineId = props.location.cuisineProps

    constructor(props) {
        super(props)
        // const id = props.location.cuisineProps.cuisineid
        this.viewMenuClicked = this.viewMenuClicked.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.onAdd = this.onAdd.bind(this)
        // this.addItemtoCart = this.addItemtoCart.bind(this)

        this.state = {

            menus: [
                {
                    // { id: 1, name: 'Dosa', description: 'Crispy plain dosa roasted in oil' },
                    // { id: 2, name: 'Idly', description: 'Soft and fluffy idlis' },
                    // { id: 3, name: 'Vada', description: 'Crispy fried medhu vada served with sambar' },
                    // { id: 4, name: 'Masala Dosa', description: 'Crispy masala dosa roasted in butter and stuffed with potatoes' }
                }
            ],
            cuisine: props.location.cuisineProps.cuisineid,
            quantity:'',
            message: null

        };

        // console.log(this.state)

        

    }

    componentDidMount() {
        this.viewMenuClicked(this.state.cuisine);

    }

    viewMenuClicked(cuisineid) {
        console.log("viewMenuClicked")

        MenuAPI.menuByCuisine(cuisineid)
            .then(
                response => {
                    console.log(response);
                    this.setState({ menus: response.data })
                }
            )
    }

    //handle change
    handleChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        this.setState({ [fieldName]: fieldValue });
         console.log(this.state.quantity);
    }

    onAdd(id,menuname,price){
        console.log("onAdd called")
        console.log("this.state.quantity",this.state.quantity)
        let username = AuthenticationService.getLoggedInUsername()
        let total = price * (parseInt(this.state.quantity))
     //   Cart.addItemtoCart(id, this.state.quantity);

     let cartdetails = {
       // id: '',
        email: username,
        menuName: menuname,
        amount: price,
        totalAmount: total,
        quantity: parseInt(this.state.quantity)
    }
    console.log(cartdetails)

    CartAPI.addToCart(cartdetails)
    .then(
        response => {
            console.log(response);
            this.setState({ message: `${this.state.quantity} ${menuname} added to cart` })
        })
        
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                    <div className="container">
                        <p />
                        <table className="table table-dark table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Menu Item Name</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Cart</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.menus.map(
                                        menu =>
                                            <tr key={menu.id}>
                                                <td>{menu.menuname}</td>
                                                <td>{menu.price}</td>
                                                <td>{menu.description}</td>
                                                <td>
                                                    <div className="col-5">
                                                        <input className="form-control" type="number" name="quantity" placeholder="0" required onChange={this.handleChange} />
                                                    </div>
                                                </td>
                                                <td><button fluid className="add-button" onClick={() => this.onAdd(menu.id,menu.menuname,menu.price)}>Add</button></td>
                                                {/* <td><button fluid className="add-button" >Remove</button></td> */}
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
