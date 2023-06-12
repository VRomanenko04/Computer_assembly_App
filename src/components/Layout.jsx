import React from 'react';
import '../styles/layout.css';
import {  Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Navbar } from './Navbar/Navbar';

export const Layout = () => {
    return (
        <>
            <header>
                <img src="/Computer_assembly_App/imgs/logo_computer.svg" alt="Logo"/>
                <Navbar/>
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
