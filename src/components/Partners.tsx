import Image from "next/image";

export default function Partners() {
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
      image: "/images/parceiros/guaribasvalley.png",
      nome: "Guaribas Valley",
      link: "#",
      color: "#0E4758",
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
    <div className="w-full p-5 bg-rosa shadow-[0px_4px_4px_rgba(0,0,0,0.1)]">
      <div className="max-w-5xl mx-auto p-5">
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {partners.map((partner, index) => (
            <a key={index} className="flex items-center justify-center p-3">
                <Image
                  src={partner.image}
                  alt={partner.nome}
                  width={120}
                  height={120}
                  className={`object-contain w-20 h-20 md:w-28 md:h-28 ${partner.padding} rounded-lg`}
                />
              </a>
          ))}
        </div>
      </div>
    </div>
  );
}