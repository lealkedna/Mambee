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
                    <FaYoutube color="#2ECBF7"/>
                    <FaGithub color="#2ECBF7"/>
                    <p> Copyrigth © Mambee 2024 </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;