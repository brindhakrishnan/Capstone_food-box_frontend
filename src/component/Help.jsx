import React, { Component } from 'react'
import './album.css'

export default class Help extends Component {
    render() {
        return (
            <div>
                <main role="main">

                    <section className="jumbotron text-center">
                        <div className="container">
                            <h1 className="jumbotron-heading">Help</h1>
                            <p className="lead text-muted">Contact us on our toll-free number @1800-000-0123 for any queries.</p>
                            <p className="lead text-muted">You can also email us on support@foodbox.com</p>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}
