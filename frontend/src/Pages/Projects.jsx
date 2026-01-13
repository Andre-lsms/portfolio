import { Link } from "react-router-dom";
import { useProjects } from "../Hooks/useProjects";

function Projects() {
  const { projects, loading, error } = useProjects();

  if (loading) return (
    <div className="text-center py-40 font-sans tracking-widest text-primary/50 uppercase text-[10px]">
      Sincronizando Galeria...
    </div>
  );

  if (error) return <div className="text-center py-40 text-red-500 font-bold">Erro: {error}</div>;

  return (
    <div className="bg-[#F9F8F6] min-h-screen py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER EDITORIAL --- */}
        <header className="mb-32 space-y-6 text-center lg:text-left">
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <span className="w-12 h-[1px] bg-secondary"></span>
            <span className="uppercase tracking-[0.5em] text-[10px] font-bold text-primary/40">Portfolio — Index</span>
          </div>
          <h1 className="font-titulo font-bold text-5xl sm:text-7xl md:text-8xl text-primary leading-none">
            Trabalhos <br /> <span className="text-secondary font-light">Selecionados.</span>
          </h1>
          <p className="text-primary/60 max-w-xl font-sans text-lg leading-relaxed pt-4">
            Uma imersão em soluções visuais onde a estética encontra a funcionalidade técnica.
          </p>
        </header>

        {/* --- GRID REFINADO --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
          {projects.map((project) => (
            <Link to={`/projetos/${project.slug}`} key={project.id} className="group flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-700 group-hover:shadow-[0_30px_60px_rgba(113,86,44,0.15)] group-hover:-translate-y-4">
                <div className="absolute inset-0 z-10 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {project.cover ? (
                  <img src={project.cover.url} alt={project.title} className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary/20 font-bold uppercase text-xs tracking-widest">Nenhuma Capa</div>
                )}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-white/90 backdrop-blur-md text-primary px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] rounded-full shadow-sm">Visual Design</span>
                </div>
              </div>

              <div className="mt-8 space-y-2">
                <div className="flex items-center gap-4">
                  <h3 className="font-titulo font-bold text-2xl text-primary group-hover:text-secondary transition-colors duration-300">{project.title}</h3>
                  <div className="h-[1px] flex-1 bg-primary/10 group-hover:bg-secondary/30 transition-colors"></div>
                </div>
                <p className="text-primary/40 text-[10px] uppercase tracking-[0.3em] font-bold">Ver Case Study — 2026</p>
              </div>
            </Link>
          ))}
        </div>

        {/* --- FOOTER DISCRETO --- */}
        <footer className="mt-48 pt-12 border-t border-primary/5 text-center">
          <p className="text-primary/20 font-sans text-[10px] tracking-[0.5em] uppercase">© 2026 André Luis — Criando identidades com propósito</p>
        </footer>
      </div>
    </div>
  );
}

export default Projects;