"use client"; 
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import styles from "@/styles/Nav.module.css"
function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <div className={styles.nav}>
          
            <button className={styles.hamburger} onClick={toggleMenu}>
            <GiHamburgerMenu />
            </button>
            
                <nav className={`${styles.navList} ${
                    isMenuOpen ? styles.open : ""
                }`}>
                    <ul className={styles.navUl}>
                        <li onClick={toggleMenu}>Início</li>
                        <li onClick={toggleMenu}>Projetos</li>
                        <li onClick={toggleMenu}>Egressos</li>
                    </ul>
                </nav>
        </div>
    );
}

export default Nav;