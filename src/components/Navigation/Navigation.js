import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

function App() {
  return (
    <nav className={styles.Nav}>
        <ul className={styles.Nav_List}>
            <li className={styles.Nav__Item}>
                <NavLink className={styles.Nav__Item__NavLink} to='/'>
                    O mnie
                </NavLink>
            </li>
            <li className={styles.Nav__Item}>
                <NavLink className={styles.Nav__Item__NavLink} to='/skills'>
                    Umiejętności
                </NavLink>
            </li>
            <li className={styles.Nav__Item}>
                <NavLink className={styles.Nav__Item__NavLink} to='/projects'>
                    Projekty
                </NavLink>
            </li>
            <li className={styles.Nav__Item}>
                <NavLink className={styles.Nav__Item__NavLink} to='/contact'>
                    Kontakt
                </NavLink>
            </li>
        </ul>
    </nav>
  );
}

export default App;