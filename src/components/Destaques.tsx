'use client';

import { useState, useEffect } from "react";
import CardDestaques from "./CardDestaques";

export default function Destaques() {
    const noticias = [
        {
            image: "/images/noticias/startupN.jpeg",
            desc: "Campus Picos se destaca no Startup Nordeste 2024",
            link: "https://www.ifpi.edu.br/picos/noticias/campus-picos-se-destaca-no-startup-nordeste-2024",
        },
        {
            image: "/images/noticias/jornal-elpais.jpg",
            desc: "Las caras del éxito del programa brasileño contra la probreza",
            link: "https://elpais.com/america/2024-09-01/gracias-a-bolsa-familia-menos-hijos-heredan-la-miseria-en-brasil.html",
        },
        {
            image: "/images/noticias/jader 1.jpg",
            desc: "Professor de Picos lança livro sobre Gameficação no SALIPI",
            link: "https://www.ifpi.edu.br/picos/noticias/professor-de-picos-lanca-livro-sobre-gameficacao-no-salipi",
        },
        {
            image: "/images/noticias/livro.jpg",
            desc: "Lançamento do e-book Aprenda Programar com JavaScript",
            link: "https://medium.com/@jesielviana/aprenda-programar-com-javascript-4316228b695d",
        },
        {
            image: "/images/noticias/boletimS.jpeg",
            desc: "Projeto de extensão do IFPI de Picos funciona como empresa real e trabalha tecnologia e inovação",
            link: "https://www.boletimdosertao.com.br/projeto-de-extensao-do-ifpi-de-picos-funciona-como-empresa-real-e-trabalha-tecnologia-e-inovacao/",
        },
        {
            image: "/images/noticias/cesarMambee.jpeg",
            desc: "Do CESAR para Picos: professores desenvolvem laboratório de referência no Piauí",
            link: "https://www.cesar.school/do-cesar-para-picos-professores-desenvolvem-laboratorio-de-referencia-no-piaui/",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [noticiasPorPagina, setNoticiasPorPagina] = useState(3);

    useEffect(() => {
        const updateNoticiasPorPagina = () => {
            setNoticiasPorPagina(window.innerWidth <= 768 ? 1 : 3);
        };

        updateNoticiasPorPagina();
        window.addEventListener("resize", updateNoticiasPorPagina);

        return () => {
            window.removeEventListener("resize", updateNoticiasPorPagina);
        };
    }, []);

    const dots = noticias.length - noticiasPorPagina + 1;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? dots - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === dots - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full max-w-7xl mx-auto text-center p-5">
            <header className="flex justify-between items-center mb-5">
                <div>
                    <h2 className="text-4xl font-bold text-azul text-left">Destaques</h2>
                    <p className="text-xl font-bold text-white text-left mt-[-5px]">Farol de inovação do IFPI Picos</p>
                </div>
            </header>
            <div className="flex justify-between gap-8 overflow-hidden mb-5">
                <button onClick={handlePrev} className="bg-fundoClaro rounded-lg px-4 py-2 font-bold transition-colors hover:bg-azul hover:text-white">
                    &lt;
                </button>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {noticias.slice(currentIndex, currentIndex + noticiasPorPagina).map((noticia, index) => (
                        <CardDestaques key={index} image={noticia.image} desc={noticia.desc} link={noticia.link} />
                    ))}
                </div>
                <button onClick={handleNext} className="bg-fundoClaro rounded-lg px-4 py-2 font-bold transition-colors hover:bg-azul hover:text-white">
                    &gt;
                </button>
            </div>
            <div className="flex justify-center gap-2 mt-5">
                {Array.from({ length: dots }, (_, index) => (
                    <span
                        key={index}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${currentIndex === index ? "bg-azul" : "bg-gray-300 hover:bg-gray-500"}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}