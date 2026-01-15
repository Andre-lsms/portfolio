import { useState } from "react";
import Form from "../Components/Form";

const MailIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

const WhatsappIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    width="1em"
    height="1em"
  >
    <path d="M16.004 2.667c-7.347 0-13.333 5.986-13.333 13.333 0 2.353.619 4.645 1.792 6.667L2.667 29.333l6.847-1.813a13.21 13.21 0 0 0 6.49 1.707h.001c7.347 0 13.333-5.986 13.333-13.333 0-3.556-1.387-6.9-3.905-9.419A13.285 13.285 0 0 0 16.004 2.667zm0 24c-2.087 0-4.13-.552-5.922-1.594l-.423-.25-4.062 1.075 1.1-3.97-.27-.412a10.637 10.637 0 0 1-1.667-5.729c0-5.893 4.807-10.667 10.667-10.667a10.6 10.6 0 0 1 7.563 3.136 10.594 10.594 0 0 1 3.104 7.531c0 5.86-4.808 10.67-10.67 10.67zm5.424-7.729c-.297-.149-1.754-.867-2.027-.965-.273-.1-.473-.149-.673.149-.198.296-.774.965-.95 1.164-.173.2-.35.223-.647.075-.298-.15-1.257-.462-2.393-1.474a8.91 8.91 0 0 1-1.646-2.047c-.173-.297-.018-.458.13-.606.132-.13.298-.35.447-.523.149-.174.198-.297.298-.495.099-.198.05-.373-.025-.523-.075-.148-.673-1.626-.922-2.228-.244-.586-.495-.507-.673-.517l-.573-.01c-.198 0-.523.074-.798.373s-1.047 1.024-1.047 2.497 1.073 2.894 1.224 3.093c.149.199 2.107 3.222 5.104 4.516.714.307 1.27.49 1.705.628.716.229 1.37.197 1.887.12.576-.086 1.754-.718 2.003-1.412.248-.695.248-1.29.174-1.412-.075-.124-.272-.198-.571-.347z" />
  </svg>
);

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
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#F9F8F6] min-h-screen py-16 px-6 lg:px-24 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto bg-white shadow-[0_50px_100px_rgba(0,0,0,0.05)] rounded-[2.5rem] overflow-hidden border border-primary/5">
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

            <div className="mt-20 space-y-10">
              <div className="space-y-4">
                <span className="block text-[10px] uppercase tracking-widest text-white/30 font-bold">
                  Fale Comigo
                </span>
                <a
                  href="https://wa.me/5531999605165"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-6 text-xl font-bold hover:text-secondary transition-colors"
                >
                  <div className="p-4 rounded-full border border-white/10 group-hover:bg-secondary group-hover:border-secondary transition-all">
                    <WhatsappIcon className="w-6 h-6" />
                  </div>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA - FORM */}
          <div className="w-full lg:w-3/5 p-12 lg:p-20 bg-white">
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
