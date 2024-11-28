import styles from '@/styles/Contato.module.css'

import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

function Contato() {
    return (
        <>
            <section className={styles.sec_contato}>
                <h2>Vamos Conversar?</h2>
                <div className={styles.contato}>
                    <article className={styles.info_email}>
                    <a href="mailto:mambee.fabrica@gmail.com">
                        <MdOutlineEmail color="#2ECBF7" />
                        mambee.fabrica@gmail.com
                        </a>
                    </article>
                    <article className={styles.info_instagram}>
                    <a href="https://www.instagram.com/mambeeifpi/"  target="_blank">
                        <FaInstagram color="#2ECBF7"/>
                        @mambeeifpi
                        </a>
                    </article>
                    
                </div>
                <article>
                    <address className={styles.info_endereco}>
                        < IoLocationOutline color="#2ECBF7" />
                        Av Pedro Marques de Medeiros, s/n - Parque Industrial, Picos - PI, 64605-500<br/>
                        IFPI Campus Picos, Sala E5 (Mambee), Pantanal, Picos - PI
                    </address>
                </article>
            </section>
        </>
    )
}

export default Contato;