import React from 'react';
import classes from './orderbtn.module.css';
import Swal from 'sweetalert2';
import popUp from '../../../styles/popup.module.css';

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
            title: 'Форма заказа',
            html:
                '<input id="name" style="color: #fff" class="swal2-input" placeholder="ФИО">' +
                '<input id="phone" style="color: #fff" class="swal2-input" placeholder="Телефон">' +
                '<input id="city" style="color: #fff" class="swal2-input" placeholder="Город доставки">'+
                '<div class="swal2-checkbox-container">' +
                '<input style="margin: 20px 10px 0 0" type="checkbox" id="paymentMethod1" class="swal2-checkbox">' +
                '<label for="paymentMethod1" class="swal2-checkbox-label">Наложенный платеж</label>' +
                '</div>' +
                '<div class="swal2-checkbox-container">' +
                '<input style="margin: 20px 10px 0 0" type="checkbox" id="paymentMethod2" class="swal2-checkbox">' +
                '<label for="paymentMethod2" class="swal2-checkbox-label">Оплата картой</label>' +
                '</div>',
            showCancelButton: true,
            confirmButtonText: 'Заказать',
            cancelButtonText: 'Отмена',
            customClass: {
                popup: popUp.customModal,
                confirmButton: popUp.customConfirm,
                title: popUp.customTitle,
            },
            preConfirm: () => {
                const name = document.getElementById('name').value;
                const phone = document.getElementById('phone').value;
                const city = document.getElementById('city').value;
                const paymentMethod1 = document.getElementById('paymentMethod1').checked;
                const paymentMethod2 = document.getElementById('paymentMethod2').checked;

                //Валидация формы
                if (!name || !phone || !city) {
                    Swal.showValidationMessage('Пожалуйста, заполните все поля');
                    return false;
                }
        
                if (phone.length < 10) {
                    Swal.showValidationMessage('Номер телефона введён с ошибкой');
                    return false;
                }

                if (!paymentMethod1 && !paymentMethod2) {
                    Swal.showValidationMessage('Выберите способ оплаты');
                    return false;
                }

                if (paymentMethod1 && paymentMethod2) {
                    Swal.showValidationMessage('Выберите только один способ оплаты');
                    return false;
                }

                const randomNumber = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
                const order = {
                    name: `Индивидуальный заказ #${randomNumber}`,
                    phone: phone,
                    price: totalPrice,
                    client: name,
                    city: city,
                    paymentMethod: (() => {
                        if (paymentMethod1) {
                            return 'Наложенный платёж'
                        } else if (paymentMethod2) { return 'Оплата картой' }
                    })(),
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