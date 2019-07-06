import React, { Component } from 'react'

import StripeCheckout from 'react-stripe-checkout';
import classes from './styling.module.css'
import * as actions from '../actions/stripePay'
import {connect} from 'react-redux';

class Payment extends Component {
    render() {
        return (
            <StripeCheckout 
            name='Feedback App'
            description= 'Pay $5 for 5 Credits'
            token={token=>this.props.handleToken(token)}
            stripeKey='pk_test_L0lVSVLZicJZTzU6hoNtktmt0078b9X39p'>
                <button className={classes.styleButton}>Add Credits</button>
            </StripeCheckout>
         )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        handleToken : (token)=>dispatch(actions.stripePay(token))
    }
}

export default connect(null, mapDispatchToProps)(Payment)