import './navbar.css';
import React, { useState } from 'react';
import { Button } from '../UI/Button/Button';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hideOrShow, setHideOrShow] = useState({});

    const handleMenu = () => {
        setIsOpen((prev) => !prev);
        setHideOrShow(() => {
            if (isOpen) {
                return {};
            } else {
                return { display: 'flex'};
            }
        });
    }

    return (
        <header>
            <img className='logo' src="/Computer_assembly_App/imgs/logo_computer.svg" alt="Logo"/>
            <div className='menu__wrapper'>
                {isOpen ? <button onClick={handleMenu}>Close</button> : <button onClick={handleMenu}>Open</button>}
                <div className='nav nav__vision' style={hideOrShow}>
                    <nav className='nav__body'>
                        <ul className={`nav__list ${isOpen ? 'active__menu' : ''}`}>
                            <li className='nav__li'><NavLink className='link' to='/'>Главная</NavLink></li>
                            <li className='nav__li'><NavLink className='link' to='/ready'>Готовые ПК</NavLink></li>
                            <li className='nav__li'><NavLink className='link' to='/individual'>Индивидуальная сборка</NavLink></li>
                            <li className='nav__li'><NavLink className='link' to='/contact'>Контакты</NavLink></li>
                            <li className='nav__li'><Button link='/cabinet' text='Зайти в кабинет'/></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
