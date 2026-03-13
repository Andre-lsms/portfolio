import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-offwhite py-10 px-6 lg:px-12 border-t border-white/5">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        
        {/* Coluna Esquerda: Espaço invisível para manter a logo centralizada */}
        <div className="hidden md:block w-full md:w-1/3"></div>

        {/* Coluna Central: Logo */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/logo_as_studio.png"
            alt="logotipo da marca André Studio"
            className="size-20 object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Coluna Direita: Ícones e Direitos */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-end gap-4">
          
          {/* Ícones Sociais */}
          <div className="flex space-x-6 text-xl">
            <a
              href="https://github.com/Andre-lsms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-offwhite/70 hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/andrelms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-offwhite/70 hover:text-white transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-offwhite/50 text-center md:text-right">
            © {new Date().getFullYear()} André Studio.<br className="hidden md:block" /> Todos os direitos reservados.
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;