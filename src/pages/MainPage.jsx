import React from 'react'
import classes from '../styles/mainpage.module.css';
import { Button } from '../UI/Button/Button';

export default function MainPage() {
    return (
        <>
        <header className={classes.header}>
            <h1 className={classes.head__text}>От заказа <br /> до индивидуального ПК <br /> всего неделя</h1>
            <Button text='Заказать ПК' additionalClass={classes.head__btn}/>
        </header>
        <main>
            <section className={classes.about__us}>
                <img src="/imgs/about__img.png" alt=''/>
                <article>
                    <h2 className={classes.about_us_head}>Чем мы занимаемся?</h2>
                    <p className={classes.about_us_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias saepe. Pariatur natus itaque quisquam voluptatibus repellendus fuga alias maiores. Non quasi dolore amet earum, nulla architecto ab fugit iste.</p>
                </article>
            </section>
            <section className={classes.partners}>
                <div className={classes.partners_head}>
                    <img src="/imgs/Ellipse_partners.svg" alt='' className={classes.partners_logo}/>
                    <h2 className={classes.partners_text}>Партнеры - топовые бренды</h2>
                </div>
                <div className={classes.grid_container}>
                    <div className={classes.grid_comp}>
                        <img src="/imgs/logo_msi.png" alt="" className={classes.partner}/>
                        <img src="/imgs/logo_msi.png" alt="" className={classes.partner}/>
                        <img src="/imgs/logo_msi.png" alt="" className={classes.partner}/>
                        <img src="/imgs/logo_msi.png" alt="" className={classes.partner}/>
                        <img src="/imgs/logo_msi.png" alt="" className={classes.partner}/>
                        <img src="/imgs/logo_msi.png" alt="" className={classes.partner}/>
                        <img src="/imgs/logo_msi.png" alt="" className={classes.partner}/>
                        <img src="/imgs/logo_msi.png" alt="" className={classes.partner}/>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}
