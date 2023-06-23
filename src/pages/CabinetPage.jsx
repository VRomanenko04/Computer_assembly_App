import React, { useState } from 'react';
import classes from '../styles/cabinet.module.css';
import { UserData } from '../components/Blocks/UserData';
import { Delivery } from '../components/Blocks/Delivery';
import { Support } from '../components/Blocks/Support';
import { Orders } from '../components/Blocks/OrderBlock/Orders';

export const CabinetPage = () => {
    const [isDataOpen, setIsDataOpen] = useState(true);
    const [isDelivery, setIsDelivery] = useState(false);
    const [isOrders, setIsOrders] = useState(false);
    const [isSupport, setIsSupport] = useState(false);

    const handleToggle = (stateToUpdate) => {
        setIsDataOpen(stateToUpdate === 'isDataOpen' ? true : false);
        setIsDelivery(stateToUpdate === 'isDelivery' ? true : false);
        setIsOrders(stateToUpdate === 'isOrders' ? true : false);
        setIsSupport(stateToUpdate === 'isSupport' ? true : false);
    };

    const buttons = [
        { label: 'Мои данные', key: 'isDataOpen' },
        { label: 'Доставка', key: 'isDelivery' },
        { label: 'Мои заказы', key: 'isOrders' },
        { label: 'Поддержка', key: 'isSupport' }
    ];

    return (
        <main>
            <div className={classes.container}>
                <div className={classes.buttons}>
                    {buttons.map(button => (
                        <button
                            key={button.key}
                            className={`
                                ${classes.btn} 
                                ${button.key === 'isDataOpen' && isDataOpen ? classes.active : ''} 
                                ${button.key === 'isDelivery' && isDelivery ? classes.active : ''} 
                                ${button.key === 'isOrders' && isOrders ? classes.active : ''} 
                                ${button.key === 'isSupport' && isSupport ? classes.active : ''}
                            `}
                            onClick={() => handleToggle(button.key)}
                        >
                            {button.label}
                        </button>
                    ))}
                </div>
                <div className={classes.changing__side}>
                    {isDataOpen && (<UserData/>)}
                    {isDelivery && (<Delivery/>)}
                    {isOrders && (<Orders/>)}
                    {isSupport && (<Support/>)}
                </div>
            </div>
        </main>
    )
}