import React from 'react'
import cl from './social-item.module.css'

export const SocialItem = (props) => {
    return (
        <div className={cl.social__item}>
            <div className={cl.elipse}></div>
            <img src={props.link} alt="" className={cl.social__img}/>
        </div>
    )
}
