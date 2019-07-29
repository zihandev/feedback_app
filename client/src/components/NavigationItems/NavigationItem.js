import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Toolbar.module.css'

const NavigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink 
            to ={props.link}
            exact ={props.exact}
            activeClassname = {classes.active}>{props.children}</NavLink>
        </li>
    )
}

export default NavigationItem
