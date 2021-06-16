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
                    Do pierwszego spotkania z programowaniem doszło jeszcze w szkole średniej, to były przełom lat dwutysięcznych. W tym czasie z wykorzystaniem edytora Turbo Paskal-a z pasją i zaangażowaniem opracowywałem pierwsze algorytmy, a w konsoli za pomocą gwiazdek, myślników i innych znaków tworzyłem kolejne widoki dla programowanego interfejsu. To wtedy zrozumiałem podstawowe pojęcia związane z programowaniem takie jak zmienne, procedury, pętle i typy pętli, instrukcje warunkowe, operatory, jak pobrać dane, jak wyświetlić, itp. Jeszcze na studiach stworzyłem i opublikowałem pierwszą stronę internetową, co prawda napisaną w czystym HTML-u, ale za to w pełni funkcjonalną i spełniającą założenia dla których ją stworzono. To był początek lat 2000. Wtedy wystarczyło aby początkująca firma, z małym kapitałem miała swoje miejsce w internecie gdzie napisze coś o sobie, o swoich produktach i rzecz najważniejsza kontakt. Bez kontaktu sie nie liczyło. W 2010r. jako pracownik Biura Projektowego DROGOWIEC na stanowisku projektant infrastruktury drogowej, miałem przyjemność napisać drugą moją stronę internetową. Na szczęście kod tej strony znalazłem w archiwum serwera i mogłem go umieścić w repozytorium <a target={'_blank'} rel={"noreferrer"} href={'https://github.com/AdamBodzak/secondPageDROGOWIEC'}>GitHub</a>, oraz pod adresem portalu <a target={'_blank'} rel={"noreferrer"} href='https://codesandbox.io/s/sharp-jepsen-8x70y'>CodeSandbox</a>. Kod tej strony w dużej mierze napisana z wykorzystaniem programu Pajączek NxG PRO oraz Galernik NxG. Program Galernik pozwolił mi na zautomatyzowanie dodawania galerii zdjęć na strony. Będąc przez ponad 12 lat pracownikiem firmy DROGOWIEC, przy wykorzystaniu oprogramowania Subassembly Composer firmy Autodesk opracowywałem i rozwijałem algorytmy automatyzujące codzienną pracę projektanta wykorzystującego oprogramowanie Civil 3D firmy Autodesk. Program Subassembly Composer jest narzędziem automatyzującym, swego rodzaju platformą z grupy Low-Code. Pozwala programiście skupić się nad projektowaną funkcjonalnością. Przy okazji należy podkreślić że stworzone algorytmy są dalej wykorzystywane przez pracowników firmy. Do dodatkowych zadań należało również zarządzanie i administrowanie siecią biura i wykonywaniem wszelkiego rodzaju zadań z tym związanych.
                </p>
            </div>
            <article className={styles.article}>
                Mam nadzieję że jesteś zainteresowany sprawdzeniem listy moich <a href={'http://localhost:3000/skills'}>umiejętności</a>, oraz nie zapomnij rzucić okiem na <a href={'http://localhost:3000/projects'}>moje projekty</a>.
                Obecnie szukam nowych wyzwań, więc byłbym wdzięczny za kontakt zemną.
            </article>
            <div className={styles.contactMail}>
                <ContactMail />
            </div>
        </section>
    )
}

export default Description;