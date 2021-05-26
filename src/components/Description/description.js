import React from 'react';
import styles from './Description.module.scss';
import ContactMail from '../ContactMail/ContactMail';
import lookImage from '../../assets/img/look.svg';

const Description = () => {
    return(
        <section className={styles.section}>
            <h1 className={styles.header}>
                Nazywam się Adam Bodzak i aspiruję do zostania <span className={styles.special}> Frontend developer </span> ze specjalnością <span className={styles.special}> React. </span> Zapraszam cię do przeczytania kilka słów na mój temat.
            </h1>
            <div className={styles.description}>
                <p className={styles.aboutMe}>
                    <img src={lookImage} className={styles.lookImage} alt={'look through the magnifying glass'} />
                    Do pierwszego spotkania z programowaniem doszło jeszcze w szkole średniej, to były przełom lat dwutysięcznych. W tym czasie z wykorzystaniem Turbo Paskal-a z pasją i zaangażowaniem opracowywałem pierwsze algorytmy, a w konsoli za pomocą gwiazdek, myślników i innych znaków tworzyłem kolejne widoki dla programowanego interfejsu. Jeszcze na studiach stworzyłem i opublikowałem pierwszą stronę internetową napisaną w czystym HTML-u. Drugą moją stronę internetową miałem przyjemność napisać w 2010r. Jako pracownik Biura Projektowego DROGOWIEC na stanowisku projektant infrastruktury drogowej. Kod tej strony umieściłem pod adresem portalu <a href='https://codesandbox.io/s/sharp-jepsen-8x70y'>CodeSandbox</a>. Będąc przez ponad 12 lat pracownikiem firmy DROGOWIEC przy wykorzystaniu oprogramowania Subassembly Composer opracowywałem algorytmy automatyzujące codzienną pracę projektanta wykorzystującego oprogramowanie Civil 3D firmy Autodesk. Stworzone algorytmy są dalej wykorzystywane przez pracowników firmy.
                </p>
            </div>
            <article className={styles.article}>
                Mam nadzieję że jesteś zainteresowany sprawdzeniem listy moich umiejętności, oraz nie zapomnij rzucić okiem na moje projekty.
                Obecnie szukam nowych wyzwań, więc byłbym wdzięczny za kontakt zemną.
            </article>
            <div className={styles.contactMail}>
                <ContactMail />
            </div>
        </section>
    )
}

export default Description;