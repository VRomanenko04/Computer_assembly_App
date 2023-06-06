import React from 'react';
import '../styles/layout.css';
import { NavLink, Outlet } from 'react-router-dom';
import { Button } from './UI/Button/Button';
import { Footer } from './Footer';

export const Layout = () => {
    return (
        <>
            <header>
                <img src="/imgs/logo_computer.svg" alt="Logo"/>
                <nav>
                    <ul className='navbar'>
                        <li><NavLink className={`link`} to='/'>Главная</NavLink></li>
                        <li><NavLink className={'link'} to='/ready'>Готовые ПК</NavLink></li>
                        <li><NavLink className={'link'} to='/individual'>Индивидуальная сборка</NavLink></li>
                        <li><NavLink className={'link'} to='/contact'>Контакты</NavLink></li>
                    </ul>
                </nav>
                <Button link='/cabinet' text='Зайти в кабинет'/>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}
