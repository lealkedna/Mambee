import Image from "next/image";
import Parceiros from "@/components/Parceiros";
import Contato from "@/components/Contato";
import Professores from "@/components/Professores";
import Footer from "@/components/Footer";
import Processo from "@/components/Processo";
import Hexagon from "@/components/Hexagon";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Destaques from "@/components/Destaques";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-16">
      <main className="flex flex-col w-full">
        <Navbar />

        <section className="py-5 min-h-[90vh] w-full bg-[url('/images/inicio.png')] bg-cover bg-center flex justify-center items-center">
          <div className="relative w-full max-w-7xl h-[520px] flex">
            <Hexagon size={350} className="absolute top-0 left-[20px]">
              <Image
                src="/images/mambee-logo.png"
                width={250}
                height={0}
                alt="Logo da Mambee"
                className=""
              />
            </Hexagon>
            <Hexagon size={300} className="absolute top-[210px] left-[300px] flex-col gap-2 px-14">
              <h1 className="text-[#2ECBF7] text-2xl">Sobre nós</h1>
              <p>Ambiente prático e inovador para preparar estudantes para o mercado de desenvolvimento de software por meio de projetos reais.</p>
            </Hexagon>
            <Hexagon size={140} className="absolute top-[370px] left-[178px]">
              Contate-nos
            </Hexagon>
          </div>
        </section>

        <AboutUs />
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
