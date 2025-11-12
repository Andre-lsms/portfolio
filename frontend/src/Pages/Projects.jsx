import { Link } from "react-router-dom";
import { useProjects } from "../Hooks/useProjects"; // Verifique o caminho do seu hook

function Projects() {
  const { projects, loading, error } = useProjects();

  if (loading)
    return <div className="text-center py-40">Carregando projetos...</div>;
  if (error)
    return (
      <div className="text-center py-40 text-red-500">
        Erro ao carregar os projetos: {error}
      </div>
    );
  ("");
  return (
    <div className="bg-offwhite min-h-[calc(100vh-7rem)] py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl w-full p-6 sm:p-10 text-center shadow-lg">
          <h1 className="font-titulo font-bold text-3xl sm:text-4xl md:text-5xl text-primary mb-4">
            Meus Projetos
          </h1>
          <p className="text-primary max-w-3xl mx-auto font-sans text-lg leading-relaxed">
            Cada projeto é uma oportunidade de explorar soluções que combinam
            funcionalidade e estética. Aqui compartilho trabalhos que
            representam minha trajetória e processo criativo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project) => {
            return (
              <Link to={`/projetos/${project.slug}`} key={project.id}>
                <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="w-full h-80 overflow-hidden">
                    <img
                      src={project.first_media_url}
                      alt={`Capa do projeto ${project.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-titulo font-bold text-xl text-primary">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
