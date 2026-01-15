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
import { FaGithub } from "react-icons/fa";

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
          <div className="space-y-10 relative z-20 space-x-10">
            <h1 className="text-6xl sm:text-7xl lg:text-[9rem] font-titulo font-bold leading-[0.85] tracking-tight">
              André <br />
              <span className="text-secondary">Santos.</span>
            </h1>

            <p className="text-lg md:text-2xl text-primary/70 max-w-xl leading-relaxed">
              Designer visual e editor de vídeo com base em tecnologia.
              Estudante de Sistemas de Informação, atuo na criação de{" "}
              <span className="text-primary font-medium italic">
                soluções digitais que unem estética, lógica e propósito.
              </span>
            </p>

            <button
              onClick={() => navigate("/projetos")}
              className="px-10 py-5 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-secondary transition-all shadow-2xl hover:-translate-y-1"
            >
              Explorar Designs
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
          SOBRE — STUDIO — SOBRE — STUDIO
        </div>
      </section>
      {/* TRAJETÓRIA */}
      <section className="bg-white py-28 lg:py-48 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-24 grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl lg:text-6xl font-titulo font-bold">
              Caminho Profissional
            </h2>

            <p className="text-lg text-primary/75 leading-relaxed">
              Natural de Araçuaí – MG, minha trajetória é guiada pela
              curiosidade em entender como ideias se transformam em soluções
              reais. Desde cedo, tecnologia e criação caminharam juntas no meu
              processo de aprendizado. O primeiro contato com o design surgiu de
              forma prática, por meio de projetos pessoais e freelas, onde
              desenvolvi senso estético, clareza visual e atenção à experiência
              do usuário. Com o tempo, o design deixou de ser apenas visual e
              passou a ser também estratégico. Em paralelo, minha formação
              técnica no IFNMG — Campus Araçuaí, como Técnico em Agrimensura,
              fortaleceu habilidades como organização, raciocínio lógico e
              análise estrutural, bases que hoje aplico no desenvolvimento de
              sistemas. Atualmente, como estudante de Sistemas de Informação,
              uno design e tecnologia para criar produtos digitais funcionais,
              bem estruturados e orientados a resultados.
            </p>

            <div className="p-8 bg-offwhite border-l-4 border-secondary rounded-r-2xl shadow-sm">
              <p className="italic font-medium text-primary/80">
                "Transformo ideias em experiências digitais, unindo design,
                lógica e propósito."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Base", val: "João Monlevade – MG" },
              {
                label: "Formação",
                val: "Sistemas de Informação, Técnico em Agrimensura",
              },
              {
                label: "Atuação",
                val: "Design visual, identidade, edição de vídeo e desenvolvimento de soluções digitais.",
              },
              {
                label: "Abordagem",
                val: "Estética funcional, clareza visual e pensamento sistêmico.",
              },
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
      <section className="py-32 lg:py-56 px-6 lg:px-24">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-4xl lg:text-7xl font-titulo font-bold leading-none">
            Design é método.
            <br />
            <span className="text-secondary italic">Tecnologia é meio.</span>
            <br />
            <span className="text-secondary font-light">
              A experiência é o resultado.
              <br />
            </span>
          </h2>
          {/* <div className="w-20 h-[2px] bg-secondary mx-auto"></div>
          <p className="text-xl lg:text-3xl text-primary/60 font-light leading-relaxed max-w-3xl mx-auto">
            Forma sem função não comunica
          </p> */}
        </div>
      </section>
      c{/* TOOLKIT */}
      <section className="py-32 lg:py-56 px-6 lg:px-24 bg-white border-t border-primary/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
          <header className="space-y-4">
            <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">
              Stack Criativa & Técnica
            </span>
            <h2 className="text-5xl lg:text-7xl font-titulo font-bold">
              Arsenal Profissional.
            </h2>
          </header>
          <p className="text-primary/40 font-bold uppercase tracking-widest text-[10px] border-b border-primary/10 pb-2">
            Ferramentas de criação e edição
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
      <section className="bg-primary py-32 lg:py-48 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 text-[20vw] font-titulo font-bold text-white select-none whitespace-nowrap">
            CONTATO — CONTATO
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <h2 className="text-white text-5xl lg:text-8xl font-titulo font-bold leading-none">
            Vamos construir algo?
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button
              onClick={() => navigate("/contato")}
              className="px-12 py-6 bg-secondary text-white font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform shadow-xl"
            >
              Iniciar Conversa
            </button>
            <button
              onClick={() => navigate("/projetos")}
              className="px-12 py-6 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-primary transition-all"
            >
              Explorar Portfólio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
