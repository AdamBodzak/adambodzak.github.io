import React from 'react';
import styles from './Skills.module.scss';

import strongImage from '../../assets/img/strong.svg';
import faceImage from '../../assets/img/face.svg';
import hatImage from '../../assets/img/hat.svg';
import skillsImage from '../../assets/img/Skills.svg';

const Skills = () => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <h1 className={styles.headerView}>Moje Umiejętności</h1>
                <p className={styles.paragraf}>
                    Programowaniem z pasji zajmuję się od ponad 10 lat, podążając za nowymi wyzwaniami, chcąc ciągle poszerzać swoją wiedzę. Uczestniczę w szeregu szkoleń i kursów z dziedziny frontend-owej oto następujące:
                </p>
                <img
                    src={skillsImage}
                    className={styles.skillsImage}
                    alt={'skills'}
                />
            </div>
            <ul className={styles.courseList}>
                <li className={styles.courseItem}>
                    5 godz. kurs <b> React od podstaw </b> prowadzony przez <b> Adama Romanowskiego </b> na platformie <a target={'_blank'} rel={"noreferrer"} href={'https://eduweb.pl/programowanie-i-www/reactjs/react-od-podstaw'}>eduweb.pl</a>. Zapraszam do obejrzenia mojego repozytorium na <a target={'_blank'} rel={"noreferrer"} href={'https://github.com/AdamBodzak/AdamRomanowski_kursReactOdPodstaw.git'}>GitHub</a> oraz rezultatów mojej pracy na serwerze <a target={'_blank'} rel={"noreferrer"} href={'https://adam-romanowski-kurs-react-od-podstaw-adambodzak.vercel.app/'}>Vercel</a>. Wersja ostateczna projektu została przeze mnie wzbogacona o dodatkowe funkcjonalności o których można szerzej poczytać w pliku README.md dołączonym do repozytorium <a target={'_blank'} rel={"noreferrer"} href={'https://github.com/AdamBodzak/AdamRomanowski_kursReactOdPodstaw.git'}>GitHub</a>.
                </li>
                <li className={styles.courseItem}>
                    7 godz. kurs <b> React w praktyce </b> prowadzony przez <b> Adama Romanowskiego </b> na platformie <a target={'_blank'} rel={"noreferrer"} href={'https://eduweb.pl/programowanie-i-www/reactjs/react-w-praktyce'}>eduweb.pl</a>
                </li>
                <li className={styles.courseItem}>
                    12 tygodniowy <b> kurs nauki React </b> prowadzony przez <b> Michała Taszyckiego </b> na stronie internetowej <a target={'_blank'} rel={"noreferrer"} href={'https://kursreacta.pl'}>Kurs React-a</a>. Kurs składa się z dwóch części. Część pierwsza <b> Kurs Reacta - Szybki Start </b> powstała aplikacja której zadaniem jest odtwarzanie muzyki która jest dostarczana w postali adresów URL z serwera. Zapraszam do obejrzenia mojego repozytorium na <a target={'_blank'} rel={"noreferrer"} href={'https://github.com/AdamBodzak/CourseReact_QuickStart_MichalTaszycki'}>GitHub</a> oraz rezultatów mojej pracy na serwerze <a target={'_blank'} rel={"noreferrer"} href={'https://course-react-quick-start-michal-taszycki.vercel.app/'}>Vercel</a>. Część dróga <b>Kurs Reacta - Fundamenty i Kurs Reacta - Expert</b> W ramach kursu powstała aplikacja do odliczania interwałów czasowych dla poszczególnych zadań.
                </li>
                <li className={styles.courseItem}>
                    3 Modułowy kurs <b> Opanuj JavaScript </b> prowadzony przez <b> Adam Gospodarczyk, Przemek Smyrdek, Marcin Czarkowski </b> organizowany przez <a target={'_blank'} rel={"noreferrer"} href={'https://przeprogramowani.pl/kurs-javascript'}>Przeprogramowani</a>. W ramach kursu zrealizowałem ponad 60 zadań i 9 projektów które ugruntowały moją wiedzę z zakresu poszczególnych metod JavaScript-u.
                </li>
                <li className={styles.courseItem}>
                    10 godz. kurs <b> JavaScrypt w Praktyce </b> prowadzony przez <b> Piotr Palarz </b> na platformie <a target={'_blank'} rel={"noreferrer"} href={'https://eduweb.pl/programowanie-i-www/javascript/javascript-w-praktyce'}>eduweb.pl</a>. Stanowi idealne rozszerzenie, uzupełnienie kursu organizowanego przez Przeprogramowanych.
                </li>
                <li className={styles.courseItem}>
                    13 tygodniowy kurs prowadzony przez <b> Macieja Korsana </b> na stronie internetowej <a target={'_blank'} rel={"noreferrer"} href={'https://cotenfrontend.pl'}>WTF: Co Ten Frontend</a>. W ramach wykonywania masy zadań, nauczyłem się podstaw nowoczesnego frontendu. Dowiedziałem się czym są i jak działają potrzebne w codziennej pracy narzędzia.
                </li>
                <li className={styles.courseItem}>
                    7 Modułowy kurs <b> GraphQL Mastery </b> prowadzony przez <b> Michała Taszyckiego </b> na stronie internetowej <a target={'_blank'} rel={"noreferrer"} href={'https://graphqlmastery.pl'}>GraphQL Mastery</a>. W ramach kursu powstała aplikacja back-end używając Apollo Server i Node.js, oraz front-end w React.js, Chakra UI i React Router.
                </li>
                <li className={styles.courseItem}>
                    3,5 godz. kurs <b> Figma projektowanie interfejsów </b> prowadzony przez <b> Grzegorza Rógę </b> na platformie <a target={'_blank'} rel={"noreferrer"} href={'https://eduweb.pl/grafika-i-interfejsy/figma/figma-projektowanie-interfejsow'}>eduweb.pl</a>
                </li>
            </ul>
            <p className={styles.paragraf}>
                Uczestnictwo w powyższych szkoleniach pozwoliło mi zdobyć następujące umiejętności:
            </p>


            <div className={styles.skills}>
                <article className={styles.article}>
                    <img className={styles.image} src={strongImage} alt={'strong'} />
                    <h2 className={styles.header}>Posiadam wiedza praktyczną</h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            ReactJS
                            <ul className={styles.secondUL}>
                                <li className={styles.secondItem}>
                                    React Router i funkcją Switch, NavLink
                                </li>
                                <li className={styles.secondItem}>
                                    props-y i przekazywanie danych
                                </li>
                                <li className={styles.secondItem}>
                                    PropType walidacja zmiennych
                                </li>
                                <li className={styles.secondItem}>
                                    komponenty class-owe
                                </li>
                                <li className={styles.secondItem}>
                                    cykl życia komponentu class-owego
                                </li>
                                <li className={styles.secondItem}>
                                    stan komponentu i jego modyfikacja
                                </li>
                                <li className={styles.secondItem}>
                                    Context API
                                </li>
                            </ul>
                        </li>
                        <li className={styles.listItem}>
                            {'JSX (syntactic sugar)'}
                        </li>
                        <li className={styles.listItem}>
                            polyfill
                        </li>
                        <li className={styles.listItem}>
                            Deployment aplikacji na serwer
                        </li>
                        <li className={styles.listItem}>
                            JavaScript ES6+
                            <ul className={styles.secondUL}>
                                <li className={styles.secondItem}>
                                    JavaScript
                                </li>
                            </ul>
                        </li>
                        <li className={styles.listItem}>
                            Semantyczny HTML5
                        </li>
                        <li className={styles.listItem}>
                            CSS i SCSS
                            <ul className={styles.secondUL}>
                                <li className={styles.secondItem}>
                                    CSS Module
                                </li>
                                <li className={styles.secondItem}>
                                    Animacja CSS i plików SVG
                                </li>
                                <li className={styles.secondItem}>
                                    CSS in JS
                                </li>
                                <li className={styles.secondItem}>
                                    Flexbox i boxmodel
                                </li>
                                <li className={styles.secondItem}>
                                    CSS Grid
                                </li>
                            </ul>
                        </li>
                        <li className={styles.listItem}>
                            obsługa programu Figma
                        </li>
                        <li className={styles.listItem}>
                            obsługa programu Git
                        </li>
                        <li className={styles.listItem}>
                            obsługa programu NPM
                        </li>
                        <li className={styles.listItem}>
                            i wiele więcej...
                        </li>
                    </ul>
                </article>
                <article className={styles.article}>
                    <img className={styles.image} src={faceImage} alt={'face'} />
                    <h2 className={styles.header}>Wiem coś na temat</h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            Node.JS
                        </li>
                        <li className={styles.listItem}>
                            GraphQL
                        </li>
                        <li className={styles.listItem}>
                            TypeScript
                        </li>
                        <li className={styles.listItem}>
                            Program Jest i testowanie na froncie
                        </li>
                    </ul>
                </article>
                <article className={styles.article}>
                    <img className={styles.image} src={hatImage} alt={'hat'} />
                    <h2 className={styles.header}>Chcę cię nauczyć</h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            Gatsby
                        </li>
                        <li className={styles.listItem}>
                            REST
                        </li>
                        <li className={styles.listItem}>
                            Server side rendering
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
};

export default Skills;