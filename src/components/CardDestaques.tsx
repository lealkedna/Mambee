import Image from "next/image";
import Card from "./layout/Card";
import PrimaryButton from "./button/PrimaryButton";

interface novoDestaqueProps {
    image: string;
    desc: string;
    link: string;
}

export default function CardDestaques({ image, desc, link }: novoDestaqueProps) {
    return (
        <Card className="grid grid-rows-2 overflow-hidden">
            <div className="h-52">
                <Image
                    className="w-full h-full object-cover"
                    src={image}
                    width={300}
                    height={200}
                    alt="imagem da noticia"
                />
            </div>
            <div className="p-4 flex flex-col justify-between h-full">
                <p className="text-lg mb-2 min-h-20">{desc}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline w-40 mx-auto"
                >
                    <PrimaryButton>Ler mais</PrimaryButton>
                </a>
            </div>
        </Card>
    );
}