import './navbar.css';
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '../UI/Button/Button';
import { BurgerBtn } from '../UI/BurgerBtn/BurgerBtn';
import { MenuLink } from './MenuLink/MenuLink';
import { AnimatePresence, motion } from 'framer-motion';
import Media from 'react-media';

import logo from '../../assets/logo_computer.svg';

export const Navbar = () => {
    //Состояния
    const [isOpen, setIsOpen] = useState(false);
    const [hideOrShow, setHideOrShow] = useState({});
    const location = useLocation();

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

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <header>
            <Link to='/'>
                <img className='logo' src={logo} alt="Logo"/>
            </Link>
            <div className='menu__wrapper'>
                <BurgerBtn isOpen={isOpen} handleMenu={handleMenu}/>
                <div className='nav nav__vision' style={hideOrShow}>
                    <nav className='nav__body'>
                    <Media queries={{ small: '(max-width: 1040px)' }}>
                    {(matches) => (
                        <AnimatePresence initial={false}>
                            <motion.ul
                                className={`nav__list ${isOpen ? 'active__menu' : ''}`}
                                initial={{ x: matches.small ? 300 : 0 }}
                                animate={{ x: isOpen ? 0 : (matches.small ? 500 : 0)}}
                                transition={{ duration: 0.5 }}
                            >
                                <MenuLink link='/' text='Главная' matches={matches} isOpen={isOpen} />
                                <MenuLink link='/ready' text='Готовые ПК' matches={matches} isOpen={isOpen} />
                                <MenuLink link='/individual' text='Индивидуальная сборка' matches={matches} isOpen={isOpen} />
                                <MenuLink link='/contact' text='Контакты' matches={matches} isOpen={isOpen} />
                                {location.pathname !== '/cabinet' && (
                                    <motion.li 
                                        className='nav__li'
                                        initial={{ x: matches.small ? 300 : 0 }}
                                        animate={{ x: isOpen ? 0 : (matches.small ? 500 : 0)}}
                                        transition={{ duration: 0.9 }}
                                    >
                                        <Button link='/cabinet' text='Зайти в кабинет'/>
                                    </motion.li>
                                )}
                            </motion.ul>
                        </AnimatePresence>
                    )}
                    </Media>
                    </nav>
                </div>
            </div>
        </header>
    )
}