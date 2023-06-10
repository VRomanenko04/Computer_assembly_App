import React from 'react';
import cl from './computer.module.css';
import {Button} from '../UI/Button/Button.jsx';

export const Computer = (props) => {
    return (
        <div className={cl.block__container}>
            <img className={cl.photo} src={props.photo} alt="" />
            <p className={cl.head}>Сборка {props.head}</p>
            <ul className={cl.list__ul}>
                <li className={cl.list__item}>{props.proc}</li>
                <li className={cl.list__item}>{props.videocard}</li>
                <li className={cl.list__item}>{props.ram}</li>
                <li className={cl.list__item}>{props.memory}</li>
            </ul>
            <p className={cl.price}>{props.price}</p>
            <Button text='КУПИТЬ' additionalClass={cl.button}/>
        </div>
    )
}