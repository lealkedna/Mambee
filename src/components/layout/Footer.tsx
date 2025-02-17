import Image from "next/image";
import { FaYoutube, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex justify-center items-center w-full py-6 border-t-2 border-rosa bg-fundoClaro">
      <div className="flex flex-wrap justify-between items-center w-full max-w-6xl gap-8 px-4">
        <div className="flex justify-center w-full sm:w-auto">
          <Image
            src="/images/mambee-logo-3.png"
            width={220}
            height={140}
            alt="Logo da Mambee"
            className="h-auto"
          />
        </div>

        <nav className="w-full sm:w-auto text-center">
          <ul className="flex flex-wrap justify-center gap-5 list-none m-0 p-0 text-xl font-medium">
            <li className="text-rosa border-b-4 border-rosa">Início</li>
            {/* <li className="hover:text-rosa cursor-pointer">Projetos</li>
            <li className="hover:text-rosa cursor-pointer">Egressos</li> */}
          </ul>
        </nav>

        <div className="w-full sm:w-auto flex flex-col items-center sm:items-end gap-4">
          <div className="flex gap-4">
            <a
              href="https://www.youtube.com/@Mambee"
              target="_blank"
              aria-label="YouTube"
              className="p-2 border-2 border-rosa rounded-full transition-transform duration-300 text-rosa hover:bg-rosa hover:text-white transform hover:scale-110"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://www.instagram.com/mambeeifpi/"
              target="_blank"
              aria-label="Instagram"
              className="p-2 border-2 border-rosa rounded-full transition-transform duration-300 text-rosa hover:bg-rosa hover:text-white transform hover:scale-110"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://github.com/mambee-ifpi-picos"
              target="_blank"
              aria-label="GitHub"
              className="p-2 border-2 border-rosa rounded-full transition-transform duration-300 text-rosa hover:bg-rosa hover:text-white transform hover:scale-110"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mambee-f%C3%A1brica-escola-de-software-b5bb161b0/"
              target="_blank"
              aria-label="LinkedIn"
              className="p-2 border-2 border-rosa rounded-full transition-transform duration-300 text-rosa hover:bg-rosa hover:text-white transform hover:scale-110"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-600 font-light text-center">
            Copyright &copy; Mambee 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
