import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Title1 from "./text/Title1";
import Card from "./layout/Card";

function Contato() {
    return (
        <section id='Contato' className="w-full max-w-4xl mx-auto">
            <Title1 className="text-center">Contato</Title1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4">
                <Card className="hover:bg-azul hover:text-white">
                    <a href="mailto:mambee.fabrica@gmail.com" aria-label="Redireciona para enviar um email" className="flex items-center gap-3 p-5">
                        <MdOutlineEmail className="text-2xl"/>
                        <span className="font-bold">mambee.fabrica@gmail.com</span>
                    </a>
                </Card>
                <Card className="hover:bg-azul hover:text-white">
                    <a href="https://www.instagram.com/mambeeifpi/" target="_blank" aria-label="Redireciona para o Instagram" className="flex items-center gap-3 p-5">
                        <FaInstagram className="text-2xl"/>
                        <span className="font-bold">@mambeeifpi</span>
                    </a>
                </Card>
                <Card className="col-span-1 md:col-span-2 p-5 flex items-center gap-3">
                    < IoLocationOutline className="text-2xl"/>
                    <span className="font-bold">
                        Av Pedro Marques de Medeiros, s/n - Parque Industrial, Picos - PI, 64605-500<br />
                        IFPI Campus Picos, Sala E5 (Mambee), Pantanal, Picos - PI
                    </span>
                </Card>
            </div>
        </section>
    );
}

export default Contato;
