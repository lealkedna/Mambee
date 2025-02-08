"use client"
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="w-full flex justify-center">
            <div className="flex items-center justify-between w-full max-w-7xl px-4">
                <div className="">
                    <Image
                        src="/images/Mambee-logoV2.png"
                        width={130}
                        height={70}
                        alt="Logo da Mambee"
                    />
                </div>
                <div className="flex space-x-5 text-xl font-bold">
                    <a href="">Início</a>
                    <a href="">Projetos</a>
                    <a href="">Egressos</a>
                </div>
            </div>
        </div>
    )
}