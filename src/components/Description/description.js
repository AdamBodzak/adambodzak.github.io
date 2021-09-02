import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Description.module.scss";
import ContactMail from "../ContactMail/ContactMail";
import lookImage from "../../assets/img/look.svg";

const Description = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.header}>
        Nazywam się Adam Bodzak i aspiruję do zostania{" "}
        <span className={styles.special}> Frontend Developer</span>. Zapraszam
        cię do przeczytania kilka słów na mój temat.
      </h1>
      <div className={styles.description}>
        <p className={styles.aboutMe}>
          <img
            src={lookImage}
            className={styles.lookImage}
            alt={"look through the magnifying glass"}
          />
          Z wykształcenia jestem inżynierem budownictwa lądowego. Przez wiele
          lat jako projektant infrastruktury drogowej kształciłem zdolności
          analitycznego myślenia i zamiłowanie do rozwiązywania zadań. Dodatkowo
          od ponad 10 lat w czasie wolnym, hobbistycznie doskonaliłem
          umiejętności programistyczne. Nawiązując do moich zainteresowań
          postanowiłem podążać za nowymi wyzwaniami i po ponad 12 latach pracy
          na stanowisku projektanta, jestem zdeterminowany i zdecydowany do
          zmiany profilu zawodowego i rozpocząć pracę jako Junior Frontend
          Developer. W tym celu od ponad roku wykorzystując każdą wolną chwilę,
          a od stycznia 2021r. full time uczestniczę w szeregu szkoleń i kursów
          realizowanych w okresie ponad 62 tygodni, których łączna ilość sięga
          liczby 11. W dotychczasowej pracy zawodowej wykazałem się jako
          dojrzały, sumienny, zorganizowany i terminowy pracownik. Powierzone
          zadania dotyczyły kompleksowego opracowywania wielobranżowych
          dokumentacji projektowych, terminowej realizacji powierzonych zadań,
          równoległego zarządzania wieloma projektami, koordynacji zadań
          powierzonych podwykonawcom i nadzór nad tymi zadaniami i wiele innych.
          Pragnę zwrócić uwagę, iż przez okres pracy zawodowej oprócz
          podstawowych zadań wymienionych powyżej z własnej inicjatywy,
          samodzielnie opracowywałem i rozwijałem niestandardowe algorytmy
          automatyzujące i usprawniające codzienne zadania, oraz stworzyłem i
          zarządzałem pierwszą stroną internetową firmy DROGOWIEC. Należy
          podkreślić, że stworzone algorytmy są dalej wykorzystywane w
          codziennych zadaniach przez pracowników firmy DROGOWIEC i nie jest mi
          znana druga osoba, która w tak zawansowanym stopniu opracowywała te
          algorytmy. Do mojego pierwszego spotkania z programowaniem doszło
          jeszcze w szkole średniej, to były przełom lat dwutysięcznych. W tym
          czasie z wykorzystaniem edytora Turbo Paskal-a z pasją i
          zaangażowaniem opracowywałem pierwsze algorytmy, a w konsoli za pomocą
          gwiazdek, myślników i innych znaków tworzyłem kolejne widoki dla
          programowanego interfejsu. To wtedy zrozumiałem podstawowe pojęcia
          związane z programowaniem takie jak zmienne, procedury, pętle,
          instrukcje warunkowe, operatory, jak pobrać dane, jak wyświetlić, itp.
          Jeszcze na studiach stworzyłem i opublikowałem pierwszą stronę
          internetową.
        </p>
      </div>
      <article className={styles.article}>
        Mam nadzieję że jesteś zainteresowany sprawdzeniem listy moich{" "}
        <NavLink
          exact
          activeClassName={styles.active}
          className={styles.Nav__Item__NavLink}
          to="/"
        >
          umiejętności
        </NavLink>
        , oraz nie zapomnij rzucić okiem na{" "}
        <NavLink
          activeClassName={styles.active}
          className={styles.Nav__Item__NavLink}
          to="/projects"
        >
          moje projekty
        </NavLink>
        . Obecnie szukam nowych wyzwań, więc byłbym wdzięczny za kontakt zemną.
      </article>
      <div className={styles.contactMail}>
        <ContactMail />
      </div>
    </section>
  );
};

export default Description;
