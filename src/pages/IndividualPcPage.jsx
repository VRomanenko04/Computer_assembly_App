import React, { useState, useEffect } from 'react';
import classes from '../styles/individualPC.module.css';
import { PcItems } from '../data/pcItems.js';
import { motion, AnimatePresence } from 'framer-motion';

const pcComponents = PcItems;

export const IndividualPcPage = () => {
    const [selectedType, setSelectedType] = useState(null);
    const [selectedComponents, setSelectedComponents] = useState({});
    const [totalPrice, setTotalPrice] = useState(799);
    const [isOrderEnabled, setIsOrderEnabled] = useState(false);

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

    useEffect(() => {
        // Проверка наличия выбранного компонента в каждом аккордеоне
        const isOrderEnabled = Object.keys(selectedComponents).length === 8;
        setIsOrderEnabled(isOrderEnabled);
    }, [selectedComponents]);

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
                            <motion.div
                                className={selectedType === type ? classes.accordionButtonActive : classes.accordionButton}
                                onClick={() => handleAccordionClick(type)}
                            >
                                {type}
                            </motion.div>
                            <AnimatePresence>
                                {selectedType === type && (
                                    <motion.ul 
                                        className={classes.componentList}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        {filteredComponents.map((component) => (
                                            <motion.li
                                                key={component.name}
                                                className={`${classes.componentItem} ${
                                                    selectedComponents[type] === component ? classes.componentItemActive : ''
                                                }`}
                                                onClick={() => handleComponentClick(type, component)}
                                            >
                                                <p>{component.name} - <strong>{component.price} грн</strong></p>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
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