import React, { Component } from 'react'
import { connect } from 'react-redux'


class Vendors extends Component {
    render() {

        console.log('These are the props', this.props)
        return (

            <div>
                The Vendors page
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        purchased: state.order.purchased
    }
}


export default connect(mapStateToProps)(Vendors);