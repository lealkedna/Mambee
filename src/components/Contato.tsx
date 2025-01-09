import styles from '@/styles/Contato.module.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

function Contato() {
    return (
        <>
            <section id='Contato' className={styles.sec_contato}>
                <h2>Vamos Conversar?</h2>
                <div className={styles.contato}>
                    <article className={styles.info_email}>
                    <a href="mailto:mambee.fabrica@gmail.com" aria-label="Redireciona para enviar um email">
                        <MdOutlineEmail color="#2ECBF7" />
                        <div>mambee.fabrica@gmail.com</div>
                        </a>
                    </article>
                    <article className={styles.info_instagram}>
                    <a href="https://www.instagram.com/mambeeifpi/"  target="_blank" aria-label="Redireciona para o Instagram">
                        <FaInstagram color="#2ECBF7"/>
                        <div>@mambeeifpi</div>
                        </a>
                    </article>
                    
                </div>
                <article>
                    <div className={styles.info_endereco}>
                        < IoLocationOutline color="#2ECBF7" />
                        Av Pedro Marques de Medeiros, s/n - Parque Industrial, Picos - PI, 64605-500<br/>
                        IFPI Campus Picos, Sala E5 (Mambee), Pantanal, Picos - PI
                    </div>
                </article>
            </section>
        </>
    )
}

export default Contato;