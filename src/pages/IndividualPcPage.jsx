import React from 'react';
import classes from '../styles/individualPC.module.css';
import {PcItems} from '../data/pcItems';

export const IndividualPcPage = () => {
    const TotalPrice = 799;
    const pcComponents = PcItems;

    return (
        <main className={classes.main}>
            <div className={classes.container}>
                <div className={classes.service}>
                    <p>Услуга сборки и тестирования ПК - <strong>799 грн</strong></p>
                </div>
            </div>
            <div className={classes.total__order}>
                <p className={classes.total__price}>Конечная сумма: <strong>{TotalPrice} грн</strong></p>
                <button className={classes.btn}>Заказать</button>
            </div>
        </main>
    )
}
