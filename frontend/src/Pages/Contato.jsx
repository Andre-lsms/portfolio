// Contato.jsx
import { useState } from "react";
import Form from "../Components/Form";

function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    assunto: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const maxChars = 1000;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validação de campos vazios
    if (!formData.name || !formData.email || !formData.assunto || !formData.message) {
      setStatus("empty_fields");
      setTimeout(() => setStatus(""), 4000); // Esconde o aviso após 4s
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", assunto: "", message: "" });
        setTimeout(() => setStatus(""), 5000); // Esconde o sucesso após 5s
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#F9F8F6] min-h-screen py-16 px-6 lg:px-24 flex items-center justify-center selection:bg-secondary selection:text-white">
      <div className="w-full max-w-7xl mx-auto bg-white shadow-[0_30px_80px_rgba(0,0,0,0.04)] rounded-[2.5rem] overflow-hidden border border-primary/5">
        <div className="flex flex-col lg:flex-row">
          {/* COLUNA ESQUERDA - INFO */}
          <div className="w-full lg:w-2/5 bg-primary text-white p-12 lg:p-20 flex flex-col justify-between">
            <header className="space-y-8">
              <div className="space-y-2">
                <span className="uppercase tracking-[0.5em] text-[10px] font-bold text-white/40">
                  Contato
                </span>
                <h1 className="font-titulo font-bold text-5xl lg:text-7xl leading-none">
                  Vamos <br /> <span className="text-secondary">Criar.</span>
                </h1>
              </div>
              <p className="font-sans text-lg text-white/60 leading-relaxed max-w-xs">
                Estou disponível para novas colaborações e projetos que buscam
                clareza visual.
              </p>
            </header>
          </div>

          {/* COLUNA DIREITA - FORM */}
          <div className="w-full lg:w-3/5 p-8 sm:p-12 lg:p-20 bg-white">
            <Form
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              maxChars={maxChars}
              isSubmitting={isSubmitting}
              status={status}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;