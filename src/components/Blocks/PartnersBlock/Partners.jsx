import React from 'react';
import classes from './partners.module.css';

export const Partners = () => {
    return (
        <section className={classes.partners}>
            <div className={classes.partners_head}>
                <img src="/Computer_assembly_App/imgs/Ellipse_partners.svg" alt='' className={classes.partners_logo}/>
                <h2 className={classes.partners_text}>Партнеры - топовые бренды</h2>
            </div>
            <div className={classes.grid_container}>
                <div className={classes.grid_comp}>
                    <img src="/Computer_assembly_App/imgs/logo_msi.png" alt="" className={classes.partner}/>
                    <img src="/Computer_assembly_App/imgs/logo_msi.png" alt="" className={classes.partner}/>
                    <img src="/Computer_assembly_App/imgs/logo_msi.png" alt="" className={classes.partner}/>
                    <img src="/Computer_assembly_App/imgs/logo_msi.png" alt="" className={classes.partner}/>
                    <img src="/Computer_assembly_App/imgs/logo_msi.png" alt="" className={classes.partner}/>
                    <img src="/Computer_assembly_App/imgs/logo_msi.png" alt="" className={classes.partner}/>
                    <img src="/Computer_assembly_App/imgs/logo_msi.png" alt="" className={classes.partner}/>
                    <img src="/Computer_assembly_App/imgs/logo_msi.png" alt="" className={classes.partner}/>
                </div>
            </div>
        </section>
    )
}
