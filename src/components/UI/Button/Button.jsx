import React from 'react'
import cl from './Button.module.css';
import { Link } from 'react-router-dom';

export const Button = (props) => {
    const buttonClassName = `${cl.btn} ${props.additionalClass}`;
    return (
        <Link to={props.link} className={buttonClassName}>{props.text}</Link>
    )
}
