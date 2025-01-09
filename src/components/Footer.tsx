import Image from "next/image";
import styles from "@/styles/Footer.module.css"
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Image
                     src="/images/mambee-logo.png"
                     width={220}
                     height={140}
                     alt="Logo da Mambee"
                    />
                <nav className={styles.navList}>
                        <ul className={styles.navUl}>
                            <li>Início</li>
                            <li>Projetos</li>
                            <li>Egressos</li>
                        </ul>
                    </nav>
                <div className={styles.redesSociais}>
                <a href="https://www.youtube.com/@Mambee"  target="_blank" aria-label="Para conhecer nosso canal no youtube">
                    <FaYoutube color="#2ECBF7"/>
                </a>
                <a href="https://github.com/mambee-ifpi-picos"  target="_blank" aria-label="Para acessar nosso repositório do github">
                    <FaGithub color="#2ECBF7"/>
                </a>
                    <p> Copyrigth © Mambee 2024 </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;