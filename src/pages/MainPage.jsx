import React from 'react'
import classes from '../styles/mainpage.module.css';
import { Link } from 'react-router-dom';

export default function MainPage() {
    return (
        <>
        <header className={classes.header}>
            <h1 className={classes.head__text}>От заказа <br /> до индивидуального ПК <br /> всего неделя</h1>
            <Link className={classes.head__btn}>Заказать ПК</Link>
        </header>
        </>
    )
}
