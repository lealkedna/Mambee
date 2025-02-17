"use client"
import Image from "next/image";
import Title1 from "./text/Title1";
import Hexagon from "./layout/Hexagon";
import { useEffect, useState } from "react";

export default function Partners() {
  const [hexSize, setHexSize] = useState(150);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setHexSize(100);
      } else if (window.innerWidth < 1024) {
        setHexSize(130);
      } else {
        setHexSize(150);
      }
    };

    updateSize(); // Define o tamanho inicial
    window.addEventListener("resize", updateSize); // Atualiza ao redimensionar

    return () => window.removeEventListener("resize", updateSize); // Cleanup
  }, []);

  const partners = [
    {
      image: "/images/parceiros/mb.svg",
      nome: "MB Labs",
      link: "#",
      color: "#DB1E99",
      padding: "p-1"
    },
    {
      image: "/images/parceiros/labitec.svg",
      nome: "Labitec",
      link: "#",
      color: "#021F3D",
      padding: "p-1"
    },
    {
      image: "/images/parceiros/pete.svg",
      nome: "Pete Tech",
      link: "#",
      color: "#170B30",
      padding: "p-1"
    },
    {
      image: "/images/parceiros/ifpi.png",
      nome: "IFPI - Picos",
      link: "#",
      color: "#29962B",
      padding: "p-7"
    },
    {
      image: "/images/parceiros/virtex.svg",
      nome: "Virtex",
      link: "#",
      color: "#FF0100",
      padding: "p-1"
    },
    {
      image: "/images/parceiros/ibict.svg",
      nome: "Ibict",
      link: "#",
      color: "#18355E",
      padding: "p-1"
    },
    {
      image: "/images/parceiros/valedomel.png",
      nome: "Vale do Mel",
      link: "#",
      color: "#0E4758",
      padding: "p-1"
    },
  ];


  return (
    <div className="w-full p-5 bg-fundoClaro shadow-[0px_4px_4px_rgba(0,0,0,0.1)]">
      <div className="max-w-5xl mx-auto p-5">
        <header className="text-center mb-10">
          <Title1>Parceiros</Title1>
        </header>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {partners.map((partner, index) => (
            <Hexagon
              size={hexSize}
              key={index}
              color={partner.color || "#020617"}
            >
              <a href={partner.link} className="flex items-center justify-center p-3">
                <Image
                  src={partner.image}
                  alt={partner.nome}
                  width={120}
                  height={120}
                  className={`object-contain w-40 h-40 ${partner.padding} rounded-lg`}
                />
              </a>
            </Hexagon>
          ))}
          <Hexagon size={hexSize}>
            <div className="w-40 h-40 p-1 flex items-center text-center font-bold bg-[#36CAF4] rounded-lg border-2 border-azul">
              <p>Participe você também!</p>
            </div>
          </Hexagon>
        </div>
      </div>
    </div>
  );
}