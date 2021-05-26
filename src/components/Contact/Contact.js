import React from 'react';
import styles from './Contact.module.scss';
import ContactMail from '../ContactMail/ContactMail';
import GitHubIcon from '../../assets/img/GitHubIcon.svg';
import fb from '../../assets/img/FB.svg';

const Contact = () => {
    return(
        <section className={styles.section}>
            <h1 className={styles.headerView}>
                Kontakt ze mną
            </h1>
            <p className={styles.paragraf}>Jestem otwarty na nowe możliwości. Jeżeli masz jakieś dla mnie, porozmawiajmy!</p>
            <div className={styles.contact}>
                <div className={styles.socialMedia}>
                    <a href={'https://github.com/AdamBodzak'}>
                        <img
                            className={styles.image}
                            src={GitHubIcon}
                            alt={'GitHub Icon'}
                        />
                    </a>
                    <a target={'_blank'} rel={"noreferrer"} href={'https://www.facebook.com/adam.bodzak.16/'}>
                        <img
                            className={styles.image}
                            src={fb}
                            alt={'Facebook Icon'}
                        />
                    </a>
                </div>
                <ContactMail />
            </div>
        </section>
    )
};

export default Contact;