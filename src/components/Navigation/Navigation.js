import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

function App({ showMobileMenu, fnShowMenu }) {
  return (
    <nav
      className={`${styles.Nav} + ${
        styles[showMobileMenu ? "classShowMobileMenu" : null]
      }`}
    >
      <ul className={styles.Nav_List}>
        <li onClick={fnShowMenu} className={styles.Nav__Item}>
          <NavLink
            exact
            activeClassName={styles.active}
            className={styles.Nav__Item__NavLink}
            to="/"
          >
            Umiejętności
          </NavLink>
        </li>
        <li onClick={fnShowMenu} className={styles.Nav__Item}>
          <NavLink
            activeClassName={styles.active}
            className={styles.Nav__Item__NavLink}
            to="/projects"
          >
            Projekty
          </NavLink>
        </li>
        <li onClick={fnShowMenu} className={styles.Nav__Item}>
          <NavLink
            activeClassName={styles.active}
            className={styles.Nav__Item__NavLink}
            to="/contact"
          >
            Kontakt
          </NavLink>
        </li>
        <li onClick={fnShowMenu} className={styles.Nav__Item}>
          <NavLink
            activeClassName={styles.active}
            className={styles.Nav__Item__NavLink}
            to="/about_me"
          >
            O mnie
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default App;
