import React from 'react';
import Navigation from '../Navigation/Navigation';
import avatar from '../../assets/img/avatar_300.gif';
import styles from './Header.module.scss';


class Header extends React.Component {
    state = {
        showMobileMenu: false,
    }

    handleShowMobileMenu = () => {
        this.setState( prevState => {
            console.log(prevState.showMobileMenu)
            return {showMobileMenu: prevState.showMobileMenu ? false : true}
        })
    }
    render() {
        const {showMobileMenu} = this.state
        return(
            <header className={styles.header}>
                    <img className={styles.avatar} src={avatar} alt={'Avatar'}/>
                    <div className={styles.wrapper}>
                        <div className={styles.welcome}>
                            <p className={styles.speech}>
                                Miło że jesteś na mojej stronie
                            </p>
                            <button onClick={this.handleShowMobileMenu} className={styles.hamburgerMenu__Button}>
                                <div className={styles.hamburgerMenu__BG} >
                                    <div className={`${styles.hamburgerMenu__Icon} + ${styles[showMobileMenu ? 'classShowMobileMenu' : null]}`}>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <Navigation
                            fnShowMenu={this.handleShowMobileMenu} 
                            showMobileMenu={showMobileMenu} 
                        />
                    </div>
            </header>
        )
    }

}

export default Header;