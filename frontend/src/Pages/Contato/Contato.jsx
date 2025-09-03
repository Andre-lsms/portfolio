import Form from "../../Components/Form/Form";
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
  


  return (
    <div className="w-full bg-offwhite min-h-[calc(100vh-7rem)] p-4 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/5 bg-primary text-white p-8 md:p-12 flex flex-col justify-center">
            <h1 className="font-titulo font-bold text-4xl md:text-5xl mb-4 text-center lg:text-left">
              Vamos Conversar
            </h1>
            <p className="font-sans text-lg leading-relaxed mb-10 text-center lg:text-left">
              Estou sempre aberto a novas oportunidades. Para propostas de
              projeto, por favor, utilize o formulário ao lado para garantir que
              eu tenha todos os detalhes. Para uma pergunta rápida, me chame no
              WhatsApp!
            </p>
            <div className="flex flex-col items-center lg:items-start gap-6">
              <a
                href="https://wa.me/5531999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 border-offwhite border-2 rounded-lg font-bold text-offwhite hover:bg-offwhite hover:text-primary transition-colors shadow-md"
              >
                <WhatsappIcon className="w-6 h-6" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          <Form></Form>
        </div>
      </div>
    </div>
  );
}

export default Contato;
