import React from 'react';
import Swal from 'sweetalert2';
import cl from './computer.module.css';

export const Computer = (props) => {

    const handleBuyClick = () => {
        Swal.fire({
            title: 'Введите ваш номер телефона',
            input: 'text',
            showCancelButton: true,
            confirmButtonText: 'Купить',
            cancelButtonText: 'Отмена',
            inputValidator: (value) => {
                if (!value) {
                    return 'Вы должны ввести номер телефона';
                }
            },
            preConfirm: (phone) => {
                const purchasedPCs = JSON.parse(localStorage.getItem('purchasedPCs')) || [];
                // Проверка наличия уже существующей покупки с таким же названием
                const existingPurchase = purchasedPCs.find((pc) => pc.name === props.head);
                if (existingPurchase) {
                    Swal.fire({
                        title: 'Ошибка',
                        text: 'Вы уже приобрели этот товар',
                        icon: 'error'
                    });
                    return false; // Отменить сохранение покупки
                }
                // Сохраните название купленного ПК и номер телефона в локальное хранилище
                const purchasedPC = {
                    name: props.head,
                    phone: phone
                };
                purchasedPCs.push(purchasedPC);
                localStorage.setItem('purchasedPCs', JSON.stringify(purchasedPCs));
            }
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: 'Ваш заказ подтвержден',
                    text: 'Ожидайте звонка',
                    icon: 'success'
                });
            }
        });
    };

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
            <button className={cl.btn} onClick={handleBuyClick}>КУПИТЬ</button>
        </div>
    )
}