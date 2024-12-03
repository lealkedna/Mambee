// import Image from "next/image";
// import styles from "./page.module.css";
import Nav from "@/components/nav";
import Contato from "@/components/Contato";
import Professores from "@/components/Professores";

export default function Home() {
  return (
    <div >
      <main >
        <Nav/>
        <Professores/>
        <Contato/> 
      </main>
    </div>
  );
}
