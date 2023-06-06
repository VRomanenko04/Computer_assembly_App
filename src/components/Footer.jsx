import React from 'react'
import cl from '../styles/footer.module.css'
import { SocialItem } from './UI/SocialItem/SocialItem'

export const Footer = () => {
    return (
        <div className={cl.footer}>
            <div className={cl.social__container}>
                <a href='https://www.youtube.com'>
                    <SocialItem link='/imgs/youtube_comp.svg'/>
                </a>
                <a href='https://www.facebook.com'>
                    <SocialItem link='/imgs/facebook_comp.svg'/>
                </a>
                <a href='https://www.instagram.com'>
                    <SocialItem link='/imgs/instagram_comp.svg'/>
                </a>
            </div>
            <p className={cl.footer_text}>OutPC ©Copr. 2023</p>
        </div>
    )
}
