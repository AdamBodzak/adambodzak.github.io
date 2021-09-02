import React from "react";
import styles from "./Skills.module.scss";

import strongImage from "../../assets/img/strong.svg";
import faceImage from "../../assets/img/face.svg";
import hatImage from "../../assets/img/hat.svg";
import skillsImage from "../../assets/img/Skills.svg";

const Skills = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.headerView}>Moje Umiejętności</h1>
      <div className={styles.wrapper}>
        <p className={styles.paragraf}>
          Uczestnictwo w szeregu szkoleń i kursów pozwoliło mi zdobyć
          następujące umiejętności:
        </p>
        <img src={skillsImage} className={styles.skillsImage} alt={"skills"} />
      </div>
      <div className={styles.skills}>
        <article className={styles.article}>
          <img className={styles.image} src={strongImage} alt={"strong"} />
          <h2 className={styles.header}>Posiadam wiedza praktyczną</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              ReactJS
              <ul className={styles.secondUL}>
                <li className={styles.secondItem}>
                  React Router (BrowserRouter, Router, Switch, NavLink)
                </li>
                <li className={styles.secondItem}>
                  PropType walidacja zmiennych
                </li>
                <li className={styles.secondItem}>
                  komponenty funkcyjne i class-owe
                </li>
                <li className={styles.secondItem}>komponenty class-owe</li>
                <li className={styles.secondItem}>
                  cykl życia komponentu class-owego
                </li>
                <li className={styles.secondItem}>
                  props-y i przekazywanie danych
                </li>
                <li className={styles.secondItem}>Context API</li>
                <li className={styles.secondItem}>
                  stan komponentu i jego modyfikacja
                </li>
                <li className={styles.secondItem}>i wiele innych...</li>
              </ul>
            </li>
            <li className={styles.listItem}>
              CSS i SCSS
              <ul className={styles.secondUL}>
                <li className={styles.secondItem}>Flexbox</li>
                <li className={styles.secondItem}>Grid</li>
                <li className={styles.secondItem}>boxmodel</li>
                <li className={styles.secondItem}>Animacja CSS i plików SVG</li>
                <li className={styles.secondItem}>i wiele innych...</li>
              </ul>
            </li>
            <li className={styles.listItem}>
              Obsługa Git (terminal)
              <ul className={styles.secondUL}>
                <li className={styles.secondItem}>
                  tag, branch, checkout, marge, cherry-pick, push, pull, fatch i
                  wiele innych
                </li>
              </ul>
            </li>
            <li className={styles.listItem}>{`JSX (syntactic sugar)`}</li>
            <li className={styles.listItem}>polyfill</li>
            <li className={styles.listItem}>JavaScript ES6+</li>
            <li className={styles.listItem}>Styled Components (CSS in JS)</li>
            <li className={styles.listItem}>CSS Module</li>
            <li className={styles.listItem}>ESLint - statyczna analiza kodu</li>
            <li className={styles.listItem}>Prettier - auto formater</li>
            <li className={styles.listItem}>Storybook V6+</li>
            <li className={styles.listItem}>Symantyczny HTML5</li>
            <li className={styles.listItem}>polyfill</li>
            <li className={styles.listItem}>Obsługa NPM</li>
            <li className={styles.listItem}>Obsługa Figma</li>
            <li className={styles.listItem}>Obsługa Visual Studio Code</li>
            <li className={styles.listItem}>Deployment aplikacji na serwer</li>
            <li className={styles.listItem}>i wiele więcej...</li>
          </ul>
        </article>
        <article className={styles.article}>
          <img className={styles.image} src={faceImage} alt={"face"} />
          <h2 className={styles.header}>Wiem coś na temat</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Node.JS</li>
            <li className={styles.listItem}>GraphQL</li>
            <li className={styles.listItem}>TypeScript</li>
            <li className={styles.listItem}>
              Program Jest i testowanie na froncie
            </li>
          </ul>
        </article>
        <article className={styles.article}>
          <img className={styles.image} src={hatImage} alt={"hat"} />
          <h2 className={styles.header}>Chcę cię nauczyć</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Gatsby</li>
            <li className={styles.listItem}>REST</li>
            <li className={styles.listItem}>Server side rendering</li>
          </ul>
        </article>
      </div>

      <p className={styles.paragraf}>
        Programowaniem z pasji zajmuję się od ponad 10 lat, podążając za nowymi
        wyzwaniami, chcąc ciągle poszerzać swoją wiedzę z dziedziny
        frontend-owej. W ramach kursów wykonałem projekty stron internetowych, a
        rezultaty mojej pracy umieściłem na serwerze Vercel lub GitHubPage.{" "}
        <u>
          Do wielu z projektów starałem się dodać własne dodatkowe
          funkcjonalności rozszerzając działanie aplikacji
        </u>
        , a szerzej o tym można poczytać w plikach readme dodanych do
        repozytoriów na GitHub. Oto następujące szkolenia i kursy w których
        uczestniczę:
      </p>
      <ul className={styles.courseList}>
        <li className={styles.courseItem}>
          <article className={styles.courseItem__article}>
            <b>14 tygodniowy kurs React-a </b> prowadzony przez{" "}
            <b> Michała Taszyckiego </b> na stronie internetowej{" "}
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={"https://kursreacta.pl"}
            >
              Kurs React-a
            </a>
            . Kurs składa się z dwóch części:
            <p className={styles.courseItem__paragraf}>
              - Część pierwsza <b> Kurs Reacta - Szybki Start </b> powstała
              aplikacja której zadaniem jest odtwarzanie muzyki dostarczanej z
              serwera zewnętrznego, wzorowany na elementach Spotify. Zapraszam
              do obejrzenia mojego repozytorium na{" "}
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href={
                  "https://github.com/AdamBodzak/CourseReact_QuickStart_MichalTaszycki"
                }
              >
                GitHub
              </a>{" "}
              oraz rezultatów mojej pracy na serwerze{" "}
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href={
                  "https://course-react-quick-start-michal-taszycki.vercel.app/"
                }
              >
                Vercel
              </a>
              .
            </p>
            <p className={styles.courseItem__paragraf}>
              - Część dróga{" "}
              <b>Kurs Reacta - Fundamenty i Kurs Reacta - Expert</b> powstała
              aplikacja do odliczania interwałów czasowych dla poszczególnych
              zadań. Część druga kursu w trakcie realizacji.
            </p>
          </article>
        </li>
        <li className={styles.courseItem}>
          <article className={styles.courseItem__article}>
            <b>3 tygodniowy kurs React od podstaw</b> prowadzony przez{" "}
            <b> Adama Romanowskiego </b> na platformie{" "}
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={
                "https://eduweb.pl/programowanie-i-www/reactjs/react-od-podstaw"
              }
            >
              eduweb.pl
            </a>
            . Powstała aplikacja do zarządzania wiadomościami z twitter-a,
            artykułami oraz notatkami. Zapraszam do obejrzenia mojego
            repozytorium na{" "}
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={
                "https://github.com/AdamBodzak/AdamRomanowski_kursReactOdPodstaw.git"
              }
            >
              GitHub
            </a>{" "}
            oraz rezultatów mojej pracy na serwerze{" "}
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={
                "https://adam-romanowski-kurs-react-od-podstaw-adambodzak.vercel.app/"
              }
            >
              Vercel
            </a>
            . Wersja ostateczna projektu została przeze mnie wzbogacona o
            dodatkowe funkcjonalności o których można szerzej poczytać w pliku{" "}
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={
                "https://github.com/AdamBodzak/AdamRomanowski_kursReactOdPodstaw#readme"
              }
            >
              {" "}
              README.md{" "}
            </a>{" "}
            dołączonym do repozytorium GitHub.
          </article>
        </li>
        <li className={styles.courseItem}>
          <article className={styles.courseItem__article}>
            <b>4 tygodniowy kurs React w praktyce </b> prowadzony przez{" "}
            <b> Adama Romanowskiego </b> na platformie{" "}
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={
                "https://eduweb.pl/programowanie-i-www/reactjs/react-w-praktyce"
              }
            >
              eduweb.pl
            </a>
          </article>
        </li>
        <li className={styles.courseItem}>
          <article className={styles.courseItem__article}>
            <b>8 tygodniowy kurs GraphQL Mastery </b> prowadzony przez{" "}
            <b> Michała Taszyckiego </b> na stronie internetowej{" "}
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={"https://graphqlmastery.pl"}
            >
              GraphQL Mastery
            </a>
            . Kurs składa się z dwóch części:
            <p className={styles.courseItem__paragraf}>
              - Część pierwsza<b> - Szybki Start </b> Powstała aplikacja do
              generowania inspirujących cytatów. Zapraszam do obejrzenia mojego
              repozytorium na
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href={"https://github.com/AdamBodzak/Szkolenie_GraphQL"}
              >
                GitHub
              </a>{" "}
              oraz rezultatów mojej pracy na serwerze{" "}
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href={"https://inspiring-quote-iota.vercel.app/"}
              >
                Vercel
              </a>
              .
            </p>
            <p className={styles.courseItem__paragraf}>
              - Część dróga <b>Fundamenty</b> Powstanie aplikacja do zażądania
              książkami w bibliotece. Część druga kursu w trakcie realizacji.
            </p>
          </article>
        </li>

        <li className={styles.courseItem}>
          <article className={styles.courseItem__article}>
            <b>3 tygodniowy kurs GIT-a </b> {"prowadzony na platformie "}
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={"https://kursgita.pl/"}
            >
              kurs GIT-a.
            </a>
            {` Nauczyłem się pracy z lokalnym jak i zdalnym
            repozytorium Git-a, oraz zdobyłem praktyczną wiedzę i umiejętność
            zastosowania takich komend jak tag, branch, checkout, marge,
            cherry-pick, push, pull, fatch i wiele innych`}
          </article>
        </li>
        <li className={styles.courseItem}>
          <article className={styles.courseItem__article}>
            <b>6 tygodniowy kurs Opanuj JavaScript </b> prowadzony przez{" "}
            <b> Adam Gospodarczyk, Przemek Smyrdek, Marcin Czarkowski </b>{" "}
            organizowany przez{" "}
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={"https://przeprogramowani.pl/kurs-javascript"}
            >
              Przeprogramowani
            </a>
            . Zrealizowałem ponad 60 zadań i 9 projektów które ugruntowały moją
            wiedzę z zakresu poszczególnych metod JavaScript-u.
          </article>
        </li>
        <li className={styles.courseItem}>
          <article className={styles.courseItem__article}>
            <b>4 tygodniowy kurs JavaScrypt w Praktyce </b> prowadzony przez{" "}
            <b> Piotr Palarz </b> na platformie{" "}
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={
                "https://eduweb.pl/programowanie-i-www/javascript/javascript-w-praktyce"
              }
            >
              eduweb.pl
            </a>
            . Stanowi idealne rozszerzenie, uzupełnienie kursu organizowanego
            przez Przeprogramowanych.
          </article>
        </li>
        <li className={styles.courseItem}>
          <article className={styles.courseItem__article}>
            <b>13 tygodniowy kurs prowadzony przez Macieja Korsana </b> na
            stronie internetowej{" "}
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={"https://cotenfrontend.pl"}
            >
              WTF: Co Ten Frontend
            </a>
            . Nauczyłem się podstaw nowoczesnego frontendu. Dowiedziałem się
            czym są i jak działają potrzebne w codziennej pracy narzędzia.
          </article>
        </li>

        <li className={styles.courseItem}>
          <article className={styles.courseItem__article}>
            <b>1 tygodniowy kurs Figma projektowanie interfejsów prowadzony</b>{" "}
            prowadzony przez <b> Grzegorza Rógę </b> na platformie{" "}
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={
                "https://eduweb.pl/grafika-i-interfejsy/figma/figma-projektowanie-interfejsow"
              }
            >
              eduweb.pl
            </a>
          </article>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
