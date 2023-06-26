import React from 'react';
import classes from './accordion.module.css';
import { motion, AnimatePresence } from 'framer-motion';

export const Accordion = (props) => {
    const {
        selectedType,
        setSelectedType,
        filteredComponents,
        selectedComponents,
        handleComponentClick
    } = props;

    const handleAccordionClick = (type) => {
        setSelectedType((prevSelectedType) => (prevSelectedType === type ? null : type));
    };

    return (
        <>
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
        </>
    )
}