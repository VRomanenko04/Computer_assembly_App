import './navbar.css';
import React, { useState } from 'react';
import { Button } from '../UI/Button/Button';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
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
                                transition={{ ease: 'easeInOut', duration: 0.5 }}
                                type={{easeInOut}}
                            >
                                <ul className={`nav__list ${isOpen ? 'active__menu' : ''}`}>
                                    <motion.li 
                                        className='nav__li'
                                        initial={{ x: matches.small ? 300 : 0 }}
                                        animate={{ x: isOpen ? 0 : (matches.small ? 1000 : 0)}}
                                        transition={{ ease: 'easeInOut', duration: 1 }}
                                    >
                                        <NavLink className='link' to='/'>Главная</NavLink>
                                    </motion.li>
                                    <motion.li 
                                        className='nav__li'
                                        initial={{ x: matches.small ? 300 : 0 }}
                                        animate={{ x: isOpen ? 0 : (matches.small ? 1000 : 0)}}
                                        transition={{ ease: 'easeInOut', duration: 1, delay: 0.1 }}
                                    >
                                        <NavLink className='link' to='/ready'>Готовые ПК</NavLink>
                                    </motion.li>
                                    <motion.li 
                                        className='nav__li'
                                        initial={{ x: matches.small ? 300 : 0 }}
                                        animate={{ x: isOpen ? 0 : (matches.small ? 1000 : 0)}}
                                        transition={{ ease: 'easeInOut', duration: 1, delay: 0.2 }}
                                    >
                                        <NavLink className='link' to='/individual'>Индивидуальная сборка</NavLink>
                                    </motion.li>
                                    <motion.li 
                                        className='nav__li'
                                        initial={{ x: matches.small ? 300 : 0 }}
                                        animate={{ x: isOpen ? 0 : (matches.small ? 1000 : 0)}}
                                        transition={{ ease: 'easeInOut', duration: 1, delay: 0.3 }}
                                    >
                                        <NavLink className='link' to='/contact'>Контакты</NavLink>
                                    </motion.li>
                                    <motion.li 
                                        className='nav__li' 
                                        initial={{ x: matches.small ? 300 : 0 }}
                                        animate={{ x: isOpen ? 0 : (matches.small ? 1000 : 0)}}
                                        transition={{ ease: 'easeInOut', duration: 1, delay: 0.4 }}>
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
