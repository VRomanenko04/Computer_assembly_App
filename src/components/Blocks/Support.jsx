import React from 'react';
import { InputField } from '../UI/InputField/InputField';
import classes from '../../styles/cabinetParts.module.css';

export const Support = () => {
    return (
        <form className={classes.form}>
            <div className={classes.input__div}>
                <InputField text="Обратная связь:" type="email" id="answermail" placeholder='mail@gmail.com'
                />
            </div>
            <div className={classes.input__div}>
                <InputField text="Ваш вопрос:" type="text" id="question" placeholder='...'
                />
            </div>
            <button className={classes.btn}>Отправить</button>
        </form>
    )
}
