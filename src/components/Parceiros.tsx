import Image from "next/image";
import styles from "@/styles/Parceiros.module.css"
function Parceiros(){
    return(
        <div className={styles.container}>
            <header className={styles.header}>
                    <h2 className={styles.title}>Parceiros</h2>
                    <p className={styles.subTitle}>Transformando ideias em soluções</p>
            </header>
            <aside className={styles.aside}>
                <p className={styles.text}>
                    Na Mambee, nossa escola-fábrica de software, trabalhamos junto 
                    aos parceiros para criar um ambiente de aprendizado prático, que 
                    simula os desafios reais do mercado. Esse apoio é essencial para 
                    estimular a criatividade dos alunos e manter um fluxo contínuo de 
                    projetos inovadores. Assim, preparamos nossos futuros profissionais 
                    para o mercado de tecnologia, garantindo que saiam 
                    com as habilidades e experiências necessárias para enfrentar desafios da 
                    indústria de forma inovadora e eficiente.
                </p>
            </aside>
            <section className={styles.card}>
            <div className={styles.hex_grid}>
          {/* Hexágonos */}
                <div className={`${styles.hex} ${styles.virtex}`}></div>
                <div className={`${styles.hex} ${styles.labitec}`}></div>
                <div className={`${styles.hex} ${styles.petetech}`}></div>
                <div className={`${styles.hex} ${styles.valedomel}`}></div>
                <div className={`${styles.hex} ${styles.ifpi}`}></div>
                <div className={`${styles.hex} ${styles.ibict}`}></div>
            </div>
            </section>
        </div>
    );
}

export default Parceiros;