import Image from 'next/image';
import styles from '@/styles/Professores.module.css'
import ProfessorCard from './ProfessoresCard';

export default function Professores() {

    const informacoes = [
        {
            image: '/images/aislan.jpeg',
            nome: 'Aislan Rafael',
            descricao: 'Mestre em Engenharia de Software - Professor do IFPI desde de 2007'
        },
        {
            image: '/images/joaopaulo.jpg',
            nome: 'João Paulo',
            descricao: 'Pós-Graduado em Engenharia de Produção - Professor do IFPI desde de 2013'
        },
        {
            image: '/images/jader.jpg',
            nome: 'Jader Abreu',
            descricao: 'Doutor em Ciência da Computação - Professor do IFPI desde de 2014'
        },
        {
            image: '/images/jesiel-.jpeg',
            nome: 'Jesiel Viana',
            descricao: 'Mestre em Engenharia de Software - Professor do IFPI desde de 2016'
        },
    ]

    return (
        <>
              <section className={styles.professores}>
              <Image className={styles.favo}
                    src="/images/favoMel.png"
                    width={120}
                    height={120}
                    alt="Favo de mel"
                />
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