import React from 'react';
import styles from './Navbar.module.css';
import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        // Redirecionar para a página desejada ao clicar
        navigate('/');
    };
    const handleSobreClick = () => {
        // Redirecionar para a página desejada ao clicar
        navigate('/');
    };
    const handleContatoClick = () => {
        // Redirecionar para a página desejada ao clicar
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
