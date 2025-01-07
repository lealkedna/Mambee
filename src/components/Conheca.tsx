import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/Conheca.module.css'

export default function Conheca() {
  return (

    <section className={styles.secaoSobre}>
        <header className={styles.cabecalho}>
            <h2 className={styles.titulo}>
              Nos conheça melhor
            </h2>
            <p className={styles.subtitulo}>
              Mambee – escola fábrica de software <br/> transformando ideias em soluções
            </p>
          <Image
            className={styles.favo}
            src="/images/favoMel.png"
            width={120}
            height={120}
            alt="Favo de mel"
          />
        </header>


        <div className={styles.conteudo}>
          <div className={styles.images}>
            <Image
              src="/images/Imagem.svg"
              alt="Equipe trabalhando"
              width={500}
              height={300}
              className="image"
            />
            <Image
              src="/images/Imagem (1).svg"
              alt="Laboratório tecnológico"
              width={500}
              height={300}
              className="image"
            />
          </div>
          <div className={styles.texto}>
            <p>
            <span className={styles.textAzul}>Origem:</span> Fundada no curso de Análise e Desenvolvimento de Sistemas (ADS),
              a Mambee foi criada para servir como um ambiente onde alunos podem
              colocar em prática o que aprendem em sala de aula, desenvolvendo
              projetos de software reais.
            </p>
            <br/>
            <p>
              <span className={styles.textAzul}>Objetivos:</span> A Mambee busca promover o crescimento técnico e profissional dos
              alunos, oferecendo um espaço colaborativo que simula o ambiente
              de trabalho. O Laboratorio incentiva a inovação, desenvolvimento de habilidades de progamação, trabalho em equipe, e aplicação de metodologias ágeis.
            </p>
            <br/>
            <p>
              <span className={styles.textAzul}>Evolução:</span> Com o tempo, a Mambee se modernizou, adotando novas tecnologias,
              como inteligência artificial e desenvolvimento mobile. A infraestrutura foi aprimorada e o número de projetos aumentou em complexidade, além de parcerias com empresas e eventos de tecnologias que enriqueceram o ambiente.
            </p>
            <br/>
            <p>
            <span className={styles.textAzul}>Impacto nos Alunos:</span> Muitos alunos que passaram pela Mambee destacam o laboratório como
              um divisor de águas na sua formação. A experiência prática, aliada ao ambiente de apoio, os preparou para enfrentar os desafios do mercado de trabalho, resultando em sucesso profissional.
            </p>
            <br/>
            <p>
            <span className={styles.textAzul}>Resultados Obtidos:</span> O laboratório tem formado alunos que se destacam no mercado de
              tecnologia, graças as á vivencia prática e ao desenvolvimento de projetos complexos, além de habilidades interpessoais adquiridas durante a experiencia na Mambee.
            </p>
            <br/>
            <p>
            <span className={styles.textAzul}>Planos Futuros:</span> A Mambee pretende expandir suas parcerias com empresas de
              tecnologia, continuar investindo em projetos inovadores e criar programas de mentorias para que ex-alunos voltar e compartilhar suas experiências com as novas gerações.
            </p>
            <Link href={"#Contato"} >
              <button type="button" className={styles.botaoAcao}>Vamos conversar</button>
            </Link>
          </div>
        </div>
    </section>
  );

}