import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import celular from '../img/celular.jpg';
import tablet from '../img/tablet.avif';
import computador from '../img/computador1.jpg';
import notebook from '../img/notebook.jpeg';
import carregador from '../img/carregador_kapbom.webp';

const Home = () => {
    const servicesData = [
        {
          title: 'Conserto de Celular',
          description: 'Serviço que envolve a substituição do conector de carga de dispositivos, garantindo a correta funcionalidade do carregamento.',
          imagem: celular,
          route: '/celular',
        },
        {
          title: 'Conserto de Tablet',
          description: 'Serviço especializado na substituição de telas danificadas, proporcionando uma experiência visual e tátil renovada.',
          imagem: tablet,
          route: '/tablet',
        },
        {
          title: 'Conserto de Computador',
          description: 'Procedimento que consiste na substituição da bateria do dispositivo, melhorando a autonomia e a vida útil.',
          imagem: computador,
          route: '/computador',
        },
        {
          title: 'Conserto de Notebook',
          description: 'Serviço que envolve a substituição da tampa traseira danificada, proporcionando um aspecto estético renovado.',
          imagem: notebook,
          route: '/notebook',
        },
    ];

    return (
        <div className={styles.homeContainer}>
            <h1>Bem-vindo à nossa assistência técnica</h1>
            <h2 className={styles.sectionTitle}>Serviços</h2>
            <section className={styles.sessionContainer}>
                {servicesData.map((service, index) => (
                    <div className={styles.serviceContainer} key={index}>
                        <div className={styles.serviceCard}>
                            <Link to={service.route}>
                                <img src={service.imagem} alt={`Conserto de ${service.title}`} className={styles.cardImage} />
                            </Link>
                            <div className={styles.cardContent}>
                                <Link to={service.route}>
                                    <h3 className={styles.cardTitle}>{service.title}</h3>
                                    <p className={styles.cardDescription}>{service.description}</p>
                                    <button className={styles.cardButton}>Saiba mais</button>
                                </Link>
                            </div>
                        </div>               
                    </div>
                ))}
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
                </div>
            </section>
        </div>
    );
};

export default Home;
