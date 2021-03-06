import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import logoAllImage from "../../assets/img/logo.svg";

function App({ showMobileMenu, fnShowMenu }) {
  return (
    <>
      <button onClick={fnShowMenu} className={styles.hamburgerMenu__Button}>
        <div className={styles.hamburgerMenu__BG}>
          <div
            className={`${styles.hamburgerMenu__Icon} + ${
              styles[showMobileMenu ? "classShowMobileMenu" : null]
            }`}
          ></div>
        </div>
      </button>
      <nav
        className={`${styles.Nav} + ${
          styles[showMobileMenu ? "classShowMobileMenu" : null]
        }`}
      >
        <div className={styles.logoWrapper}>
          <img className={styles.logoImage} src={logoAllImage} alt="logo" />

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
        </div>
      </nav>
    </>
  );
}

export default App;
