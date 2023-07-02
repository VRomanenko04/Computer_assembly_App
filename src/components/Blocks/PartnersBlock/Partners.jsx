import React from 'react';
import classes from './partners.module.css';
import { motion } from 'framer-motion';

// Импорты картинок
import ellipse from '../../../assets/Ellipse_partners.svg';
import logoMSI from '../../../assets/logo_msi.png';
import logoIntel from '../../../assets/Intel_logo.png';
import logoKingston from '../../../assets/Kingston_logo.png';
import logoDeepCool from '../../../assets/Deepcool_logo.png';
import logoSata from '../../../assets/sata_logo.png';
import logoAeroCool from '../../../assets/aerocool_logo.png';
import logoGigabyte from '../../../assets/gigabyte_logo.png';
import logoCorsair from '../../../assets/Corsair_logo.png';

const sectionAnimate = {
    hidden: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: {delay: custom * 0.15}
    })
}

const partnersImg = [logoMSI, logoIntel, logoKingston, logoDeepCool, logoSata, logoAeroCool, logoGigabyte, logoCorsair];

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
                    {
                        partnersImg.map((partner, index) => {
                            return(
                                <motion.img 
                                    key={index}
                                    custom={index + 0.5}
                                    variants={sectionAnimate}
                                    src={partner}
                                    className={classes.partner__img}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </motion.section>
    )
}