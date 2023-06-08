import React from 'react';
import clas from './preloader.module.css'

export const Preloader = () => {
    return (
        <>
            <img src="/Computer_assembly_App/imgs/preload_comp.gif" alt="" className={clas.loading}/>
        </>
    )
}
