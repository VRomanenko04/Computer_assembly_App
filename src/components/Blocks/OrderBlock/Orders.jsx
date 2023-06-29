import React from 'react';
import classes from './order.module.css';

export const Orders = () => {
    const purchasedPCs = JSON.parse(localStorage.getItem('purchasedPCs')) || [];
    const IndOrders = JSON.parse(localStorage.getItem('orders')) || []; 

    if (purchasedPCs.length > 0 || IndOrders.length > 0) {
        return (
            <div className={classes.container}>
                {purchasedPCs.map((pc, index) => (
                    <div className={classes.order__block} key={index}>
                        <div className={classes.order__info}>
                            <p>Название товара: {pc.name}</p>
                            <p>Номер телефона: {pc.phone}</p>
                        </div>
                        <div className={classes.order__status}>
                            <p>Статус: <strong>Ожидайте звонка</strong></p>
                        </div>
                    </div>
                ))}
                {IndOrders.map((order, index) => (
                    <div className={classes.order__block} key={index}>
                        <div className={classes.order__info}>
                            <p>{order.name}</p>
                            <p>Номер телефона: {order.phone}</p>
                            <p>Сумма к оплате: {order.price} грн</p>
                        </div>
                        <div className={classes.order__status}>
                            <p>Статус: <strong>Ожидайте звонка</strong></p>
                        </div>
                    </div>
                ))}
            </div>
        );
    } else {
        return (
            <div className={classes.container}>
                <h3 className={classes.empty__orders}>У вас еще нет заказов</h3>
            </div>
        );
    }
}