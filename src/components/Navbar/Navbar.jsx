import './navbar.css';
import React from 'react';
import { Button } from '../UI/Button/Button';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    return (
        <div>
            <nav>
                <ul className='navbar'>
                    <li className='nav__li'><NavLink className='link' to='/'>Главная</NavLink></li>
                    <li className='nav__li'><NavLink className='link' to='/ready'>Готовые ПК</NavLink></li>
                    <li className='nav__li'><NavLink className='link' to='/individual'>Индивидуальная сборка</NavLink></li>
                    <li className='nav__li'><NavLink className='link' to='/contact'>Контакты</NavLink></li>
                    <li className='nav__li'><Button link='/cabinet' text='Зайти в кабинет'/></li>
                </ul>
            </nav>
        </div>
    )
}
