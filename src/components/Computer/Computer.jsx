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
            title: 'Форма заказа',
            html:
                '<input id="name" class="swal2-input" placeholder="ФИО">' +
                '<input id="phone" class="swal2-input" placeholder="Телефон">' +
                '<input id="city" class="swal2-input" placeholder="Город доставки">'+
                '<div class="swal2-checkbox-container">' +
                '<input style="margin-right: 10px" type="checkbox" id="paymentMethod1" class="swal2-checkbox">' +
                '<label style="color: #000" for="paymentMethod1" class="swal2-checkbox-label">Наложенный платеж</label>' +
                '</div>' +
                '<div class="swal2-checkbox-container">' +
                '<input style="margin-right: 10px" type="checkbox" id="paymentMethod2" class="swal2-checkbox">' +
                '<label style="color: #000" for="paymentMethod2" class="swal2-checkbox-label">Оплата картой</label>' +
                '</div>',
            showCancelButton: true,
            confirmButtonText: 'Заказать',
            cancelButtonText: 'Отмена',
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
                    phone: phone,
                    client: name,
                    city: city,
                    paymentMethod: (() => {
                        if (paymentMethod1) {
                            return 'Наложенный платёж'
                        } else if (paymentMethod2) { return 'Оплата картой' }
                    })(),
                };
                purchasedPCs.push(purchasedPC);
                localStorage.setItem('purchasedPCs', JSON.stringify(purchasedPCs));
        
                return {
                    name: name,
                    phone: phone,
                    city: city,
                    paymentMethod1: paymentMethod1,
                    paymentMethod2: paymentMethod2
                };
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