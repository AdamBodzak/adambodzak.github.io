import React from 'react';
import Navigation from '../Navigation/Navigation';
import avatar from '../../assets/img/avatar_300.gif';
import styles from './Header.module.scss';


const Header = () => {
    return(
        <header className={styles.header}>
                <img className={styles.avatar} src={avatar} alt={'Avatar'}/>
                <div className={styles.wrapper}>
                    <div className={styles.welcome}>

                    </div>
                    <Navigation />
                </div>
        </header>
    )
}

export default Header;