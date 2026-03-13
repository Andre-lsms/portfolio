// Form.jsx
import { useRef } from "react";

function Form({
  formData,
  handleChange,
  handleSubmit,
  maxChars,
  isSubmitting,
  status,
}) {
  const textareaRef = useRef(null);

  // Função que ajusta a altura do textarea automaticamente
  const handleTextareaInput = (e) => {
    handleChange(e);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
      {/* AREA DE NOTIFICAÇÕES (Toasts) */}
      <div className="min-h-[60px] flex items-end">
        {status === "success" && (
          <div className="w-full bg-[#F4FBF6] border border-[#D1F0DA] text-[#1E4620] px-6 py-4 rounded-2xl text-sm font-medium flex items-center gap-3 transition-all duration-500">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Mensagem enviada!
          </div>
        )}
        {status === "error" && (
          <div className="w-full bg-[#FEF5F5] border border-[#FAD2D2] text-[#5C1A1A] px-6 py-4 rounded-2xl text-sm font-medium flex items-center gap-3 transition-all duration-500">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            Ocorreu um erro ao enviar. Tente novamente.
          </div>
        )}
        {status === "empty_fields" && (
          <div className="w-full bg-[#FFFBF0] border border-[#FBEAC3] text-[#5C4B1A] px-6 py-4 rounded-2xl text-sm font-medium flex items-center gap-3 transition-all duration-500">
            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
            Por favor, preencha todos os campos corretamente.
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label
            htmlFor="name"
            className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary ml-2"
          >
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            maxLength={80}
            className="w-full p-5 text-primary bg-[#F9F8F6] rounded-2xl border border-secondary focus:bg-white focus:border-primary focus:ring-4 focus:ring-secondary/10 transition-all outline-none font-sans"
          />
        </div>

        <div className="space-y-3">
          <label
            htmlFor="email"
            className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary ml-2"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            maxLength={254}
            className="w-full p-5 text-primary bg-[#F9F8F6] rounded-2xl border border-secondary focus:bg-white focus:border-primary focus:ring-4 focus:ring-secondary/10 transition-all outline-none font-sans"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label
          htmlFor="assunto"
          className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary ml-2"
        >
          Assunto / Projeto
        </label>
        <input
          type="text"
          id="assunto"
          name="assunto"
          value={formData.assunto}
          onChange={handleChange}
          maxLength={120}
          className="w-full p-5 text-primary bg-[#F9F8F6] rounded-2xl border border-secondary focus:bg-white focus:border-primary focus:ring-4 focus:ring-secondary/10 transition-all outline-none font-sans"
        />
      </div>

      <div className="space-y-3 relative group">
        <label
          htmlFor="message"
          className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary ml-2"
        >
          Sua Mensagem
        </label>
        <textarea
          ref={textareaRef}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleTextareaInput}
          rows="4"
          maxLength={maxChars}
          
          className="w-full p-5 pb-10 text-primary bg-[#F9F8F6] rounded-2xl border border-secondary focus:bg-white focus:border-primary focus:ring-4 focus:ring-secondary/10 transition-all outline-none resize-none overflow-hidden min-h-[140px] font-sans"
        ></textarea>

        <div className="absolute bottom-5 right-5 text-[10px] font-bold text-primary tracking-widest group-focus-within:text-secondary transition-colors">
          {formData.message.length} / {maxChars}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-5 mt-2 bg-primary text-white font-bold text-[11px] uppercase tracking-[0.3em] rounded-2xl hover:bg-secondary transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20 disabled:bg-primary/10 disabled:text-primary/30 disabled:shadow-none disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Processando..." : "Enviar"}
      </button>
    </form>
  );
}

export default Form;
