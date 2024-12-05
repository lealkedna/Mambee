import { FaInstagram } from "react-icons/fa";
import styles from '@/styles/Conheca.module.css'
export default function Conheca(){
    return(
      <section className={styles.secaoSobre}>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Nos conheça melhor</h1>
        <p className={styles.subtitulo}>
          Mambee – escola fábrica de software transformando ideias em soluções
        </p>

        <div className={styles.conteudo}>
          {/* Imagens colocar  */}
         

          
          <div className={styles.texto}>
            <h2 className={styles.subtituloTexto}>Origem:</h2>
            <p>
              Fundada no curso de Análise e Desenvolvimento de Sistemas (ADS),
              a Mambee foi criada para servir como um ambiente onde alunos podem
              colocar em prática o que aprendem em sala de aula, desenvolvendo
              projetos de software reais.
            </p>

            <h2 className={styles.subtituloTexto}>Objetivos:</h2>
            <p>
              A Mambee busca promover o crescimento técnico e profissional dos
              alunos, oferecendo um espaço colaborativo que simula o ambiente
              de trabalho. O Laboratorio incentiva a inovação, desenvolvimento de habilidades de progamação, trabalho em equipe, e aplicação de metodologias ágeis. 
            </p>

            <h2 className={styles.subtituloTexto}>Evolução:</h2>
            <p>
              Com o tempo, a Mambee se modernizou, adotando novas tecnologias,
              como inteligência artificial e desenvolvimento mobile. A infraestrutura foi aprimorada e o número de projetos aumentou em complexidade, além de parcerias com empresas e eventos de tecnologias que enriqueceram o ambiente.
            </p>

            <h2 className={styles.subtituloTexto}>Impacto nos Alunos:</h2>
            <p>
              Muitos alunos que passaram pela Mambee destacam o laboratório como
              um divisor de águas na sua formação. A experiência Pratica, aliada ao ambiente de apoio, os preparou para enfrentar os desafios do mercado de trabalho, resultando em sucesso profissional.
            </p>

            <h2 className={styles.subtituloTexto}>Resultados Obtidos:</h2>
            <p>
              O laboratório tem formado alunos que se destacam no mercado de
              tecnologia, graças as á vivencia prática e ao desenvolvimento de projetos complexos, além de habilidades interpessoais adquiridas durante a experiencia na Mambee.
            </p>

            <h2 className={styles.subtituloTexto}>Planos Futuros:</h2>
            <p>
              A Mambee pretende expandir suas parcerias com empresas de
              tecnologia, continuar investindo em projetos inovadores e criar programas de mentorias para que ex-alunos voltar e compartilhar suas experiências com as novas gerações. 
            </p>

            
            <button className={styles.botaoAcao}>Vamos conversar</button>
          </div>
        </div>
      </div>
    </section>
    );
 
}