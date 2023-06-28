import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import classes from '../styles/individualPC.module.css';
import { PcItems } from '../data/pcItems.js';
import { Accordion } from '../components/UI/Accordion/Accordion.jsx';
import { OrderBtn } from '../components/UI/IndividualBtn/OrderBtn';

const pcComponents = PcItems;

export const IndividualPcPage = () => {
    // Состояния компонента
    const [selectedType, setSelectedType] = useState(null);
    const [selectedComponents, setSelectedComponents] = useState({});
    const [totalPrice, setTotalPrice] = useState(799);
    const [isOrderEnabled, setIsOrderEnabled] = useState(false);

    // Обработчик клика по компоненту
    const handleComponentClick = (type, component) => {
        setSelectedComponents((prevSelectedComponents) => {
            const updatedComponents = { ...prevSelectedComponents };
            
            // Проверяем, был ли компонент уже выбран, и добавляем или удаляем его из списка выбранных компонентов
            if (updatedComponents[type] === component) {
                delete updatedComponents[type];
            } else {
                updatedComponents[type] = component;
            }

            // Пересчет суммы на основе выбранных компонентов
            let newTotalPrice = 799; // Установка начальной суммы
            Object.values(updatedComponents).forEach((selectedComponent) => {
                newTotalPrice += Number(selectedComponent.price);
            });
    
            setTotalPrice(newTotalPrice);
            return updatedComponents;
        });
    };

    useEffect(() => {
        // Проверка наличия выбранного компонента в каждом аккордеоне
        const isOrderEnabled = Object.keys(selectedComponents).length === 8;
        setIsOrderEnabled(isOrderEnabled);
    }, [selectedComponents]);

    // Фильтрация компонентов на основе выбранного типа
    const filteredComponents = selectedType
    ? pcComponents.filter((component) => component.type === selectedType)
    : pcComponents;

    //Модальное окно, перенос заказа в localStor
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
                }
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
        <main className={classes.main}>
            <div className={classes.container}>
                <div className={classes.service}>
                    <p>Услуга сборки и тестирования ПК - <strong>799 грн</strong></p>
                </div>
                <div className={classes.accordionContainer}>
                    <Accordion 
                        selectedType={selectedType} 
                        setSelectedType={setSelectedType}
                        filteredComponents={filteredComponents}
                        selectedComponents={selectedComponents}
                        handleComponentClick={handleComponentClick}
                    />
                </div>
            </div>
            <div className={classes.total__order}>
                <p className={classes.total__price}>Конечная сумма: <strong>{totalPrice} грн</strong></p>
                <OrderBtn
                    isOrderEnabled={isOrderEnabled}
                    handleModal={handleModal}
                />
            </div>
        </main>
    )
}