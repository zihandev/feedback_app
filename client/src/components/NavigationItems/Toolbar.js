import React from 'react'
import classes from './Toolbar.module.css'
import NavigationItems from './NavigationItems'
import logoimg from '../../img/logo.PNG'

const Toolbar = () => {
    return (
       <header className={classes.Toolbar}>
            <div><img src={logoimg} style={{borderRadius:'50%', height:'5rem', width:'6rem', cursor:'pointer'}}/></div>
            <nav>
                <NavigationItems />
            </nav>
            </header>
    )
}



export default Toolbar;
