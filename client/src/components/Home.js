import React from 'react'
import classes from '../CSS/button.module.scss';

import heads from '../CSS/header.module.scss';
import GoogleButton from 'react-google-button'




import {connect} from 'react-redux';

const Home = (props) => {
    const style={textDecoration : 'none',  
  textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '1.5rem 19rem',
    display: 'block',
    borderRadius: '10rem',
    transition: 'all .2s',
    position: 'relative',
    fontSize: '$1.6rem',

    //Change for the <button> element
    border: 'none',
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
            {/* <a href= '#' style={style}><GoogleButton/></a> */}
            <a href="#section-tours" className = {`${classes.btn} ${classes.btnWhite} ${classes.btnAnimated}`}>Submit a survey</a> 
           
          

            </div>
          
    </header>
   
       
          
      
        </>
    )
}




export default Home;


{/* <a href="#section-tours" className={`${classes.btn} ${classes.btnGreen} ${classes.btnAnimated}`}>Discover our tours</a> */}