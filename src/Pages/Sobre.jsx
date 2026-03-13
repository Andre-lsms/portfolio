import ps from "../assets/icons/ps.png";
import ai from "../assets/icons/ai.png";
import pr from "../assets/icons/pr.png";
import ae from "../assets/icons/ae.png";
import canva from "../assets/icons/canva.png";
import capcut from "../assets/icons/capcut.png";
import davinci from "../assets/icons/davinci.png";
import affinity from "../assets/icons/Affinity.png";
import myphoto from "../assets/foto.png";

function Sobre() {
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
    <section className="bg-offwhite w-full">
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-32">
        
        {/* --- APRESENTAÇÃO / HERO --- */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="relative group">
            {/* Elemento Decorativo atrás da foto */}
            <div className="absolute -inset-4 border-2 border-primary/20 rounded-full scale-95 group-hover:scale-100 transition-transform duration-500"></div>
            <img
              src={myphoto}
              alt="André Luis"
              className="relative w-48 sm:w-56 md:w-64 rounded-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border-4 border-white"
            />
          </div>

          <div className="flex-1 space-y-6 text-center lg:text-left">
            <span className="uppercase tracking-[0.3em] text-xs font-bold text-primary/60">Designer & Editor</span>
            <h1 className="text-primary font-titulo font-bold text-4xl sm:text-5xl">
              Olá, eu sou o <span className="text-secondary">André Luis</span>
            </h1>
            <p className="text-primary/80 font-sans text-lg md:text-xl leading-relaxed max-w-2xl italic">
              "Acredito que design vai além da estética: é comunicação, intenção e solução."
            </p>
          </div>
        </div>

        {/* --- TRAJETÓRIA --- */}
        <div className="relative">
          {/* Linha decorativa vertical lateral */}
          <div className="hidden lg:block absolute -left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
          
          <div className="flex flex-col gap-8 max-w-4xl">
            <h2 className="text-primary text-3xl sm:text-4xl lg:text-5xl font-titulo font-bold flex items-center gap-4">
              Trajetória
              <div className="h-[2px] flex-1 bg-primary/10"></div>
            </h2>

            <div className="space-y-6 text-primary/90 font-sans text-base sm:text-lg leading-relaxed">
              <p>
                Natural de Araçuaí – MG, meu primeiro contato com o design nasceu da pura necessidade de criar. 
                Desde pequeno, transformava impulsos criativos em algo visual, mas foi ao descobrir as ferramentas 
                profissionais que entendi o poder da comunicação visual.
              </p>
              <p className="bg-white/40 p-6 rounded-r-xl border-l-4 border-primary shadow-sm">
                O que começou como curiosidade evoluiu para uma jornada dedicada a ajudar pessoas e marcas 
                a transformarem ideias em soluções visuais reais e impactantes.
              </p>
            </div>
          </div>
        </div>

        {/* --- FERRAMENTAS --- */}
        <div className="flex flex-col gap-16">
          <div className="text-center space-y-2">
            <h3 className="text-primary text-3xl font-titulo font-bold">Toolkit Profissional</h3>
            <p className="text-primary/60 text-sm uppercase tracking-widest">Tecnologias e Softwares</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group flex flex-col items-center gap-3"
              >
                <div className="bg-white w-full aspect-square flex items-center justify-center rounded-2xl shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 border border-black/5">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-12 sm:w-14 grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="text-primary/70 font-sans text-[10px] sm:text-xs font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Sobre;