import React, {useState, useEffect} from 'react';
import { InputField } from '../../UI/InputField/InputField.jsx';
import classes from './delivery.module.css';

export const Delivery = () => {
    const [City, setCity] = useState('');
    const [PostNum, setPostNum] = useState('');
    const [Payment, setPayment] = useState('');

    useEffect(() => {
        // Восстанавливаем сохраненные данные при загрузке компонента
        const savedCity = localStorage.getItem('City');
        const savedPostNum = localStorage.getItem('Post');
        const savedPayment = localStorage.getItem('Payment');

        if (savedCity) setCity(savedCity);
        if (savedPostNum) setPostNum(savedPostNum);
        if (savedPayment) setPayment(savedPayment);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Сохраняем данные в localStorage
        localStorage.setItem('City', City);
        localStorage.setItem('PostNum', PostNum);
        localStorage.setItem('Payment', Payment);

        // Сброс значений полей формы
        setCity('');
        setPostNum('');
        setPayment('');
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.input__div}>
                <InputField text="Город:" type="text" id="City" 
                    value={City} 
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <div className={classes.input__div}>
                <InputField text="Отделение НП:" type="text" id="PostNum" placeholder='№00'
                    value={PostNum} 
                    onChange={(e) => setPostNum(e.target.value)}
                />
            </div>
            <div className={classes.input__div}>
                <InputField text="Способ оплаты:" type="text" id="Payment" placeholder='На карту/Наложенный платёж'
                    value={Payment} 
                    onChange={(e) => setPayment(e.target.value)}
                />
            </div>
            <button className={classes.btn}>Сохранить</button>
        </form>
    )
}