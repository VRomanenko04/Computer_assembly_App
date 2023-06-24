import React from 'react'
import cl from './social-item.module.css'

export const SocialItem = (props) => {
    const {
        link
    } = props;
    
    return (
        <div className={cl.social__item}>
            <div className={cl.elipse}></div>
            <img src={link} alt="" className={cl.social__img}/>
        </div>
    )
}
