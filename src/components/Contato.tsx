import styles from '@/styles/Contato.module.css'

function Contato() {
    return (
        <>
            <section className={styles.sec_contato}>
                <h2>Vamos Conversar?</h2>
                <div className={styles.contato}>
                    <div className={styles.contato_opcao}>
                    <a href="mailto:mambee.fabrica@gmail.com">
                        mambee.fabrica@gmail.com
                        </a>
                    </div>
                    <div className={styles.contato_opcao}>
                    <a href="https://www.instagram.com/mambeeifpi/"  target="_blank">
                        @mambeeifpi
                        </a>
                    </div>
                </div>
                <address className={styles.contato_opcao}>
                    Av Pedro Marques de Medeiros, s/n - Parque Industrial, Picos - PI, 64605-500<br/>
                    IFPI Campus Picos, Sala E5 (Mambee), Pantanal, Picos - PI
                </address>
            </section>
        </>
    )
}

export default Contato;