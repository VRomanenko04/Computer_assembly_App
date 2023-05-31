import React from 'react'
import cl from '../styles/layout.module.css';
import { Link, NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <header>
                <img src="/imgs/logo_computer.svg" alt="Logo"/>
                <nav>
                    <ul className={cl.navbar}>
                        <li><NavLink className={cl.link} to='/'>Главная</NavLink></li>
                        <li><NavLink className={cl.link} to='/ready'>Готовые ПК</NavLink></li>
                        <li><NavLink className={cl.link} to='/individual'>Индивидуальная сборка</NavLink></li>
                        <li><NavLink className={cl.link} to='/contact'>Контакты</NavLink></li>
                    </ul>
                </nav>
                <Link className={cl.btn}>Зайти в кабинет</Link>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>
                <p></p>
            </footer>
        </>
    )
}
