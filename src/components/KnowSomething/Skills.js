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
                <div className={styles.information}>
                    <h1 className={styles.headerView}>Moje Umiejętności</h1>
                    <p className={styles.paragraf}>
                        Programowaniem z pasji zajmuję się od ponad 10 lat, podążając za nowymi wyzwaniami, chcąc ciągle poszerzać swoją wiedzę. Uczestniczę w szeregu szkoleń i kursów z dziedziny frontend-owej oto następujące:
                    </p>
                </div>
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
                    <h2 className={styles.header}>Wiedza praktyczna</h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            Semantyczny HTML5
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
                    </ul>
                </article>
                <article className={styles.article}>
                    <img className={styles.image} src={hatImage} />
                    <h2 className={styles.header}>Chcę cię nauczyć</h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            Gatsby
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
};

export default Skills;