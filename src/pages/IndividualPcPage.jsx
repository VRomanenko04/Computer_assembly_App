import React, { useState, useEffect } from 'react';
import classes from '../styles/individualPC.module.css';
import { PcItems } from '../data/pcItems.js';
import { Accordion } from '../components/UI/Accordion/Accordion.jsx';

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
                {isOrderEnabled ? 
                ( <button className={classes.btn}>Заказать</button> ) : 
                (
                    <div className={classes.message}>
                        <p>Выберите все комплектующие для заказа</p>
                    </div>
                )}
            </div>
        </main>
    )
}