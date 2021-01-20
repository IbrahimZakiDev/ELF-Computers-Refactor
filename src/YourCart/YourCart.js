import React, { Component } from 'react'
import Total from './Total'
import Cart from './Cart'


export class YourCart extends Component {
    render() {
        return (
            <div>
                <h2>Your cart</h2>
                    <Cart {...this.props} />
                    <Total {...this.props} />
            </div>
        )
    }
}

export default YourCart
