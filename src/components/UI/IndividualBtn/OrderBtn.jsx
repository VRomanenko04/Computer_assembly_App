import React from 'react';
import classes from './orderbtn.module.css';

export const OrderBtn = (props) => {
    const {
        isOrderEnabled,
        handleOrderClick
    } = props;

    return (
        <>
            {isOrderEnabled ? 
            ( <button className={classes.btn} onClick={handleOrderClick}>Заказать</button> ) 
            : (
                <div className={classes.message}>
                    <p>Выберите все комплектующие для заказа</p>
                </div>
            )}
        </>
    )
}