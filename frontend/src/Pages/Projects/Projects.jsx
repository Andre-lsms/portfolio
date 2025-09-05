import { Link } from 'react-router-dom';
import projectsData from '../../data/projects.json';


function Projects() {
  return (
    <div className=" min-h-[calc(100vh-7rem)] py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl w-full p-6 sm:p-10 text-center shadow-lg">
          <h1 className="font-titulo font-bold text-3xl sm:text-4xl md:text-5xl text-primary mb-4">
            Meus Projetos
          </h1>
          <p className="text-primary max-w-3xl mx-auto font-sans text-lg leading-relaxed">
            Cada projeto é uma oportunidade de explorar soluções que combinam funcionalidade e estética. Aqui compartilho trabalhos que representam minha trajetória e processo criativo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projectsData.map((projeto) => {
            const primeiraImagemPath = projeto.entregas[0];
            const imageUrl = `${primeiraImagemPath}`;
            return (
              <Link to={`/projetos/${projeto.slug}`} key={projeto.id}>
                <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="w-full h-80 overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={`Capa do projeto ${projeto.titulo}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-titulo font-bold text-xl text-primary">{projeto.titulo}</h3>
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