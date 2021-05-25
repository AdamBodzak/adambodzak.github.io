import React from 'react';
import styles from './Description.module.scss';
import ContactMail from '../ContactMail/ContactMail';

const Description = () => {
    return(
        <section className={styles.description}>
            <h1 className={styles.header1}>
                Nazywam się Adam Bodzak i aspiruję do zostania <br /> <span className={styles.special}> Frontend developer </span> ze specjalnością <span className={styles.special}> React.</span>
            </h1>
            <p className={styles.paragraph}>
                Mam nadzieję że jesteś zainteresowany sprawdzeniem listy moich umiejętności.
                Nie zapomnij rzucić okiem na moje projekty.
                Obecnie szukam nowych wyzwań, więc byłbym wdzięczny za kontakt zemną.
            </p>
            <div className={styles.contactMail}>
                <ContactMail />
            </div>
        </section>
    )
}

export default Description;