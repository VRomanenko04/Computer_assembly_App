import React, {useEffect, useState} from 'react';
import classes from '../../styles/cabinetParts.module.css';
import { InputField } from '../UI/InputField/InputField.jsx';

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
                <InputField text="Имя:" type="text" id="firstName" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className={classes.input__div}>
                <InputField text="Фамилия:" type="text" id="lastName" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className={classes.input__div}>
                <InputField text="Телефон:" type="text" id="phone" placeholder='050 000 0000'
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className={classes.input__div}>
                <InputField text="E-mail:" type="email" id="email" placeholder='mail@gmail.com'
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button className={classes.btn}>Сохранить</button>
        </form>
    )
}