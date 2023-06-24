import React from 'react';
import Swal from 'sweetalert2';
import cl from './computer.module.css';

export const Computer = (props) => {
    const {
        head,
        photo,
        proc,
        videocard,
        ram,
        memory,
        price
    } = props;

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
                const existingPurchase = purchasedPCs.find((pc) => pc.name === head);
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
                    name: head,
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
            <img className={cl.photo} src={photo} alt="" />
            <p className={cl.head}>Сборка {head}</p>
            <ul className={cl.list__ul}>
                <li className={cl.list__item}>{proc}</li>
                <li className={cl.list__item}>{videocard}</li>
                <li className={cl.list__item}>{ram}</li>
                <li className={cl.list__item}>{memory}</li>
            </ul>
            <p className={cl.price}>{price}</p>
            <button className={cl.btn} onClick={handleBuyClick}>КУПИТЬ</button>
        </div>
    )
}