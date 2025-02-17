import TeachersCard from './TeachersCard';
import Title1 from './text/Title1';

export default function Teachers() {

    const information = [
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
            <section className="relative w-full mt-10 bg-[#2ECBF7]">
                <div className='max-w-7xl min-h-[80vh] m-auto p-5 flex flex-col justify-center gap-10'>
                    <Title1 className='text-center text-white'>Nossos Professores</Title1>
                    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4">
                        {
                            information.map((info, index) => (
                                <TeachersCard
                                    key={index}
                                    image={info.image}
                                    nome={info.nome}
                                    descricao={info.descricao}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}