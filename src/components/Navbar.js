import React from 'react';
import styles from './Navbar.module.css';
import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };
    const handleSobreClick = () => {
        navigate('/');
    };
    const handleContatoClick = () => {
        navigate('/');
    };
    return (
        <header>
            <nav className={styles.header}>
                <div className={styles.logo}>
                <img src={logo} alt="Logo" className={styles.logoImage} />
                </div>
                <ul className={styles.navLinks}>
                    <li className={styles.navLink} onClick={handleHomeClick}>Home</li>
                    <li className={styles.navLink}onClick={handleSobreClick}>Sobre</li>
                    <li className={styles.navLink}onClick={handleContatoClick}>Contato</li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
