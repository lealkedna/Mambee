import Image from "next/image";

interface novoDestaqueProps {
    image: string;
    desc: string;
    link: string;
}

export default function CardDestaques({ image, desc, link }: novoDestaqueProps) {
    return (
        <div className="rounded-lg bg-fundoClaro grid grid-rows-2 overflow-hidden">
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
                    className="text-azul font-bold hover:underline"
                >
                    Ler mais
                </a>
            </div>
        </div>
    );
}