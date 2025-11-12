import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-offwhite py-8">
      <div className=" mx-auto px-10 flex flex-col md:flex-row items-center justify-between">
        {/* Nome / Marca */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm text-offwhite">Desenvolvido por</p>
          <h1 className="text-xl font-semibold">André Santos</h1>
        </div>

        {/* Ícones Sociais */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/Andre-lsms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-offwhite transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/andrelms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-offwhite transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:contato@asdesign.net.br"
            className="hover:text-offwhite transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-offwhite">
        © {new Date().getFullYear()} As Design. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
