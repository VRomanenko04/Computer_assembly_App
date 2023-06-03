import React from 'react';
import classes from './about.module.css';

export const AboutUs = () => {
    return (
        <section className={classes.about__us}>
            <img src="/imgs/about__img.png" alt=''/>
            <article>
                <h2 className={classes.about_us_head}>Чем мы занимаемся?</h2>
                <p className={classes.about_us_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias saepe. Pariatur natus itaque quisquam voluptatibus repellendus fuga alias maiores. Non quasi dolore amet earum, nulla architecto ab fugit iste.</p>
            </article>
        </section>
    )
}
