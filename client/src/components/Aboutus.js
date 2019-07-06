import React from 'react'
import { FaRegCalendarAlt, FaFireAlt, FaCheck, FaComment } from 'react-icons/fa';
//import classes from '../CSS/prices.module.scss';
import grids from '../CSS/grid.module.scss';

import classes from '../CSS/features.module.scss';




const Aboutus = () => {
    const style={color:'green', fontSize:'20px'};
    return (
        <main>
        <section style={{marginTop: '-100px', marginBottom:'50px'}} className={classes.sectionFeatures}>
                
        <div className={grids.row}>
            <div className={grids.col1Of4}>
                <div className={classes.featureBox}>
                   <FaRegCalendarAlt style={style}/>
                    <h3 className={`${classes.headingTertiary} ${classes.uMarginBottomSmall}`}>book Appointment</h3>
                    <p class="feature-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                    </p>
                </div>
            </div>

            <div className={grids.col1Of4}>
            <div className={classes.featureBox}>
            <FaFireAlt style={style}/>
                    <h3 className={`${classes.headingTertiary} ${classes.uMarginBottomSmall}`}>Strategize Survey</h3>
                    <p class="feature-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                    </p>
                </div>
            </div>

            <div className={grids.col1Of4}>
            <div className={classes.featureBox}>
            <FaCheck style={style}/>
                    <h3 className={`${classes.headingTertiary} ${classes.uMarginBottomSmall}`}>Get work done</h3>
                     <p class="feature-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                    </p>
                </div>
            </div>

            <div className={grids.col1Of4}>
            <div className={classes.featureBox}>
            <FaComment style={style}/>
                    <h3 className={`${classes.headingTertiary} ${classes.uMarginBottomSmall}`}>Engage</h3>
                    <p class="feature-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                    </p>
                </div>
            </div>
        </div>
    </section>
    </main>

    )
}

export default Aboutus
