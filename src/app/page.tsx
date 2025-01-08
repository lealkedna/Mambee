// import Image from "next/image";
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
          {/* <p>lorem*20</p> */}
         {/* <Image
                src="/images/Favo-de-mel.png"
                width={100}
                height={100}
                alt="Favo de Mel"
              /> */}
        </section>
        <Conheca/>
        <Processo/>
        <Parceiros />
        <Destaques />
        <Professores />
        <Contato />
        <Footer />
      </main>
    </div>
  );
}
