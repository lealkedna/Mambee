"use client"
import Image from "next/image";
import PrimaryButton from "../button/PrimaryButton";

export default function Navbar() {
    return (
        <div className="w-full flex justify-center bg-fundoClaro">
            <div className="flex items-center justify-between w-full max-w-7xl p-4">
                <div className="">
                    <Image
                        src="/images/mambee-logo-2.png"
                        width={130}
                        height={0}
                        alt="Logo da Mambee"
                    />
                </div>
                <div className="flex space-x-5 text-xl font-bold">
                    <a href="#Contact">
                        <PrimaryButton>Contate-nos</PrimaryButton>
                    </a>
                    {/*<a href="">Projetos</a>
                    <a href="">Egressos</a>*/}
                </div>
            </div>
        </div>
    )
}