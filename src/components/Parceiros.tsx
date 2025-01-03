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
                    Na Mambee, nossa escola-fábrica de software, trabalhamos junto<br/> 
                    aos parceiros para criar um ambiente de aprendizado prático, que <br/>
                    simula os desafios reais do mercado. Esse apoio é essencial para <br/>
                    estimular a criatividade dos alunos e manter um fluxo contínuo de <br/>
                    projetos inovadores. Assim, preparamos nossos futuros profissionais <br/>
                    para o mercado de tecnologia, garantindo que saiam <br/>
                    com as habilidades e experiências necessárias para enfrentar desafios da <br/>
                    indústria de forma inovadora e eficiente.
                </p>
                <Image 
                    src="/images/parceiros/Favo de mel Parceiros.svg"
                    alt="Favos dos parceiros"
                    width={1120}
                    height={710}
                    className={styles.image}
                />
            </aside>
        </div>
    );
}

export default Parceiros;