import Image from "next/image"
import Card from "./layout/Card";

interface cardProfessoresProps {
  image: string,
  nome: string,
  descricao: string
}

export default function ProfessorCard({ image, nome, descricao }: cardProfessoresProps) {
  return (
    <Card className="flex flex-col items-center p-4">
        <div className="w-40 h-40 rounded-2xl overflow-hidden">
          <Image className="h-full w-full object-cover"
            src={image}
            alt={`Foto de ${nome}`}
            width={150}
            height={150}
          />
        </div>
        <h3 className="text-azul text-lg font-bold">{nome}</h3>
        <p className="text-sm font-bold">{descricao}</p>
    </Card>
  );
}