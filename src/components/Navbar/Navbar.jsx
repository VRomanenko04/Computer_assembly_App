import './navbar.css';
import React, { useState } from 'react';
import { Button } from '../UI/Button/Button';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Media from 'react-media';

export const Navbar = () => {
    //Состояния
    const [isOpen, setIsOpen] = useState(false);
    const [hideOrShow, setHideOrShow] = useState({});

    //Смена состояния и стиля элемента
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

    const MenuLink = ({ link, text, delay, matches, isOpen }) => {
        return (
            <motion.li
            className='nav__li'
            initial={{ x: matches.small ? 300 : 0 }}
            animate={{ x: isOpen ? 0 : (matches.small ? 1000 : 0) }}
            transition={{ duration: 1, delay: 0.5 }}
            >
                <NavLink className='link' to={link}>{text}</NavLink>
            </motion.li>
        )
    }


    return (
        <header>
            <img className='logo' src="/Computer_assembly_App/imgs/logo_computer.svg" alt="Logo"/>
            <div className='menu__wrapper'>
                {isOpen ? <button onClick={handleMenu}>Close</button> : <button onClick={handleMenu}>Open</button>}
                <div className='nav nav__vision' style={hideOrShow}>
                    <nav className='nav__body'>
                    <Media queries={{ small: '(max-width: 1040px)' }}>
                    {(matches) => (
                        <AnimatePresence initial={false}>
                            <motion.div
                                className={`nav__list ${isOpen ? 'active__menu' : ''}`}
                                initial={{ x: matches.small ? 300 : 0 }}
                                animate={{ x: isOpen ? 0 : (matches.small ? 500 : 0)}}
                                transition={{ duration: 0.5 }}
                            >
                                <ul className={`nav__list ${isOpen ? 'active__menu' : ''}`}>
                                    <MenuLink link='/' text='Главная' matches={matches} isOpen={isOpen} />
                                    <MenuLink link='/ready' text='Готовые ПК' matches={matches} isOpen={isOpen} />
                                    <MenuLink link='/individual' text='Индивидуальная сборка' matches={matches} isOpen={isOpen} />
                                    <MenuLink link='/contact' text='Контакты' matches={matches} isOpen={isOpen} />
                                    <motion.li 
                                        className='nav__li' 
                                        initial={{ x: matches.small ? 300 : 0 }}
                                        animate={{ x: isOpen ? 0 : (matches.small ? 1000 : 0)}}
                                        transition={{ duration: 1, delay: 0.5 }}>
                                        <Button link='/cabinet' text='Зайти в кабинет'/>
                                    </motion.li>
                                </ul>
                            </motion.div>
                        </AnimatePresence>
                    )}
                    </Media>
                    </nav>
                </div>
            </div>
        </header>
    )
}
