import { useState } from "react";

function Footer() {
  const [mensagem, setMensagem] = useState("");
  const maxChars = 1000;

  return (
    <footer className="flex flex-col justify-center items-center bg-primary text-white py-16 px-4 space-y-10">
      <h1 className="text-3xl font-semibold">Entre em contato</h1>

      <form className="flex flex-col space-y-4 w-full max-w-xl">
        <label htmlFor="nome" className="text-sm font-medium">
          Nome*
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Insira seu nome"
          maxLength={80}
          required
          className="p-3 rounded-md border border-gray-300 text-black"
        />

        <label htmlFor="email" className="text-sm font-medium">
          Email*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Insira seu email"
          maxLength={254}
          required
          className="p-3 rounded-md border border-gray-300 text-black"
        />

        <label htmlFor="assunto" className="text-sm font-medium">
          Assunto*
        </label>
        <input
          type="text"
          id="assunto"
          name="assunto"
          placeholder="Insira o assunto"
          maxLength={120}
          required
          className="p-3 rounded-md border border-gray-300 text-black"
        />

        <label htmlFor="mensagem" className="text-sm font-medium">
          Mensagem*
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          maxLength={maxChars}
          rows={6}
          placeholder="Digite sua mensagem aqui..."
          required
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="p-3 rounded-md border border-gray-300 text-black resize-none"
        ></textarea>

        <div className="text-sm text-right text-white">
          {mensagem.length}/{maxChars}
        </div>

        <button
          type="submit"
          className="mt-4 bg-white text-primary font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition"
        >
          Enviar
        </button>
      </form>
    </footer>
  );
}

export default Footer;
