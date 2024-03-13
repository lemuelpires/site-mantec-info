import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import celular from '../img/celular.jpg';
import tablet from '../img/tablet.avif';
import computador from '../img/computador1.jpg';
import notebook from '../img/notebook.jpeg';
import carregador from '../img/carregador_kapbom.webp';

const Home = () => {
    const navigate = useNavigate();

    const handleCelularClick = () => {
        // Redirecionar para a página desejada ao clicar
        navigate('/celular');
    };
    const handleNotebookClick = () => {
        // Redirecionar para a página desejada ao clicar
        navigate('/notebook');
    };
    const handleComputadorClick = () => {
        // Redirecionar para a página desejada ao clicar
        navigate('/computador');
    };
    const handleTabletClick = () => {
        // Redirecionar para a página desejada ao clicar
        navigate('/tablet');
    };

    return (
        <div className={styles.homeContainer}>
            <h1>Bem-vindo à nossa assistência técnica</h1>

            <section>
                <h2 className={styles.sectionTitle}>Serviços</h2>
                <div className={styles.serviceContainer}>
                    <div className={styles.serviceCard}>
                        <img onClick={handleCelularClick} src={celular} alt="Conserto de Celular" className={styles.cardImage} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle} onClick={handleCelularClick}>Conserto de Celular</h3>
                            <p className={styles.cardDescription}onClick={handleCelularClick}>
Especializados em dispositivos móveis, troca de tela quebrada, proporcionando renovação visual e tátil. Oferecemos também serviços de substituição de conectores, baterias, câmeras e mais, garantindo eficiência, qualidade e total satisfação.</p>
                        </div>
                    </div>
                    <div className={styles.serviceCard}>
                        <img onClick={handleTabletClick} src={tablet} alt="Conserto de Tablets" className={styles.cardImage} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle} onClick={handleTabletClick}>Conserto de Tablets</h3>
                            <p className={styles.cardDescription} onClick={handleTabletClick}>Oferecemos troca de tela, bateria, tampa traseira e vidro da câmera, 
                            além da substituição de periféricos. Realizamos ativação e troca de bateria, reinstalação do Android e restauração 
                            ROM de fábrica para manter seu dispositivo em excelente funcionamento.</p>
                        </div>
                    </div>
                    <div className={styles.serviceCard}>
                        <img onClick={handleComputadorClick} src={computador} alt="Conserto de Computador" className={styles.cardImage} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle} onClick={handleComputadorClick}>Conserto de Computador</h3>
                            <p className={styles.cardDescription} onClick={handleComputadorClick}>Oferecemos formatação especializada para Windows, iOS e Linux, instalação de drivers,
                             limpeza e troca de pasta térmica. Realizamos upgrades personalizados de processador, memória e HD, troca de bateria BIOS,
                              tela e teclado para garantir um sistema eficiente e otimizado.</p>
                        </div>
                    </div>
                    <div className={styles.serviceCard}>
                        <img onClick={handleNotebookClick}src={notebook} alt="Conserto de Notebook" className={styles.cardImage} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle} onClick={handleNotebookClick}>Conserto de Notebook</h3>
                            <p className={styles.cardDescription} onClick={handleNotebookClick}>Oferecemos formatação especializada para Windows, iOS e Linux, instalação de drivers,
                             limpeza e troca de pasta térmica. Realizamos upgrades personalizados de processador, memória e HD, troca de bateria BIOS, 
                             tela e teclado para garantir um sistema eficiente e otimizado.</p>
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
