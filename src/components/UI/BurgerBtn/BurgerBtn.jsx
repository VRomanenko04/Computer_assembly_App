import React from 'react';
import cl from './burgerbtn.module.css';

export const BurgerBtn = (props) => {
    const {
        handleMenu,
        isOpen
    } = props;
    
    return (
        <div className={cl.burger__btn} onClick={handleMenu}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Menu / Menu_Alt_01">
                <path id="Vector" d="M12 17H19M5 12H19M5 7H19" stroke={isOpen ? '#ffffff' : '#7C6AFA'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
            </svg>
        </div>
    )
}