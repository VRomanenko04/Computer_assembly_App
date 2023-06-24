import React from 'react';
import './menu_link.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const MenuLink = (props) => {
    const {
        link,
        text,
        matches,
        isOpen
    } = props;
    
    return (
        <motion.li
        className='nav__li'
        initial={{ x: matches.small ? -100 : 0 }}
        animate={{ x: isOpen ? 0 : (matches.small ? 500 : 0) }}
        transition={{ duration: 0.5, delay: 0.3 }}
        >
            <NavLink className='link' to={link}>{text}</NavLink>
        </motion.li>
    )
}
