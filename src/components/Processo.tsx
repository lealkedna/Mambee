import React from 'react';
import Image from 'next/image';
import styles from "@/styles/Processo.module.css"
function Processo() {
    return (
        <div className={styles.twoColumns}>
            <div className={styles.leftColumn}>
                <h1 className={styles.h1Processo}>Processo</h1>
                <p className={styles.paragrafoP}>Como uma equipe de desenvolvimento, nós utilizamos um método de desenvolvimento ágil baseada no scrum, onde após o planejamento, o desenvolvimento e avaliação se tornam um ciclo constante até a finalização do produto.</p>
                <button className={styles.botaoProcesso}>Nosso último projeto</button>
                <Image
                    src="/images/processo.png"
                    width={500}
                    height={600}
                    alt="Processo da Mambee"
                    className={styles.imageProcesso}
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
                <div>
                    <h3 className={styles.h3Processo}>Geração de ideias </h3>
                    <p className={styles.paragrafoP}>Nesta fase, a equipe se reúne para brainstorm e discutir as necessidades do projeto. O foco é explorar ideias e definir os objetivos iniciais, identificando problemas a serem resolvidos e oportunidades a serem aproveitadas. Documenta-se as expectativas dos stakeholders e se elabora uma visão geral do produto.</p>
                </div>

                <div>
                    <h3 className={styles.h3Processo}>Planejamento </h3>
                    <p className={styles.paragrafoP}>Na fase de planejamento, a equipe define as prioridades e cria um backlog inicial com as funcionalidades desejadas. São estimados os recursos necessários e elaborado um cronograma de desenvolvimento. As responsabilidades são distribuídas entre os membros da equipe, garantindo que todos estejam alinhados com as metas e prazos.</p>
                </div>

                <div>
                    <h3 className={styles.h3Processo}>Design </h3>
                    <p className={styles.paragrafoP}>Durante a fase de design, são elaboradas as soluções técnicas e visuais do projeto. A equipe cria protótipos, wireframes e define a arquitetura do software. O foco é garantir que a experiência do usuário seja intuitiva e que a solução atenda às necessidades identificadas na fase de geração de ideias.</p>
                </div>

                <div>
                    <h3 className={styles.h3Processo}>Desenvolvimento</h3>
                    <p className={styles.paragrafoP}>Na fase de desenvolvimento, os programadores transformam o design em código. A equipe trabalha em sprints curtos, priorizando a entrega de funcionalidades incrementais. Durante essa etapa, são realizadas reuniões diárias para acompanhamento do progresso e resolução de impedimentos, assegurando que todos estejam em sincronia.</p>
                </div>

                <div>
                    <h3 className={styles.h3Processo}>Teste e Avaliação</h3>
                    <p className={styles.paragrafoP}>Nesta fase, a equipe realiza testes rigorosos para identificar e corrigir bugs e garantir a qualidade do produto. Avaliam-se as funcionalidades implementadas em relação aos critérios de aceitação estabelecidos anteriormente. Feedback dos usuários e stakeholders é coletado, permitindo ajustes necessários antes do lançamento final.</p>
                </div>

                <div>
                    <h3 className={styles.h3Processo}>Lançamento</h3>
                    <p className={styles.paragrafoP}>Na fase de lançamento, o produto é disponibilizado ao público. A equipe realiza a implementação final, garantindo que tudo esteja funcionando como planejado. Após o lançamento, são monitorados o desempenho e a aceitação do produto no mercado, permitindo ajustes e melhorias contínuas com base no feedback dos usuários.</p>
                </div>
            </div>
        </div>
    );
};


export default Processo;






