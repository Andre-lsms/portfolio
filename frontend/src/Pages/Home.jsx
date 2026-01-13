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
              Designer Visual e Editor de Vídeo focado em criar{" "}
              <span className="text-primary font-medium italic">
                experiências que comunicam com clareza.
              </span>
            </p>

            <button
              onClick={() => navigate("/projetos")}
              className="px-10 py-5 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-secondary transition-all shadow-2xl hover:-translate-y-1"
            >
              Explorar Projetos
            </button>
          </div>

          {/* IMAGEM */}
          <div className="relative hidden lg:block h-[115%] -top-16 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F9F8F6] z-10" />
            <img
              src={myphoto}
              alt="André Santos"
              className="w-full h-full object-cover rounded-[2.5rem] grayscale-[0.4] hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </div>
        </div>

        {/* TEXTO DE FUNDO */}
        <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 text-[14vw] font-titulo font-bold opacity-[0.035] select-none whitespace-nowrap pointer-events-none">
          SOBRE MIM — SOBRE MIM
        </div>
      </section>

      {/* TRAJETÓRIA */}
      <section className="bg-white py-28 lg:py-48 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-24 grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl lg:text-6xl font-titulo font-bold">
              Trajetória
            </h2>

            <p className="text-lg text-primary/75 leading-relaxed">
              Natural de Araçuaí – MG, minha jornada começou com a curiosidade
              de dar vida a projetos pessoais. Essa inquietude me levou a
              dominar ferramentas e processos criativos voltados à comunicação
              visual.
            </p>

            <div className="p-8 bg-offwhite border-l-4 border-secondary rounded-r-2xl shadow-sm">
              <p className="italic font-medium text-primary/80">
                “Transformo conceitos abstratos em identidades visuais
                memoráveis, equilibrando técnica e sensibilidade.”
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Localização", val: "João Monlevade, MG" },
              { label: "Formação", val: "Sistemas de Informação" },
              { label: "Experiência", val: "Designer & Editor" },
              { label: "Foco", val: "Branding & Social" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 border border-primary/10 rounded-2xl hover:border-secondary/40 transition-colors bg-white"
              >
                <span className="block text-[10px] uppercase tracking-widest text-primary/50 mb-2">
                  {item.label}
                </span>
                <span className="font-bold text-sm uppercase">{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section className="py-28 lg:py-48 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
          <h2 className="lg:col-span-5 text-4xl lg:text-6xl font-titulo font-bold leading-tight">
            Design é a ponte entre intenção e solução.
          </h2>

          <p className="lg:col-span-7 text-lg lg:text-2xl text-primary/65 leading-relaxed text-justify">
            Estética sem propósito é apenas decoração. Cada escolha visual deve
            guiar o olhar, transmitir intenção e resolver problemas reais.
          </p>
        </div>
      </section>

      {/* TOOLKIT */}
      <section className="py-28 lg:py-48 px-6 lg:px-24 bg-white border-y border-primary/10">
        <div className="max-w-7xl mx-auto space-y-20">
          <header>
            <span className="text-secondary font-bold uppercase tracking-[0.35em] text-xs">
              Softwares & Tecnologias
            </span>
            <h2 className="text-4xl lg:text-6xl font-titulo font-bold mt-4">
              Arsenal Técnico
            </h2>
          </header>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {tools.map((tool) => (
              <div key={tool.name} className="group text-center">
                <div className="bg-offwhite aspect-square flex items-center justify-center rounded-2xl border border-primary/10 group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-10 lg:w-12 group-hover:scale-110 transition-transform"
                  />
                </div>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-primary/50">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-28 lg:py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-white text-4xl lg:text-7xl font-titulo font-bold leading-tight">
            Vamos criar algo <span className="text-secondary">memorável?</span>
          </h2>

          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Disponível para novos projetos, parcerias e ideias criativas.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
            <button
              onClick={() => navigate("/contato")}
              className="px-10 py-5 bg-secondary text-white font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform"
            >
              Entrar em contato
            </button>
            <button
              onClick={() => navigate("/projetos")}
              className="px-10 py-5 border border-white/30 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-primary transition-all"
            >
              Ver projetos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
