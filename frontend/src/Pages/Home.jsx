import { useNavigate } from "react-router-dom";
import ps from "../assets/icons/ps.png";
import ai from "../assets/icons/ai.png";
import pr from "../assets/icons/pr.png";
import ae from "../assets/icons/ae.png";
import canva from "../assets/icons/canva.png";
import capcut from "../assets/icons/capcut.png";
import davinci from "../assets/icons/davinci.png";
import affinity from "../assets/icons/Affinity.png";
import myphoto from "../assets/foto.png";

function Home() {
  const navigate = useNavigate();

  const tools = [
    { icon: ps, name: "Photoshop" },
    { icon: ai, name: "Illustrator" },
    { icon: pr, name: "Premiere" },
    { icon: ae, name: "After Effects" },
    { icon: capcut, name: "CapCut" },
    { icon: canva, name: "Canva" },
    { icon: davinci, name: "DaVinci" },
    { icon: affinity, name: "Affinity" },
  ];

  return (
    <div className="bg-[#F9F8F6] min-h-screen selection:bg-secondary selection:text-white font-sans text-primary">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-24 border-b border-primary/10">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 items-center gap-16">
          {/* TEXTO */}
          <div className="space-y-10 relative z-20">
            <h1 className="text-6xl sm:text-7xl lg:text-[9rem] font-titulo font-bold leading-[0.85] tracking-tight">
              André <br />
              <span className="text-secondary">Santos.</span>
            </h1>

            <p className="text-lg md:text-2xl text-primary/70 max-w-xl leading-relaxed">
              Designer Visual e Editor de Vídeo focado em transformar
              <span className="text-primary font-medium italic">
                {" "}
                ideias em narrativas visuais potentes e memoráveis.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button
                onClick={() => navigate("/projetos")}
                className="group relative px-10 py-5 bg-primary text-white border-none rounded-full font-bold uppercase tracking-widest text-[11px] overflow-hidden transition-all shadow-2xl hover:scale-105"
              >
                <span className="relative z-10">Explorar Designs</span>
              </button>

              <button
                onClick={() =>
                  window.scrollTo({
                    top: 1000,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="group relative px-10 py-5 bg-secondary text-offwhite border-none rounded-full font-bold uppercase tracking-widest text-[11px] overflow-hidden transition-all shadow-2xl hover:scale-105"
              >
                <span className="relative z-10">Sobre</span>
              </button>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="relative hidden lg:block h-[115%] -top-16 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F9F8F6] z-10" />
            <img
              src={myphoto}
              alt="André Santos"
              className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl saturate-[0.85] hover:saturate-100 transition-all duration-700"
            />
          </div>
        </div>

        {/* TEXTO DE FUNDO */}
        <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 text-[14vw] font-titulo font-bold opacity-[0.035] select-none whitespace-nowrap pointer-events-none uppercase">
          Designer — Editor — Designer — Editor
        </div>
      </section>

      {/* TRAJETÓRIA CRIATIVA */}
      <section className="bg-white py-28 lg:py-48 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-24 grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl lg:text-6xl font-titulo font-bold leading-tight">
              Caminho <br />{" "}
              <span className="text-secondary font-light">Criativo</span>
            </h2>

            <p className="text-lg text-primary/75 leading-relaxed text-justify">
              Natural de Araçuaí – MG, trabalho transformando ideias em soluções
              visuais e digitais. Minha experiência com design e edição nasceu
              da curiosidade e se consolidou através de projetos independentes e
              freelances. Hoje, busco unir estética e comunicação funcional,
              acreditando que cada detalhe de um projeto deve ter um propósito
              claro.
              <br />
              <br />
            </p>

            <div className="p-8 bg-[#F9F8F6] border-l-4 border-secondary rounded-r-2xl shadow-sm">
              <p className="italic font-medium text-primary/80">
                Design focado no propósito. Edição focada na narrativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-32 lg:py-56 px-6 lg:px-24">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-4xl lg:text-7xl font-titulo font-bold leading-none">
            Design é método.
            <br />
            <span className="text-secondary italic">Edição é ritmo.</span>
            <br />
            <span className="text-secondary font-light">
              A experiência é o resultado.
            </span>
          </h2>
        </div>
      </section>

      {/* ARSENAL PROFISSIONAL */}
      <section className="py-32 lg:py-56 px-6 lg:px-24 bg-white border-t border-primary/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
          <header className="space-y-4">
            <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">
              Stack Criativa
            </span>
            <h2 className="text-5xl lg:text-7xl font-titulo font-bold">
              Arsenal Profissional.
            </h2>
          </header>
          <p className="text-primary/40 font-bold uppercase tracking-widest text-[10px] border-b border-primary/10 pb-2">
            Softwares líderes de mercado para criação e edição
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-4"
            >
              <div className="bg-[#F9F8F6] w-full aspect-square flex items-center justify-center rounded-2xl border border-primary/5 group-hover:shadow-[0_20px_50px_rgba(113,86,44,0.1)] group-hover:-translate-y-3 transition-all duration-500">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-10 lg:w-12 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30 group-hover:text-primary transition-colors">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className=" py-32 lg:py-48 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 text-[20vw] font-titulo font-bold text-primary select-none whitespace-nowrap">
            STUDIO — STUDIO — STUDIO
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <h2 className="text-secondary text-5xl lg:text-8xl font-titulo font-bold leading-none">
            Vamos elevar seu visual?
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button
              onClick={() => navigate("/projetos")}
              className="px-12 py-6 bg-primary  text-white border-none font-bold uppercase tracking-widest text-[11px] rounded-full hover:scale-105 transition-transform shadow-xl"
            >
              Explorar Designs
            </button>
            <button
              onClick={() => navigate("/contato")}
              className="px-12 py-6 bg-secondary text-white border-none font-bold uppercase tracking-widest text-[11px] rounded-full hover:scale-105 transition-transform shadow-xl"
            >
              Entrar em contato
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
