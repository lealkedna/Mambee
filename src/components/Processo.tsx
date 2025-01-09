import React from 'react';
import Image from 'next/image';
import styles from "@/styles/Processo.module.css"
function Processo() {
    return (
        <div className={styles.twoColumns}>
            <div className={styles.leftColumn}>
                <h2 className={styles.processHeading}>Processo</h2>
                <p className={styles.processParagraph}>Como uma equipe de desenvolvimento, nós utilizamos um método de desenvolvimento ágil baseada no scrum, onde após o planejamento, o desenvolvimento e avaliação se tornam um ciclo constante até a finalização do produto.</p>
                <button className={styles.buttonOutline}>Nosso último projeto</button>
                <Image
                    src="/images/processo.png"
                    width={500}
                    height={600}
                    alt="Processo da Mambee"
                    className={styles.processImage}
                />

                <Image
                    className={styles.favoProcesso}
                    src="/images/favoMel.png"
                    width={150}
                    height={150}
                    alt="Favo de mel"
                />
            </div>
            <div className={styles.rightColumn}>
                <div className={styles.contentContainer}>
                    <Image
                        className={styles.stepIcon}
                        src="/icons/geracaoIdeias.png"
                        width={100}
                        height={100}
                        alt="icone geração de ideias"
                    />
                    <div className={styles.sectionItem} >
                        <h3 className={styles.processSubheading}>Geração de ideias </h3>
                        <p className={styles.processParagraph}>Nesta fase, a equipe se reúne para brainstorm e discutir as necessidades do projeto. O foco é explorar ideias e definir os objetivos iniciais, identificando problemas a serem resolvidos e oportunidades a serem aproveitadas. Documenta-se as expectativas dos stakeholders e se elabora uma visão geral do produto.</p>
                    </div>
                </div>

                <div className={styles.contentContainer}>
                    <Image
                        className={styles.stepIcon}
                        src="/icons/planejamento.png"
                        width={100}
                        height={100}
                        alt="icone do planejamento"
                    />
                    <div>
                        <h3 className={styles.processSubheading}>Planejamento </h3>
                        <p className={styles.processParagraph}>Na fase de planejamento, a equipe define as prioridades e cria um backlog inicial com as funcionalidades desejadas. São estimados os recursos necessários e elaborado um cronograma de desenvolvimento. As responsabilidades são distribuídas entre os membros da equipe, garantindo que todos estejam alinhados com as metas e prazos.</p>
                    </div>

                </div>

                <div className={styles.contentContainer}>
                    <Image
                        className={styles.stepIcon}
                        src="/icons/design.png"
                        width={100}
                        height={100}
                        alt="icone do design"
                    />
                    <div>
                        <h3 className={styles.processSubheading}>Design </h3>
                        <p className={styles.processParagraph}>Durante a fase de design, são elaboradas as soluções técnicas e visuais do projeto. A equipe cria protótipos, wireframes e define a arquitetura do software. O foco é garantir que a experiência do usuário seja intuitiva e que a solução atenda às necessidades identificadas na fase de geração de ideias.</p>
                    </div>
                </div>

                <div className={styles.contentContainer}>
                    <Image
                        className={styles.stepIcon}
                        src="/icons/desenvolvimento.png"
                        width={100}
                        height={100}
                        alt="icone do desenvolvimento"
                    />
                    <div>
                        <h3 className={styles.processSubheading}>Desenvolvimento</h3>
                        <p className={styles.processParagraph}>Na fase de desenvolvimento, os programadores transformam o design em código. A equipe trabalha em sprints curtos, priorizando a entrega de funcionalidades incrementais. Durante essa etapa, são realizadas reuniões diárias para acompanhamento do progresso e resolução de impedimentos, assegurando que todos estejam em sincronia.</p>
                    </div>
                </div>

                <div className={styles.contentContainer}>
                    <Image
                        className={styles.stepIcon}
                        src="/icons/testes.png"
                        width={100}
                        height={100}
                        alt="icone dos testes"
                    />
                    <div>
                        <h3 className={styles.processSubheading}>Teste e Avaliação</h3>
                        <p className={styles.processParagraph}>Nesta fase, a equipe realiza testes rigorosos para identificar e corrigir bugs e garantir a qualidade do produto. Avaliam-se as funcionalidades implementadas em relação aos critérios de aceitação estabelecidos anteriormente. Feedback dos usuários e stakeholders é coletado, permitindo ajustes necessários antes do lançamento final.</p>
                    </div>
                </div>

                <div className={styles.contentContainer}>
                    <Image
                        className={styles.stepIcon}
                        src="/icons/lancamento.png"
                        width={100}
                        height={100}
                        alt="icone geração de ideias"
                    />
                    <div>
                        <h3 className={styles.processSubheading}>Lançamento</h3>
                        <p className={styles.processParagraph}>Na fase de lançamento, o produto é disponibilizado ao público. A equipe realiza a implementação final, garantindo que tudo esteja funcionando como planejado. Após o lançamento, são monitorados o desempenho e a aceitação do produto no mercado, permitindo ajustes e melhorias contínuas com base no feedback dos usuários.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Processo;







