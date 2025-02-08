import Image from "next/image";

function Parceiros() {
    return (
        <div className="mx-auto w-full max-w-7xl p-5">
            <header className="flex flex-col items-center justify-center">
                <h2 className="text-5xl font-bold text-blue-500 font-kanit">Parceiros</h2>
                <p className="text-2xl font-kanit font-bold text-white mt-[-10px]">
                    Transformando ideias em soluções
                </p>
            </header>
            <aside className="">
                <p className="w-full md:w-[50%] text-justify">
                    Na Mambee, nossa escola-fábrica de software, trabalhamos junto
                    aos parceiros para criar um ambiente de aprendizado prático, que
                    simula os desafios reais do mercado. Esse apoio é essencial para
                    estimular a criatividade dos alunos e manter um fluxo contínuo de
                    projetos inovadores. Assim, preparamos nossos futuros profissionais
                    para o mercado de tecnologia, garantindo que saiam
                    com as habilidades e experiências necessárias para enfrentar desafios da
                    indústria de forma inovadora e eficiente.
                </p>
                <div className="">
                    <Image
                        src="/images/parceiros/Favo de mel Parceiros.svg"
                        alt="Favos dos parceiros"
                        width={0}
                        height={0}
                        className="hidden md:block w-full relative top-[-120px]"
                    />
                    <Image
                        src="/images/parceiros/FavoMobile.svg"
                        alt="Favos dos parceiros"
                        width={0}
                        height={0}
                        className="block w-full  md:hidden"
                    />
                </div>
            </aside>
        </div>
    );
}

export default Parceiros;
