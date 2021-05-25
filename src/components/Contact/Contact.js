import React from 'react';
import styles from './Contact.module.scss';
import ContactMail from '../ContactMail/ContactMail';

const Contact = () => {
    return(
        <>
            <h1>
                Kontakt ze mną
            </h1>
            <p>Jestem otwarty na nowe możliwości. Jeżeli masz jakieś dla mnie, porozmawiajmy!</p>
            <div>
                <img />
                <img />
                <ContactMail />
            </div>
        </>
    )
};

export default Contact;