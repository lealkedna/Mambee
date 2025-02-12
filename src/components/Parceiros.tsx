import Image from "next/image";
import Card from "./layout/Card";
import Title1 from "./text/Title1";
import Subtitle from "./text/Subtitle";

function Parceiros() {
  const parceiros = [
    {
      image: "/images/parceiros/mb.svg",
      nome: "MB Labs",
      link: "#",
    },
    {
      image: "/images/parceiros/labitec.svg",
      nome: "Labitec",
      link: "#",
    },
    {
      image: "/images/parceiros/pete.svg",
      nome: "Pete Tech",
      link: "#",
    },
    {
      image: "/images/parceiros/ifpi.svg",
      nome: "IFPI - Picos",
      link: "#",
    },
    {
      image: "/images/parceiros/virtex.svg",
      nome: "Virtex",
      link: "#",
    },
    {
      image: "/images/parceiros/ibict.svg",
      nome: "Ibict",
      link: "#",
    },
    {
      image: "/images/parceiros/valeDoMel.svg",
      nome: "Vale do Mel",
      link: "#",
    },
  ];

  return (
    <Card className="mx-auto w-full max-w-7xl p-5">
      <header className="text-center mb-10">
        <Title1>Parceiros</Title1>
        <Subtitle className="mb-4">Transformando ideias em solução</Subtitle>
        <p className="text-justify">
          Na Mambee, nossa escola-fábrica de software, trabalhamos junto aos parceiros para criar um ambiente de aprendizado prático, que simula os desafios reais do mercado. Esse apoio é essencial para estimular a criatividade dos alunos e manter um fluxo contínuo de projetos inovadores. Assim, preparamos nossos futuros profissionais para o mercado de tecnologia, garantindo que saiam com as habilidades e experiências necessárias para enfrentar desafios da indústria de forma inovadora e eficiente.
        </p>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
        {parceiros.map((parceiro, index) => (
          <a key={index} href={parceiro.link} className="flex items-center justify-center">
            <Image src={parceiro.image} alt={parceiro.nome} width={120} height={120} className="object-contain w-40 h-40 p-1 bg-[#D9D9D9] rounded-lg" />
          </a>
        ))}
        <div className="flex items-center justify-center">
            <div className="w-40 h-40 p-1 flex items-center text-center font-bold bg-[#D9D9D9] rounded-lg border-2 border-azul">
                <p>Participe você também!</p>
            </div>
        </div>
      </div>
    </Card>
  );
}

export default Parceiros;
