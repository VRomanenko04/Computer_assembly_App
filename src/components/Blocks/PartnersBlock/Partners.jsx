import React from 'react';
import classes from './partners.module.css';
import { motion } from 'framer-motion';

import ellipse from '../../../assets/Ellipse_partners.svg';
import logoMSI from '../../../assets/logo_msi.png';

const sectionAnimate = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

export const Partners = () => {
    return (
        <motion.section 
            initial='hidden'
            viewport={{ once: true }}
            whileInView='visible'
            className={classes.partners}
        >
            <div className={classes.partners_head}>
                <motion.img custom={1} variants={sectionAnimate} src={ellipse} alt='' className={classes.partners_logo}/>
                <motion.h2 custom={1} variants={sectionAnimate} className={classes.partners_text}>Партнеры - топовые бренды</motion.h2>
            </div>
            <div className={classes.grid_container}>
                <div className={classes.grid_comp}>
                    <motion.img 
                        custom={1} variants={sectionAnimate} 
                        src={logoMSI} alt="" className={classes.partner__img}
                    />
                    <motion.img 
                        custom={1.5} variants={sectionAnimate} 
                        src={logoMSI} alt="" className={classes.partner__img}
                    />
                    <motion.img 
                        custom={2} variants={sectionAnimate} 
                        src={logoMSI} alt="" className={classes.partner__img}
                    />
                    <motion.img 
                        custom={2.5} variants={sectionAnimate} 
                        src={logoMSI} alt="" className={classes.partner__img}
                    />
                    <motion.img 
                        custom={3} variants={sectionAnimate} 
                        src={logoMSI} alt="" className={classes.partner__img}
                    />
                    <motion.img 
                        custom={3.5} variants={sectionAnimate} 
                        src={logoMSI} alt="" className={classes.partner__img}
                    />
                    <motion.img 
                        custom={4} variants={sectionAnimate} 
                        src={logoMSI} alt="" className={classes.partner__img}
                    />
                    <motion.img 
                        custom={4.5} variants={sectionAnimate} 
                        src={logoMSI} alt="" className={classes.partner__img}
                    />
                </div>
            </div>
        </motion.section>
    )
}