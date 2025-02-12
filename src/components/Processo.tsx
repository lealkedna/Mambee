import React from 'react';
import Image from 'next/image';
import Title1 from './text/Title1';
import PrimaryButton from './button/PrimaryButton';
import Card from './layout/Card';

function Processo() {
    const processos = [
        {
            icon: "/icons/geracaoIdeias.png",
            title: "Geração de ideias",
            text: "Nesta fase, a equipe se reúne para brainstorm e discutir as necessidades do projeto. O foco é explorar ideias e definir os objetivos iniciais, identificando problemas a serem resolvidos e oportunidades a serem aproveitadas."
        },
        {
            icon: "/icons/planejamento.png",
            title: "Planejamento",
            text: "Na fase de planejamento, a equipe define as prioridades e cria um backlog inicial com as funcionalidades desejadas."
        },
        {
            icon: "/icons/design.png",
            title: "Design",
            text: "Durante a fase de design, são elaboradas as soluções técnicas e visuais do projeto."
        },
        {
            icon: "/icons/desenvolvimento.png",
            title: "Desenvolvimento",
            text: "Na fase de desenvolvimento, os programadores transformam o design em código."
        },
        {
            icon: "/icons/testes.png",
            title: "Teste e Avaliação",
            text: "Nesta fase, a equipe realiza testes rigorosos para identificar e corrigir bugs."
        },
        {
            icon: "/icons/lancamento.png",
            title: "Lançamento",
            text: "Na fase de lançamento, o produto é disponibilizado ao público."
        }
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16 max-w-7xl mx-auto">
            {/* Coluna 1 */}
            <div>
                <Title1 className="mb-4">Processo</Title1>
                <p className="text-justify text-base md:text-lg leading-relaxed mb-5">
                    Como uma equipe de desenvolvimento, nós utilizamos um método de desenvolvimento ágil baseado no Scrum, onde após o planejamento, o desenvolvimento e avaliação se tornam um ciclo constante até a finalização do produto.
                </p>
                <PrimaryButton className="w-full md:w-60 hidden">Nosso último projeto</PrimaryButton>
                <Image
                    src="/images/processo.png"
                    width={500}
                    height={600}
                    alt="Processo da Mambee"
                    className="w-full md:w-3/5 mx-auto my-5 object-cover"
                />
                <Image
                    src="/images/favos-de-mel.png"
                    width={150}
                    height={150}
                    alt="Favo de mel"
                    className="w-[20vw] max-w-[120px] transform rotate-180 mx-auto md:ml-8 hidden md:block"
                />
            </div>

            {/* Coluna 2 */}
            <div className="flex flex-col gap-8">
                {processos.map((item, index) => (
                    <Card key={index} className="grid grid-cols-[100px_auto] gap-2 p-3">
                        <Image src={item.icon} width={100} height={100} alt={`Ícone de ${item.title}`} className="w-16 h-16 row-span-1 md:row-span-2 md:mx-auto" />
                        <h3 className="text-rosa font-bold text-lg my-auto">{item.title}</h3>
                        <p className="text-justify text-base leading-relaxed col-span-2 md:col-span-1">{item.text}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Processo;
