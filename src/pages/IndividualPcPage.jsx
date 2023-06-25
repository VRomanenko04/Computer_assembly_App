import React, {useState} from 'react';
import classes from '../styles/individualPC.module.css';
import { PcItems } from '../data/pcItems.js';

const pcComponents = PcItems;

export const IndividualPcPage = () => {
    const [selectedType, setSelectedType] = useState(null);
    const [selectedComponents, setSelectedComponents] = useState({});
    const [totalPrice, setTotalPrice] = useState(799);

    const handleAccordionClick = (type) => {
        setSelectedType((prevSelectedType) => (prevSelectedType === type ? null : type));
    };

    const handleComponentClick = (type, component) => {
        setSelectedComponents((prevSelectedComponents) => {
            const updatedComponents = { ...prevSelectedComponents };
    
            if (updatedComponents[type] === component) {
                delete updatedComponents[type];
            } else {
                updatedComponents[type] = component;
            }
    
            let newTotalPrice = 799; // Установка начальной суммы
    
            // Пересчет суммы на основе выбранных компонентов
            Object.values(updatedComponents).forEach((selectedComponent) => {
                newTotalPrice += Number(selectedComponent.price);
            });
    
            setTotalPrice(newTotalPrice);
            return updatedComponents;
        });
    };

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
                    {['videocard', 'proc', 'motherboard', 'ram', 'cooling', 'memory', 'frame', 'power'].map((type) => (
                        <div key={type} className={classes.accordion}>
                            <div
                                className={selectedType === type ? classes.accordionButtonActive : classes.accordionButton}
                                onClick={() => handleAccordionClick(type)}
                            >
                                {type}
                            </div>
                            {selectedType === type && (
                                <ul className={classes.componentList}>
                                    {filteredComponents.map((component) => (
                                        <li
                                            key={component.name}
                                            className={`${classes.componentItem} ${
                                                selectedComponents[type] === component ? classes.componentItemActive : ''
                                            }`}
                                            onClick={() => handleComponentClick(type, component)}
                                        >
                                            <p>{component.name} - <strong>{component.price} грн</strong></p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className={classes.total__order}>
                <p className={classes.total__price}>Конечная сумма: <strong>{totalPrice} грн</strong></p>
                <button className={classes.btn}>Заказать</button>
            </div>
        </main>
    )
}