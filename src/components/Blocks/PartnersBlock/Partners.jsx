import React from 'react';
import classes from './partners.module.css';

import ellipse from '../../../assets/Ellipse_partners.svg';
import logoMSI from '../../../assets/logo_msi.png';

export const Partners = () => {
    return (
        <section className={classes.partners}>
            <div className={classes.partners_head}>
                <img src={ellipse} alt='' className={classes.partners_logo}/>
                <h2 className={classes.partners_text}>Партнеры - топовые бренды</h2>
            </div>
            <div className={classes.grid_container}>
                <div className={classes.grid_comp}>
                    <img src={logoMSI} alt="" className={classes.partner__img}/>
                    <img src={logoMSI} alt="" className={classes.partner__img}/>
                    <img src={logoMSI} alt="" className={classes.partner__img}/>
                    <img src={logoMSI} alt="" className={classes.partner__img}/>
                    <img src={logoMSI} alt="" className={classes.partner__img}/>
                    <img src={logoMSI} alt="" className={classes.partner__img}/>
                    <img src={logoMSI} alt="" className={classes.partner__img}/>
                    <img src={logoMSI} alt="" className={classes.partner__img}/>
                </div>
            </div>
        </section>
    )
}
