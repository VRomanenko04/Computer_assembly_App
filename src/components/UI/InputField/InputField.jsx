import React from 'react';
import classes from './inputfield.module.css';

export const InputField = (props) => {

    const {
        text,
        type,
        id,
        value,
        onChange,
        placeholder
    } = props;

    return (
        <>
            <p className={classes.text} htmlFor="lastName">{text}</p>
            <input
                className={classes.input}
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    )
}
