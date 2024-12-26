
import styles from "@/styles/Nav.module.css"
function Nav(){
    return(
        <div className={styles.nav}>
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