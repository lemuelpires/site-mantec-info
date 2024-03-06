import React from 'react';
import styles from './Navbar.module.css';
import logo from '../img/logo.png';

function Navbar() {
    return (
        <header>
            <nav className={styles.header}>
                <div className={styles.logo}>
                <img src={logo} alt="Logo" className={styles.logoImage} />
                </div>
                <ul className={styles.navLinks}>
                    <li className={styles.navLink}>Home</li>
                    <li className={styles.navLink}>Sobre</li>
                    <li className={styles.navLink}>Contato</li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
