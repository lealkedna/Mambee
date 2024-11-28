import styles from '@/styles/Professores.module.css'
import ProfessorCard from './ProfessoresCard';

export default function Professores() {

    const informacoes = [
        {
            image: '',
            nome: 'Aislan Rafael',
            descricao: 'Mestre em Engenharia de Software - Professor do IFPI desde de 2007'
        },
        {
            image: '',
            nome: 'Jesiel Viana',
            descricao: 'Mestre em Engenharia de Software - Professor do IFPI desde de 2016'
        },
        {
            image: '',
            nome: 'João Paulo',
            descricao: 'Pós-Graduado em Engenharia de Produção - Professor do IFPI desde de 2013'
        },
        {
            image: '',
            nome: 'Jader Abreu',
            descricao: 'Doutor em Ciência da Computação - Professor do IFPI desde de 2014'
        },
    ]

    return (
        <>
              <section className={styles.professores}>
                <h2>Nossos Professores</h2>
                <div className={styles.noticia}>
            {
                informacoes.map((info, index)=>( 
                    <ProfessorCard 
                        key={index}
                        image={info.image}
                        nome={info.nome}
                        descricao={info.descricao}
                      />
                ))
            }
            </div>
              </section>
        </>
    )
}