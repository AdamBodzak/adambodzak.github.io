import React from 'react';
import styles from './ContactMail.module.scss';

const ContactMail = () => {
    return(
        <a className={styles.mail} href={"mailto:bodzak.adam@gmail.com"}>bodzak.adam@gmail.com</a>
    )
};

export default ContactMail;