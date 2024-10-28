import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
        setIsMenuOpen(false);
    };
    const handleSobreClick = () => {
        navigate('/');
        setIsMenuOpen(false);
    };
    const handleContatoClick = () => {
        navigate('/');
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className={styles.header}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo" className={styles.logoImage} />
                </div>
                <button className={styles.hamburger} onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
                    <li className={styles.navLink} onClick={handleHomeClick}>Home</li>
                    <li className={styles.navLink} onClick={handleSobreClick}>Sobre</li>
                    <li className={styles.navLink} onClick={handleContatoClick}>Contato</li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
