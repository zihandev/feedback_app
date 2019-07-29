import React, { Component } from 'react'

import StripeCheckout from 'react-stripe-checkout';
import classes from './styling.module.css'
import * as actions from '../actions/stripePay'
import {connect} from 'react-redux';
import logoimg from '../img/logo.PNG'

class Payment extends Component {
    render() {
        return (
            <StripeCheckout 
            name='Feedback App'
            description= {this.props.description}
            amount= {this.props.amount}
            image={logoimg}
            // panelLabel ='Pay {{amount}} for 5 credits'
            token={token=>this.props.handleToken(token, this.props.amount)}
            stripeKey='pk_test_L0lVSVLZicJZTzU6hoNtktmt0078b9X39p'>
                <button className={classes.cute}>Add Credits</button>
            </StripeCheckout>
         )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        handleToken : (token, amount)=>dispatch(actions.stripePay(token, amount))
    }
}

export default connect(null, mapDispatchToProps)(Payment)