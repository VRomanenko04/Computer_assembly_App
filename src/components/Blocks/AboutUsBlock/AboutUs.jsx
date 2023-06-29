import React from 'react';
import classes from './about.module.css';
import about from '../../../assets/about__img.png';

export const AboutUs = () => {
    return (
        <section className={classes.about__us}>
            <img className={classes.about__img} src={about} alt=''/>
            <article>
                <h2 className={classes.about_us_head}>Чем мы занимаемся?</h2>
                <p className={classes.about_us_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias saepe. Pariatur natus itaque quisquam voluptatibus repellendus fuga alias maiores. Non quasi dolore amet earum, nulla architecto ab fugit iste.</p>
            </article>
        </section>
    )
}
