import React from 'react';
import cl from '../styles/footer.module.css';
import { SocialItem } from './UI/SocialItem/SocialItem';

import logo1 from '../assets/youtube_comp.svg';
import logo2 from '../assets/facebook_comp.svg';
import logo3 from '../assets/instagram_comp.svg';

export const Footer = () => {
    return (
        <div className={cl.footer}>
            <div className={cl.social__container}>
                <a href='https://www.youtube.com'>
                    <SocialItem link={logo1}/>
                </a>
                <a href='https://www.facebook.com'>
                    <SocialItem link={logo2}/>
                </a>
                <a href='https://www.instagram.com'>
                    <SocialItem link={logo3}/>
                </a>
            </div>
            <p className={cl.footer_text}>OutPC ©Copr. 2023</p>
        </div>
    )
}
