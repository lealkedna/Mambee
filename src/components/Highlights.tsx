"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Title1 from './text/Title1';

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

    return (
        <div className="w-full max-w-7xl min-h-[60vh] flex flex-col mx-auto justify-center text-center mt-5">
            <div className="flex justify-between gap-4">
                <div className="text-center mx-auto">
                    <Title1>Destaques</Title1>
                </div>
            </div>
            <div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {news.map((item, index) => (
                        <SwiperSlide key={index} className="flex justify-center my-10">
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full h-72 max-w-xs rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 m-auto bg-white"
                            >
                                <Image
                                    width={300}
                                    height={300}
                                    src={item.image}
                                    alt={item.desc}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <p className="text-sm font-semibold">{item.desc}</p>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
