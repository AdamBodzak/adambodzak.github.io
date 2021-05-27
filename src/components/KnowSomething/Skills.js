import React from 'react';
import styles from './Skills.module.scss';

import strongImage from '../../assets/img/strong.svg';
import faceImage from '../../assets/img/face.svg';
import hatImage from '../../assets/img/hat.svg';
import skillsImage from '../../assets/img/Skills.svg';

const Skills = () => {
    return(
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <h1 className={styles.headerView}>Moje Umiejętności</h1>
                <p className={styles.paragraf}>
                    Programowaniem z pasji zajmuję się od ponad 10 lat, podążając za nowymi wyzwaniami, chcąc ciągle poszerzać swoją wiedzę. Uczestniczę w szeregu szkoleń i kursów z dziedziny frontend-owej oto następujące:
                </p>
                <img
                    src={skillsImage}
                    className={styles.skillsImage}
                />
            </div>
            <ul className={styles.courseList}>
                <li className={styles.courseItem}>
                    5 godz. kurs React od podstaw prowadzony przez Adama Romanowskiego na platformie <a target={'_blank'} rel={"noreferrer"} href={'https://eduweb.pl/programowanie-i-www/reactjs/react-od-podstaw'}>eduweb.pl</a> zapraszam do obejrzenia mojego repozytarium na <a target={'_blank'} rel={"noreferrer"} href={'https://github.com/AdamBodzak/AdamRomanowski_kursReactOdPodstaw.git'}>GitHub</a>
                </li>
                <li className={styles.courseItem}>
                    7 godz. kurs React w praktyce prowadzony przez Adama Romanowskiego na platformie <a target={'_blank'} rel={"noreferrer"} href={'https://eduweb.pl/programowanie-i-www/reactjs/react-w-praktyce'}>eduweb.pl</a>
                </li>
                <li className={styles.courseItem}>
                    12 tygodniowy kurs nauki React prowadzony przez Michała Taszyckiego na stronie internetowej <a target={'_blank'} rel={"noreferrer"} href={'https://kursreacta.pl'}>Kurs React-a</a>
                </li>
                <li className={styles.courseItem}>
                    3 Modułowy kurs Opanuj JavaScript prowadzony przez Adam Gospodarczyk, Przemek Smyrdek, Marcin Czarkowski organizowany przez <a target={'_blank'} rel={"noreferrer"} href={'https://przeprogramowani.pl/kurs-javascript'}>Przeprogramowani</a>
                </li>
                <li className={styles.courseItem}>
                    10 godz. kurs JavaScrypt w Praktyce prowadzony przez Piotr Palarz na platformie <a target={'_blank'} rel={"noreferrer"} href={'https://eduweb.pl/programowanie-i-www/javascript/javascript-w-praktyce'}>eduweb.pl</a>
                </li>
                <li className={styles.courseItem}>
                    13 tygodniowy kurs prowadzony przez Macieja Korsana na stronie internetowej <a target={'_blank'} rel={"noreferrer"} href={'https://cotenfrontend.pl'}>WTF: Co Ten Frontend</a>
                </li>
                <li className={styles.courseItem}>
                    7 Modułowy kurs GraphQL Mastery prowadzony przez Michała Taszyckiego na stronie internetowej <a  target={'_blank'} rel={"noreferrer"} href={'https://graphqlmastery.pl'}>GraphQL Mastery</a>
                </li>
                <li className={styles.courseItem}>
                    3,5 godz. kurs Figma projektowanie interfejsów prowadzony przez Grzegorz Róg na platformie <a target={'_blank'} rel={"noreferrer"} href={'https://eduweb.pl/grafika-i-interfejsy/figma/figma-projektowanie-interfejsow'}>eduweb.pl</a>
                </li>
            </ul>
            <p className={styles.paragraf}>
                Uczestnictwo w powyższych szkoleniach pozwoliło mi zdobyć następujące umiejętności:
            </p>


            <div className={styles.skills}>
                <article className={styles.article}>
                    <img className={styles.image} src={strongImage} />
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
                    <img className={styles.image} src={faceImage} />
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
                    <img className={styles.image} src={hatImage} />
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