import React from 'react';
import Image from 'next/image';
import Title1 from './text/Title1';
import PrimaryButton from './button/PrimaryButton';
import Card from './layout/Card';

function Processo() {
    const processos = [
        {
            icon: "images/processo/processo1.svg",
            title: "Geração de ideias",
            text: "Nesta fase, a equipe se reúne para brainstorm e discutir as necessidades do projeto. O foco é explorar ideias e definir os objetivos iniciais, identificando problemas a serem resolvidos e oportunidades a serem aproveitadas."
        },
        {
            icon: "images/processo/processo2.svg",
            title: "Planejamento",
            text: "Na fase de planejamento, a equipe define as prioridades e cria um backlog inicial com as funcionalidades desejadas."
        },
        {
            icon: "images/processo/processo3.svg",
            title: "Design",
            text: "Durante a fase de design, são elaboradas as soluções técnicas e visuais do projeto."
        },
        {
            icon: "images/processo/processo4.svg",
            title: "Desenvolvimento",
            text: "Na fase de desenvolvimento, os programadores transformam o design em código."
        },
        {
            icon: "images/processo/processo5.svg",
            title: "Teste e Avaliação",
            text: "Nesta fase, a equipe realiza testes rigorosos para identificar e corrigir bugs."
        },
        {
            icon: "images/processo/processo6.svg",
            title: "Lançamento",
            text: "Na fase de lançamento, o produto é disponibilizado ao público."
        }
    ]
    return (
        <div className="py-10 max-w-7xl min-h-[80vh] mx-auto flex flex-col justify-center gap-5 p-3">
            {/* Coluna 1 */}
            <div className='relative'>
                <Title1 className="mb-4 text-center">Processo</Title1>
                <PrimaryButton className="w-full md:w-60 hidden">Nosso último projeto</PrimaryButton>
                <Image
                    src="/images/favos-de-mel.png"
                    width={100}
                    height={100}
                    alt="Favo de mel"
                    className="transform rotate-180 mx-auto md:ml-8 hidden md:block absolute right-0 top-[-40px]"
                />
            </div>

            {/* Coluna 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-auto md:m-0">
                {processos.map((item, index) => (
                    <div key={index} className="flex md:flex-col gap-3 text-center">
                        <Card className='md:m-auto p-5'>
                            <Image src={item.icon} width={100} height={100} alt={`Ícone de ${item.title}`} className="w-10 h-10 row-span-1 md:row-span-2 md:mx-auto" />
                        </Card>
                        <h3 className="text-rosa font-bold text-lg my-auto">{index + 1} - {item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Processo;
