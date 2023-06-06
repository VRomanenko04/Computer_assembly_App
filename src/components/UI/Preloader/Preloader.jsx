import React from 'react';
import clas from './preloader.module.css'

export const Preloader = () => {
    return (
        <>
            <img src="/imgs/preload_comp.gif" alt="" className={clas.loading}/>
        </>
    )
}
