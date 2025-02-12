import Image from "next/image";
import Parceiros from "@/components/Parceiros";
import Contato from "@/components/Contato";
import Professores from "@/components/Professores";
import Footer from "@/components/Footer";
import Processo from "@/components/Processo";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Destaques from "@/components/Destaques";
import PrimaryButton from "@/components/button/PrimaryButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-16">
      <main className="flex flex-col w-full">
        <Navbar />

        <section className="relative min-h-[90vh] w-full bg-[url('/images/inicio.png')] bg-cover bg-center flex justify-center items-center">
          <div className="absolute inset-0 bg-white/20"></div>

          <div className="relative w-full max-w-7xl p-5">
            <div className="w-full space-y-5 max-w-2xl p-4 bg-fundoClaro rounded-3xl flex flex-col">
              <Image
                src="/images/mambee-logo-3.png"
                alt="Logo da Mambee"
                width={0}
                height={0}
                sizes="100vw"
                className="w-96"
              />
              <h1 className="text-3xl text-azul font-kanit font-bold mb-3">Sobre nós</h1>
              <p className="text-2xl text-justify font-kanit font-bold">
                Ambiente prático e inovador para preparar estudantes para o mercado de desenvolvimento de software por meio de projetos reais.
              </p>
              <Link href={`#Contato`} className="w-40">
                <PrimaryButton>Contate-nos</PrimaryButton>
              </Link>
            </div>
          </div>
        </section>

        <div className="p-5">
          <AboutUs />
          <Processo />
          <Parceiros />
          <Destaques />
          <Professores />
          <Contato />
        </div>
        <Footer />
      </main>
    </div>
  );
}
