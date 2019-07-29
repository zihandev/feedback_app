import React from 'react';
import classes from '../CSS/footer.module.scss';
import grids from '../CSS/grid.module.scss';

import { FaAsymmetrik } from 'react-icons/fa';

const Footer = () => {
    return (
        <main style={{marginTop:'-130px', marginBottom:'-110px'}}>
        <footer className={classes.footer}>
            <div className={classes.footer__logoBox}>
                {/* <img src="../img/features.jpg" alt="Full logo" className={classes.footer__logo}/> */}
                <FaAsymmetrik style={{color : 'green', fontSize: '80px'}}/>
            </div>
            <div className={grids.row}>
                <div className={grids.col1Of2}>
                    <div className={classes.footer__navigation}>
                        <ul className={classes.footer__list}>
                            <li className={classes.footer__item}><a href="#" className={classes.footer__link}>Company</a></li>
                            <li className={classes.footer__item}><a href="#" className={classes.footer__link}>Contact us</a></li>
                            <li className={classes.footer__item}><a href="#" className={classes.footer__link}>Carrers</a></li>
                            {/* <li className={classes.footer__item}><a href="#" className={classes.footer__link}>Privacy policy</a></li> */}
                            <li className={classes.footer__item}><a href="#" className={classes.footer__link}>Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className={grids.col1Of2}>
                    <p className={classes.footer__copyright}>
                        {/* Copyright &copy; by <a href="#" className={classes.footer__link}>MOHAMMED ZIHAN</a>. You are 100% allowed to use this webpage for both personal
                        and commercial use, but NOT to claim it as your own project.  */}
                        Copyright &copy; by MOHAMMED ZIHAN. Only use for commercial purposes.
                    </p>
                </div>
            </div>
        </footer></main>
    )
}

export default Footer
