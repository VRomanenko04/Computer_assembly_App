import React from 'react'
import '../styles/layout.css';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <ul className='navbar'>
                        <li><NavLink className='link' to='/'>Главная</NavLink></li>
                        <li><NavLink className='link' to='/ready'>Готовые ПК</NavLink></li>
                        <li><NavLink className='link' to='/individual'>Индивидуальная сборка</NavLink></li>
                        <li><NavLink className='link' to='/contact'>Контакты</NavLink></li>
                    </ul>
                </nav>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>
                <p>2023</p>
            </footer>
        </>
    )
}
