import React from 'react'
import classes from './Toolbar.module.css'
import popup from '../../CSS/popup.module.scss'
import NavigationItem from './NavigationItem'
import {connect} from 'react-redux';
import * as actions from '../../actions/stripePay'
import Payment from '../Payment';

import GoogleButton from 'react-google-button'
import { FacebookLoginButton } from "react-social-login-buttons";

const NavigationItems = (props) => {

        const style={textDecoration : 'none',  
//   textTransform: 'uppercase',
    textDecoration: 'none',
     padding: '1.5rem 22rem',
    display: 'inline-block',
   borderRadius : '100%',
    transition: 'all .2s',
    position: 'relative',
   

    //Change for the <button> element
    
    cursor: 'pointer'}



    const loggedIn = (<ul className={classes.NavigationItems}>
    <NavigationItem link ='/dashboard' exact>Dashboard</NavigationItem>
   {props.user? (<NavigationItem link ='/forms' exact>Credits Available: {props.user.credits}</NavigationItem>) : null}
    <NavigationItem link ='/surveys' exact>Surveys</NavigationItem>
    <NavigationItem link ='/credits' exact>Add Credits</NavigationItem>
 </ul>)

        const notLogged = (<ul className={classes.NavigationItems}>
            <a  className={classes.check} href='/#popup' >Surveys</a> 
            <a  className={classes.check} href='/#popup' >Log In</a> 
         </ul>)

    return (<>
       {props.user?loggedIn:notLogged}
       <div className={popup.popup} id="popup">
            <div className={popup.popup__content}>
                 <div className={popup.popup__left}> 
                <a href= '/auth/google' style={style}><GoogleButton/></a>
            <a href= '/auth/facebook' style={style}><FacebookLoginButton/></a>
               </div>
                 <div className={popup.popup__right}>
                    <a href="/#" className={popup.popup__close}>&times;</a>
                   
         </div> 
            </div> 
        </div>
       </>
    )
}


const mapStateToProps =(state)=>{
    return{
        
        user : state.user 
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchUser : ()=>dispatch(actions.fetchUser())
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(NavigationItems);
