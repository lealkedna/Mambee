import Image from 'next/image';
import ProfessorCard from './ProfessoresCard';
import Title1 from './text/Title1';

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
            <section className="relative w-full max-w-7xl mx-auto">
                <Image className="absolute top-[-50px] right-0 hidden md:block"
                    src="/images/favoMel.png"
                    width={120}
                    height={120}
                    alt="Favo de mel"
                />
                <Title1 className='text-center'>Nossos Professores</Title1>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 p-5">
                    {
                        informacoes.map((info, index) => (
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