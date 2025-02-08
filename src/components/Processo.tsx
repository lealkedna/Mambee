import React from 'react';
import Image from 'next/image';

function Processo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 my-16 max-w-7xl mx-auto p-5">
            <div className="">
                <h2 className="text-3xl md:text-4xl font-bold text-azul mb-5">Processo</h2>
                <p className="text-justify text-base md:text-lg leading-relaxed mb-5">
                    Como uma equipe de desenvolvimento, nós utilizamos um método de desenvolvimento ágil baseada no scrum, onde após o planejamento, o desenvolvimento e avaliação se tornam um ciclo constante até a finalização do produto.
                </p>
                <button className="px-6 py-2 border-2 border-azul text-azul rounded-lg transition-all hover:bg-azul hover:text-white mb-5">
                    Nosso último projeto
                </button>
                <Image
                    src="/images/processo.png"
                    width={500}
                    height={600}
                    alt="Processo da Mambee"
                    className="w-3/5 mx-auto my-5 object-cover"
                />
                <Image
                    src="/images/favoMel.png"
                    width={150}
                    height={150}
                    alt="Favo de mel"
                    className="w-[13vw] max-w-[120px] transform rotate-180 ml-8 hidden md:block"
                />
            </div>

            <div className="">
                <div className="flex gap-8 p-5">
                    <Image
                        src="/icons/geracaoIdeias.png"
                        width={100}
                        height={100}
                        alt="icone geração de ideias"
                        className="w-16 h-16"
                    />
                    <div>
                        <h3 className="text-azul font-bold text-xl mb-2">Geração de ideias</h3>
                        <p className="text-justify text-base leading-relaxed">
                            Nesta fase, a equipe se reúne para brainstorm e discutir as necessidades do projeto. O foco é explorar ideias e definir os objetivos iniciais, identificando problemas a serem resolvidos e oportunidades a serem aproveitadas.
                        </p>
                    </div>
                </div>

                <div className="flex gap-8 p-5">
                    <Image
                        src="/icons/planejamento.png"
                        width={100}
                        height={100}
                        alt="icone do planejamento"
                        className="w-16 h-16"
                    />
                    <div>
                        <h3 className="text-azul font-bold text-xl mb-2">Planejamento</h3>
                        <p className="text-justify text-base leading-relaxed">
                            Na fase de planejamento, a equipe define as prioridades e cria um backlog inicial com as funcionalidades desejadas.
                        </p>
                    </div>
                </div>

                <div className="flex gap-8 p-5">
                    <Image
                        src="/icons/design.png"
                        width={100}
                        height={100}
                        alt="icone do design"
                        className="w-16 h-16"
                    />
                    <div>
                        <h3 className="text-azul font-bold text-xl mb-2">Design</h3>
                        <p className="text-justify text-base leading-relaxed">
                            Durante a fase de design, são elaboradas as soluções técnicas e visuais do projeto.
                        </p>
                    </div>
                </div>

                <div className="flex gap-8 p-5">
                    <Image
                        src="/icons/desenvolvimento.png"
                        width={100}
                        height={100}
                        alt="icone do desenvolvimento"
                        className="w-16 h-16"
                    />
                    <div>
                        <h3 className="text-azul font-bold text-xl mb-2">Desenvolvimento</h3>
                        <p className="text-justify text-base leading-relaxed">
                            Na fase de desenvolvimento, os programadores transformam o design em código.
                        </p>
                    </div>
                </div>

                <div className="flex gap-8 p-5">
                    <Image
                        src="/icons/testes.png"
                        width={100}
                        height={100}
                        alt="icone dos testes"
                        className="w-16 h-16"
                    />
                    <div>
                        <h3 className="text-azul font-bold text-xl mb-2">Teste e Avaliação</h3>
                        <p className="text-justify text-base leading-relaxed">
                            Nesta fase, a equipe realiza testes rigorosos para identificar e corrigir bugs.
                        </p>
                    </div>
                </div>

                <div className="flex gap-8 p-5">
                    <Image
                        src="/icons/lancamento.png"
                        width={100}
                        height={100}
                        alt="icone do lançamento"
                        className="w-16 h-16"
                    />
                    <div>
                        <h3 className="text-azul font-bold text-xl mb-2">Lançamento</h3>
                        <p className="text-justify text-base leading-relaxed">
                            Na fase de lançamento, o produto é disponibilizado ao público.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Processo;