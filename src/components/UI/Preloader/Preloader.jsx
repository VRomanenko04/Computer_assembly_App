import React from 'react';
import clas from './preloader.module.css';
import preloader from '../../../assets/preload_comp.gif';

export const Preloader = () => {
    return (
        <>
            <img src={preloader} alt="" className={clas.loading}/>
        </>
    )
}
