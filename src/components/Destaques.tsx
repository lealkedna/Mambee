'use client';

import { useState } from "react";
import CardDestaques from "./CardDestaques";
import styles from "@/styles/Destaques.module.css"
export default function Destaques(){
    const noticias  = [
        {
            image: '/images/noticias/jader 1.jpg',
            desc: 'Professor de Picos lança  livro sobre Gameficação no SALIPI',
            link: 'https://www.ifpi.edu.br/picos/noticias/professor-de-picos-lanca-livro-sobre-gameficacao-no-salipi'
        },
        {
            image: '/images/noticias/livro.jpg',
            desc: 'Lançamento do e-book Aprenda Programar com JavaScript',
            link: 'https://medium.com/@jesielviana/aprenda-programar-com-javascript-4316228b695d'
        },
        {
            image: '/images/noticias/cesarMambee.jpeg',
            desc: 'Do CESAR para Picos: professores desenvolvem laboratório de referência no Piauí',
            link: 'https://www.cesar.school/do-cesar-para-picos-professores-desenvolvem-laboratorio-de-referencia-no-piaui/'
        },
        {
            image: '/images/noticias/jornal-elpais.jpg',
            desc: 'Las caras del éxito del programa brasileño contra la probreza',
            link: 'https://elpais.com/america/2024-09-01/gracias-a-bolsa-familia-menos-hijos-heredan-la-miseria-en-brasil.html'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? noticias.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === noticias.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className={styles.card_style}>
            <h2 className={styles.title}>Destaques</h2>
            <p className={styles.subTitle}>Farol de inovação do IFPI Picos</p>
            <div className={styles.controls}>
                <button onClick={handlePrev} className={styles.navButton}>
                    Anterior
                </button>
                <button onClick={handleNext} className={styles.navButton}>
                    Próximo
                </button>
            </div>
            <div className={styles.noticia}>
            {
                noticias.map((noticia, index)=>( 
                    <CardDestaques 
                        key={index}
                        image={noticia.image}
                        desc={noticia.desc}
                        link={noticia.link}/>
                ))
            }
            </div>
            <div className={styles.dots}>
                {noticias.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>

    );
}

