// Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const handleWhatsAppRedirect = () => {
        window.location.href = 'https://wa.me/5516992614410';
    };

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.contactContainer}>
                <h2 className={styles.contactTitle}>Contatos</h2>
                <p className={styles.contactDescription}>Entre em contato conosco pelo WhatsApp:</p>
                <button onClick={handleWhatsAppRedirect} className={styles.whatsappButton}>Enviar mensagem</button>
            </div>

            <div className={styles.defaultInfoContainer}>
                <h3>Informações Gerais</h3>
                <p>Endereço: Rua Exemplo, 123</p>
                <p>E-mail: exemplo@example.com</p>
                <p>Telefone: (12) 3456-7890</p>
            </div>
        </footer>
    );
};

export default Footer;
