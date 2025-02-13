import Image from "next/image";
import Card from "./layout/Card";

interface CardProfessoresProps {
  image: string;
  nome: string;
  descricao: string;
}

export default function ProfessorCard({ image, nome, descricao }: CardProfessoresProps) {
  return (
    <Card className="relative w-60 h-72 overflow-hidden rounded-2xl shadow-lg group mx-auto">
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src={image}
        alt={`Foto de ${nome}`}
        width={208}
        height={288}
      />

      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-black/30 p-4">
        <h3 className="text-white text-lg font-bold text-center">{nome}</h3>
        <p className="text-white text-sm text-center hidden group-hover:block">{descricao}</p>
      </div>
    </Card>
  );
}
