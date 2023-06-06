import React from 'react';
import cl from '../styles/contacts.module.css';

export const ContactPage = () => {

    return (
        <main className={cl.container}>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1388.2480033685767!2d36.21600125976182!3d50.01571199533164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a13c8bee449f%3A0xbd1c1f7b125ccec6!2z0JrQu9C-0YfQutC-0LLRgdC60LDRjyDRg9C7LiwgMTc4LCDQpdCw0YDRjNC60L7Qsiwg0KXQsNGA0YzQutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjEwMDA!5e0!3m2!1sru!2sua!4v1686072666384!5m2!1sru!2sua"
            className={cl.map}
            title="Google Maps"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className={cl.contact__text}>Заказы можно забрать как по адресу: <br />  г.Харьков, ул.Клочковская, 178 <br /> Так и почтой на отделения Новой Почты</p>
        </main>
    )
}
