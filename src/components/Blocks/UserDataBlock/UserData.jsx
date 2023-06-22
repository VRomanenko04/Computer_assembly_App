import React, {useEffect, useState} from 'react';
import {Button} from '../../UI/Button/Button.jsx';
import classes from './userdata.module.css';

export const UserData = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Восстанавливаем сохраненные данные при загрузке компонента
        const savedFirstName = localStorage.getItem('firstName');
        const savedLastName = localStorage.getItem('lastName');
        const savedPhone = localStorage.getItem('phone');
        const savedEmail = localStorage.getItem('email');

        if (savedFirstName) setFirstName(savedFirstName);
        if (savedLastName) setLastName(savedLastName);
        if (savedPhone) setPhone(savedPhone);
        if (savedEmail) setEmail(savedEmail);
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        // Сохраняем данные в localStorage
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('phone', phone);
        localStorage.setItem('email', email);

        // Сброс значений полей формы
        setFirstName('');
        setLastName('');
        setPhone('');
        setEmail('');
    };


    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.input__div}>
                <p className={classes.text} htmlFor="firstName">Имя:</p>
                <input
                    className={classes.input}
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className={classes.input__div}>
                <p className={classes.text} htmlFor="lastName">Фамилия:</p>
                <input
                    className={classes.input}
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className={classes.input__div}>
                <p className={classes.text} htmlFor="phone">Телефон:</p>
                <input
                    className={classes.input}
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='050 000 0000'
                />
            </div>
            <div className={classes.input__div}>
                <p className={classes.text} htmlFor="email">E-mail:</p>
                <input
                    className={classes.input}
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='mail@gmail.com'
                />
            </div>
            <button className={classes.btn}>Сохранить</button>
        </form>
    )
}
