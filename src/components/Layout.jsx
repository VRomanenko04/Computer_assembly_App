import React from 'react';
import {  Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Navbar } from './Navbar/Navbar';

export const Layout = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}
