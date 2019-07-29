import React from 'react'
import buttons from '../CSS/button.module.scss';
import classes from '../CSS/popup.module.scss';
import heads from '../CSS/header.module.scss';

import {Link} from 'react-router-dom';

import GoogleButton from 'react-google-button'
import { FacebookLoginButton } from "react-social-login-buttons";




import {connect} from 'react-redux';

const Home = (props) => {
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
    return (
        <>
        <header className={heads.header}>
        {/* <div class="header__logo-box">
            <img src="img/logo-white.png" alt="Logo" class="header__logo">
        </div> */}

         <div className = {heads.header__textBox} style={{textAlign: 'center'}}>
            <h1 className={heads.headingPrimary}>
                <span className={heads.headingPrimaryMain}>Feedback</span>
                <span className={heads.headingPrimarySub}>is a gift</span>
            </h1> }
           
            <a href="#popup"  className = {`${buttons.btn} ${buttons.btnWhite} ${buttons.btnAnimated}`}>Submit a survey</a> 
            </div>  
    </header>
   

    <div className={classes.popup} id="popup">
            <div className={classes.popup__content}>
                 <div className={classes.popup__left}> 
                <a href= '/auth/google' style={style}><GoogleButton/></a>
            <a href= '/auth/facebook' style={style}><FacebookLoginButton/></a>
               </div>
                 <div className={classes.popup__right}>
                    <a href="/#" className={classes.popup__close}>&times;</a>
                   
         </div> 
            </div> 
        </div>
       
          
        </>
    )
}




export default Home;


{/* <a href="#section-tours" className={`${classes.btn} ${classes.btnGreen} ${classes.btnAnimated}`}>Discover our tours</a> */}