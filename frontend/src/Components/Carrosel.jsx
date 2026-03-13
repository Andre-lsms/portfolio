import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom"; // Importante para navegação
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { useProjects } from "../Hooks/useProjects";

function ProjectsCarousel() {
  const { projects, loading, error } = useProjects();

  if (loading)
    return (
      <div className="text-center py-20 font-bold uppercase tracking-widest text-[10px] text-primary/40">
        Carregando Destaques...
      </div>
    );

  if (error)
    return (
      <div className="text-center py-20 text-red-500 font-bold">
        Erro: {error}
      </div>
    );

  return (
    <div className="w-full py-16 overflow-hidden relative">
      
      {/* HEADER DO CARROSSEL (Opcional, mas dá contexto) */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-secondary font-bold uppercase tracking-[0.4em] text-[10px]">
          Sneak Peek
        </span>
        <h2 className="text-4xl lg:text-5xl font-titulo font-bold text-primary mt-3">
          Projetos em Destaque.
        </h2>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        speed={800} // Transição mais suave (800ms)
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0, // Zero rotação para um aspecto mais moderno e plano
          stretch: -20, // Puxa os slides inativos um pouco para trás/dentro
          depth: 200, // Profundidade 3D
          modifier: 2,
          slideShadows: false, // Desligado para usarmos o sombreamento customizado do Tailwind
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="w-full !pb-16" // Espaço na base para as bolinhas de paginação
        slideToClickedSlide={true}
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            // Larguras responsivas e proporção 4/5 (estilo retrato/cartaz)
            className="!w-[280px] sm:!w-[320px] md:!w-[400px] lg:!w-[450px] group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500"
          >
            {/* OVERLAY DE GRADIENTE (Escurece a base para o texto ficar legível) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

            {/* IMAGEM DO PROJETO */}
            <img
              src={project.first_media_url || project.cover?.url || project.thumb_url} 
              alt={`Capa do projeto ${project.title}`}
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
            />

            {/* CONTEÚDO DE TEXTO (Por cima da imagem) */}
            <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-2 drop-shadow-md">
                Case Study
              </span>
              <h3 className="text-white font-titulo font-bold text-2xl md:text-3xl mb-4 drop-shadow-lg leading-tight">
                {project.title}
              </h3>
              
              {/* LINK DIRETO PARA O PROJETO */}
              <Link
                to={`/projetos/${project.slug}`}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white font-bold uppercase tracking-[0.2em] text-[10px] transition-colors"
              >
                Ver Detalhes <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ESTILOS INLINE PARA A PAGINAÇÃO DO SWIPER */}
      <style>{`
        .swiper-pagination-bullet {
          background-color: #71562c; /* Cor do seu tema (ajuste se necessário) */
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          background-color: #71562c;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default ProjectsCarousel;