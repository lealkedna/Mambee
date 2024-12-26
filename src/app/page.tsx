// import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header"
import Parceiros from "@/components/Parceiros";
import Contato from "@/components/Contato";
import Professores from "@/components/Professores";
import Destaques from "@/components/Destaques";
//import Conheca from "@/components/Conheca";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div >
      <main >
        <div className={styles.align}>
          <Header />
          <Nav />
        </div>
        {/* <Conheca/> */}
        <Parceiros />
        <Destaques />
        <Professores />
        <Contato />
        <Footer />
      </main>
    </div>
  );
}
