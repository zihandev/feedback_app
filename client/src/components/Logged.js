import React, { Component } from 'react'
import {connect} from 'react-redux';

import Payment from './Payment'
import * as actions from '../actions/stripePay'

 class Logged extends Component {
    
    componentDidMount() {
        this.props.fetchUser();
      }
       
    render() {
        return (
            <div>
               <h2>SUCCESSFULLY LOGGED IN ! Welcome {this.props.name}</h2>
                <h3>Available Credits : {this.props.credits} </h3> 
               <Payment/>
            </div>
        )
    }
}



const mapStateToProps =(state)=>{
    return{
        credits : state.credits,
        name : state.name 
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchUser : ()=>dispatch(actions.fetchUser())
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Logged);