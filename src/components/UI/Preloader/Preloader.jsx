import React from 'react';
import clas from './preloader.module.css';

export const Preloader = () => {
    return (
        <div className={clas.loader}>
            <div className={clas.d1}></div>
            <div className={clas.d2}></div>
            <div className={clas.d3}></div>
            <div className={clas.d4}></div>
            <div className={clas.d5}></div>
        </div>
    )
}
