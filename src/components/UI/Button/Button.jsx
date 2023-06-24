import React from 'react'
import cl from './Button.module.css';
import { Link } from 'react-router-dom';

export const Button = (props) => {
    const {
        link,
        additionalClass,
        text
    } = props;

    const buttonClassName = `${cl.btn} ${additionalClass}`;

    return (
        <Link to={link} className={buttonClassName}>{text}</Link>
    )
}
