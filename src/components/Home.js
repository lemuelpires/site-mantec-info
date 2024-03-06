// Home.js
import React from 'react';
import styles from './Home.module.css';
import celular from '../img/celular.jpg';
import tablet from '../img/tablet.avif';
import computador from '../img/computador1.jpg';
import notebook from '../img/notebook.jpeg';
import carregador from '../img/carregador_kapbom.webp';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <h1>Bem-vindo à nossa assistência técnica</h1>

            <section>
                <h2 className={styles.sectionTitle}>Serviços</h2>
                <div className={styles.serviceContainer}>
                    <div className={styles.serviceCard}>
                        <img src={celular} alt="Conserto de Celular" className={styles.cardImage} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Conserto de Celular</h3>
                            <p className={styles.cardDescription}>Descrição do serviço de conserto de celular.</p>
                        </div>
                    </div>
                    <div className={styles.serviceCard}>
                        <img src={tablet} alt="Conserto de Tablets" className={styles.cardImage} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Conserto de Tablets</h3>
                            <p className={styles.cardDescription}>Descrição do serviço de conserto de tablet.</p>
                        </div>
                    </div>
                    <div className={styles.serviceCard}>
                        <img src={computador} alt="Conserto de Computador" className={styles.cardImage} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Conserto de Computador</h3>
                            <p className={styles.cardDescription}>Descrição do serviço de conserto de computador.</p>
                        </div>
                    </div>
                    <div className={styles.serviceCard}>
                        <img src={notebook} alt="Conserto de Notebook" className={styles.cardImage} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Conserto de Notebook</h3>
                            <p className={styles.cardDescription}>Descrição do serviço de conserto de notebook.</p>
                        </div>
                    </div>
                    {/* Repita o padrão para os outros serviços */}
                </div>
            </section>

            <section>
                <h2 className={styles.sectionTitle}>Produtos Disponíveis</h2>
                <div className={styles.productContainer}>
                    <div className={styles.productCard}>
                        <img src={carregador} alt="Carregador Kapbom tipo C" className={styles.cardImage} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Carregador Kapbom tipo C</h3>
                            <p className={styles.cardDescription}>Descrição do produto 1.</p>
                        </div>
                    </div>
                    
                    {/* Repita o padrão para os outros produtos */}
                </div>
            </section>
        </div>
    );
};

export default Home;
