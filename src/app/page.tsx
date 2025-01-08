import Image from "next/image";
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
        <section className={styles.inicio}>
          <div className={styles.overlay}>
            <Image
              src="/images/favoInicio.png"
              width={1000}
              height={1000}
              quality={100}
              layout="responsive" //adicionei esse atributo para  gerar imagens otimizadas e consequentimente melhorar a performace
              alt="Hexágono Mambee"
              className={styles.hexImage}
            />
            <button className={styles.contactButton}>Contate-nos</button>
          </div>

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
