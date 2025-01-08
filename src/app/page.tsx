//import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header"
import Parceiros from "@/components/Parceiros";
import Contato from "@/components/Contato";
import Professores from "@/components/Professores";
import Destaques from "@/components/Destaques";
import Conheca from "@/components/Conheca";
import Footer from "@/components/Footer";
import Processo from "@/components/Processo";

export default function Home() {
  return (
    <div >
      <main >
        <div className={styles.align}>
          <Header />
          <Nav />
        </div>
        {/* <section className={styles.inicio}>
         
         <Image
                src="/images/Favo-de-mel.png"
                width={100}
                height={100}
                alt="Favo de Mel"
              />
        </section> */}
        <section className={styles.inicio}>
          {/* <div className={styles.hexagonContainer}>
            <div className={styles.hexagon}>
              <h1>Mambee</h1>
              <p>Fábrica Escola de Software</p>
            </div>
            <div className={styles.hexagon}>
              <h2>Sobre nós</h2>
              <p>Ambiente prático e inovador para preparar estudantes...</p>
            </div>
            <div className={styles.hexagon}>
              <button>Contate-nos</button>
            </div>
          </div> */}
        </section>

        <Conheca />
        <Processo />
        <Parceiros />
        <Destaques />
        <Professores />
        <Contato />
        <Footer />
      </main>
    </div>
  );
}
