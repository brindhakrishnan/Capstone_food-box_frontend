import React, { Component } from 'react'

export default class IndianMenu extends Component {

    constructor(props){
        super(props)
        this.state = {
            menus: [
                { id: 1, name: 'Dosa', description: 'Crispy plain dosa roasted in oil' },
                { id: 2, name: 'Idly', description: 'Soft and fluffy idlis' },
                { id: 3, name: 'Vada', description: 'Crispy fried medhu vada served with sambar' },
                { id: 4, name: 'Masala Dosa', description: 'Crispy masala dosa roasted in butter and stuffed with potatoes' }
            ]
        }
    }
    
    render() {
        return (
            <div>
                <h1>Indian Menu</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Sl.No</td>
                            <td>Item name</td>
                            <td>Item description</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.menus.map(
                                menu =>
                                    <tr>
                                        <td>{menu.id}</td>
                                        <td>{menu.name}</td>
                                        <td>{menu.description}</td>
                                    </tr>
                            )

                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
