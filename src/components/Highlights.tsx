'use client';

import { useState, useEffect } from "react";
import HighlightsCard from "./HighlightsCard";
import Title1 from "./text/Title1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Highlights() {
    const news = [
        {
            image: "/images/noticias/startupN.jpeg",
            desc: "Campus Picos se destaca no Startup Nordeste 2024",
            link: "https://www.ifpi.edu.br/picos/noticias/campus-picos-se-destaca-no-startup-nordeste-2024"
        },
        {
            image: "/images/noticias/jornal-elpais.jpg",
            desc: "Las caras del éxito del programa brasileño contra la pobreza",
            link: "https://elpais.com/america/2024-09-01/gracias-a-bolsa-familia-menos-hijos-heredan-la-miseria-en-brasil.html"
        },
        {
            image: "/images/noticias/jader 1.jpg",
            desc: "Professor de Picos lança livro sobre Gameficação no SALIPI",
            link: "https://www.ifpi.edu.br/picos/noticias/professor-de-picos-lanca-livro-sobre-gameficacao-no-salipi"
        },
        {
            image: "/images/noticias/livro.jpg",
            desc: "Lançamento do e-book Aprenda Programar com JavaScript",
            link: "https://medium.com/@jesielviana/aprenda-programar-com-javascript-4316228b695d"
        },
        {
            image: "/images/noticias/boletimS.jpeg",
            desc: "Projeto de extensão do IFPI de Picos funciona como empresa real e trabalha tecnologia e inovação",
            link: "https://www.boletimdosertao.com.br/projeto-de-extensao-do-ifpi-de-picos-funciona-como-empresa-real-e-trabalha-tecnologia-e-inovacao/"
        },
        {
            image: "/images/noticias/cesarMambee.jpeg",
            desc: "Do CESAR para Picos: professores desenvolvem laboratório de referência no Piauí",
            link: "https://www.cesar.school/do-cesar-para-picos-professores-desenvolvem-laboratorio-de-referencia-no-piaui/"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [newsPerPage, setNewsPerPage] = useState(3);

    useEffect(() => {
        const updateNewsPerPage = () => {
            if (window.innerWidth <= 768) {
                setNewsPerPage(1);
            } else if (window.innerWidth <= 1023) {
                setNewsPerPage(2);
            } else {
                setNewsPerPage(3);
            }
        };

        updateNewsPerPage();
        window.addEventListener("resize", updateNewsPerPage);

        return () => {
            window.removeEventListener("resize", updateNewsPerPage);
        };
    }, []);

    const dots = news.length - newsPerPage + 1;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? dots - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === dots - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full max-w-7xl mx-auto text-center mt-5">

            <div className="flex justify-between gap-4">
                <div className="text-center mx-auto">
                    <Title1>Destaques</Title1>
                </div>
            </div>

            <div className="flex justify-between gap-8 overflow-hidden mb-5 p-5">
                <button onClick={handlePrev} className="hidden md:block text-4xl text-azul bg-fundoClaro rounded-lg px-4 py-2 font-bold transition-colors hover:bg-azul hover:text-white shadow-[0px_4px_4px_rgba(0,0,0,0.1)]">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
                    {news.slice(currentIndex, currentIndex + newsPerPage).map((news, index) => (
                        <HighlightsCard key={index} image={news.image} desc={news.desc} link={news.link} />
                    ))}
                </div>
                <button onClick={handleNext} className="hidden md:block text-4xl text-azul bg-fundoClaro rounded-lg px-4 py-2 font-bold transition-colors hover:bg-azul hover:text-white shadow-[0px_4px_4px_rgba(0,0,0,0.1)]">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>

            <div className="flex justify-between md:justify-center items-center gap-4 mt-5 px-5">
                <button onClick={handlePrev} className="md:hidden text-4xl text-azul bg-fundoClaro rounded-lg px-4 py-2 font-bold transition-colors hover:bg-azul hover:text-white shadow-[0px_4px_4px_rgba(0,0,0,0.1)]">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="flex justify-center gap-3">
                    {Array.from({ length: dots }, (_, index) => (
                        <span
                            key={index}
                            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${currentIndex === index ? "bg-azul" : "bg-gray-300 hover:bg-gray-500"}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
                
                <button onClick={handleNext} className="md:hidden text-4xl text-azul bg-fundoClaro rounded-lg px-4 py-2 font-bold transition-colors hover:bg-azul hover:text-white shadow-[0px_4px_4px_rgba(0,0,0,0.1)]">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}
