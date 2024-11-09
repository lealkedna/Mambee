import Image from "next/image";
import styles from "@/styles/Nav.module.css"
function Nav(){
    return(
        <div className={styles.nav}>
            <Image
            src="/images/Mambee-logoV2.png"
            width={100}
            height={70}
            alt="Logo da Mambee"
          />
        <nav className={styles.navList}>
            <ul className={styles.navUl}>
                <li>Início</li>
                <li>Projetos</li>
                <li>Egressos</li>
            </ul>
        </nav>

        </div>
    );
}

export default Nav;