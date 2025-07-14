import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-offwhite py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Nome / Marca */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-xl font-semibold">Seu Nome</h1>
          <p className="text-sm text-offwhite">Desenvolvedor Front-end</p>
        </div>

        {/* Ícones Sociais */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-offwhite transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-offwhite transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:seuemail@email.com"
            className="hover:text-offwhite transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-offwhite">
        © {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
