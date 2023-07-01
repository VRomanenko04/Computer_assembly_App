import React from 'react';
import classes from './about.module.css';
import about from '../../../assets/about__img.png';
import { motion } from 'framer-motion';

const sectionAnimate = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

export const AboutUs = () => {
    return (
        <motion.section
            initial='hidden'
            viewport={{ amount: 0.2, once: true }}
            whileInView='visible'
            className={classes.about__us}
        >
            <img className={classes.about__img} src={about} alt=''/>
            <article>
                <motion.h2 custom={1} variants={sectionAnimate} className={classes.about_us_head}>Чем мы занимаемся?</motion.h2>
                <motion.p custom={2} variants={sectionAnimate} className={classes.about_us_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias saepe. Pariatur natus itaque quisquam voluptatibus repellendus fuga alias maiores. Non quasi dolore amet earum, nulla architecto ab fugit iste.</motion.p>
            </article>
        </motion.section>
    )
}