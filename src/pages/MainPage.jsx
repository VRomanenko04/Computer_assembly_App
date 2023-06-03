import React from 'react';
import classes from '../styles/mainpage.module.css';
import { Button } from '../UI/Button/Button';
import { AboutUs } from '../components/Blocks/AboutUsBlock/AboutUs';
import { Partners } from '../components/Blocks/PartnersBlock/Partners';

export default function MainPage() {
    return (
        <>
        <header className={classes.header}>
            <h1 className={classes.head__text}>От заказа <br /> до индивидуального ПК <br /> всего неделя</h1>
            <Button link='/individual' text='Заказать ПК' additionalClass={classes.head__btn}/>
        </header>
        <main>
            <AboutUs/>
            <Partners/>
        </main>
        </>
    )
}
