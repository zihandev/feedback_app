import React from 'react'
import classes from '../CSS/prices.module.scss';
import grids from '../CSS/grid.module.scss';

import buttons from '../CSS/button.module.scss';

const Prices = () => {
    return (
        <main style={{marginTop:'-220px'}}>
        <section className={classes.sectionTours} id="section-tours">
        <div className={`${classes.uCenterText} ${classes.uMarginBottomBig}`}>
            <h2 className={classes.headingSecondary}>
                Most popular plans
            </h2>
        </div>

        <div className={grids.row}>
            <div className={grids.col1Of3}>
               <div className={classes.card}>
                   <div className={`${classes.card__side} ${classes.card__sideFront}`}>
                        <div className={`${classes.card__picture} ${classes.card__picture1}`}>
                            &nbsp;
                        </div>
                        <h4 className={classes.card__heading}>
                            <span className={`${classes.card__headingSpan} ${classes.card__headingSpan1}`}>Basic $5</span>
                        </h4>
                        <div className={classes.card__details}>
                            <ul>
                                <li>50 Surveys</li>
                                <li>Over 100 survey templates</li>
                                <li>1 tour guide</li>
                                <li>Share on social</li>
                                <li>Embed survey in website</li>
                            </ul>
                        </div>
                   </div>
                   <div className={`${classes.card__side} ${classes.card__sideBack} ${classes.card__sideBack1}`}>
                        <div className={classes.card__cta}>
                            <div className={classes.card__priceBox}>
                                <p className={classes.card__priceOnly}>Only</p>
                                <p className={classes.card__priceValue}>$5</p>
                            </div>
                            <a href="#popup" className={`${buttons.btn} ${buttons.btnWhite}`}>Buy now!</a>
                        </div>
                    </div>
               </div>
            </div>


           
            <div className={grids.col1Of3}>
               <div className={classes.card}>
                   <div className={`${classes.card__side} ${classes.card__sideFront}`}>
                        <div className={`${classes.card__picture} ${classes.card__picture3}`}>
                            &nbsp;
                        </div>
                        <h4 className={classes.card__heading}>
                            <span className={`${classes.card__headingSpan} ${classes.card__headingSpan3}`}>Pro $15</span>
                        </h4>
                        <div className={classes.card__details}>
                            <ul>
                                <li>Unlimited Surveys</li>
                                <li>Over 200 survey templates</li>
                                <li>2 tour guides</li>
                                <li>Share on social</li>
                                <li>Embed survey in website</li>
                            </ul>
                        </div>
                   </div>
                   <div className={`${classes.card__side} ${classes.card__sideBack} ${classes.card__sideBack1}`}>
                        <div className={classes.card__cta}>
                            <div className={classes.card__priceBox}>
                                <p className={classes.card__priceOnly}>Only</p>
                                <p className={classes.card__priceValue}>$15</p>
                            </div>
                            <a href="#popup" className={`${buttons.btn} ${buttons.btnWhite}`}>Buy now!</a>
                        </div>
                    </div>
               </div>
            </div>
            </div>

                <div className={`${classes.uCenterText} ${classes.uMarginBottomHuge}`}>
                    <a href="\" className={`${buttons.btn} ${buttons.btnGreen}`}>Discover all tours</a>
                </div>
            </section></main>
    )
}

export default Prices
