import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    assunto: "",
    message: "",
  });

  const maxChars = 1000;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    alert("Mensagem enviada com sucesso! (Verifique o console)");
    setFormData({ name: "", email: "", assunto: "", message: "" });
  };
  return (
    <div className="w-full lg:w-3/5 p-8 md:p-12">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label htmlFor="name" className="block text-primary font-bold mb-2">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength={80}
            className="w-full p-3 bg-offwhite rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition"
            placeholder="Seu nome completo"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-primary font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={254}
            className="w-full p-3 bg-offwhite rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition"
            placeholder="seu.email@exemplo.com"
          />
        </div>
        <div>
          <label
            htmlFor="assunto"
            className="block text-primary font-bold mb-2"
          >
            Assunto
          </label>
          <input
            type="text"
            id="assunto"
            name="assunto"
            value={formData.assunto}
            onChange={handleChange}
            required
            maxLength={120}
            className="w-full p-3 bg-offwhite rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition"
            placeholder="Sobre o que gostaria de conversar?"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-primary font-bold mb-2"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            maxLength={maxChars}
            className="w-full p-3 bg-offwhite rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
            placeholder="Deixe sua mensagem aqui..."
          ></textarea>
          <div className="text-sm text-right text-gray-500 mt-1">
            {formData.message.length}/{maxChars}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white font-bold text-lg rounded-md hover:bg-tertiary transition-colors"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
