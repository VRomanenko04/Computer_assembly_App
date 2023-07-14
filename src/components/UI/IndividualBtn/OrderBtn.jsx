import React from 'react';
import classes from './orderbtn.module.css';
import Swal from 'sweetalert2';

export const OrderBtn = (props) => {
    const {
        isOrderEnabled,
        totalPrice,
        setTotalPrice,
        setSelectedComponents
    } = props;

    //Модальное окно, перенос заказа в localStor по нажатию
    const handleModal = () => {
        Swal.fire({
            title: 'Введите номер телефона',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off',
            },
            showCancelButton: true,
            confirmButtonText: 'Заказать',
            cancelButtonText: 'Отмена',
            showLoaderOnConfirm: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'Вы должны ввести номер телефона';
                } else if (value.length < 10)
                    return 'Номер телефона введён с ошибкой';
            },
            preConfirm: (phone) => {
                const randomNumber = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
                const order = {
                    name: `Индивидуальный заказ #${randomNumber}`,
                    phone: phone,
                    price: totalPrice,
                };
                // Получаем текущие заказы из localStorage
                const orders = JSON.parse(localStorage.getItem('orders')) || [];
                // Добавляем новый заказ в массив
                orders.push(order);
                // Сохраняем обновленный массив заказов в localStorage
                localStorage.setItem('orders', JSON.stringify(orders));
                // Очищаем выбранные компоненты и обнуляем общую сумму
                setSelectedComponents({});
                setTotalPrice(799);
            },
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
        <>
            {isOrderEnabled ? 
            ( <button className={classes.btn} onClick={handleModal}>Заказать</button> ) 
            : (
                <div className={classes.message}>
                    <p>Выберите все комплектующие для заказа</p>
                </div>
            )}
        </>
    )
};