import { Link } from "react-router-dom";
import { useProjects } from "../Hooks/useProjects";

/* =========================
   Helpers de Mídia
========================= */
const isVideo = (media) => {
  if (!media || !media.url) return false;
  return (
    media.type === "video" ||
    media.url.includes("youtube") ||
    media.url.includes("youtu.be") ||
    media.url.endsWith(".mp4") ||
    media.url.endsWith(".webm")
  );
};

const getYoutubeEmbedUrl = (url) => {
  if (!url) return null;
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  // Adicionado controls=0, mute=1 e autoplay=1 para rodar silencioso no fundo
  return match
    ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=1&loop=1&playlist=${match[1]}&controls=0`
    : null;
};

function Projects() {
  const { projects, loading, error } = useProjects();

  if (loading)
    return (
      <div className="text-center py-40 font-sans tracking-widest text-primary/50 uppercase text-[10px]">
        Sincronizando Galeria...
      </div>
    );

  if (error)
    return (
      <div className="text-center py-40 text-red-500 font-bold">
        Erro: {error}
      </div>
    );

  return (
    <div className="bg-[#F9F8F6] min-h-screen py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER EDITORIAL --- */}
        <header className="mb-32 space-y-6 text-center lg:text-left">
          <h1 className="font-titulo font-bold text-5xl sm:text-7xl md:text-8xl text-primary leading-none">
            Trabalhos <br />{" "}
            <span className="text-secondary font-light">Selecionados.</span>
          </h1>
          <p className="text-primary/60 max-w-xl font-sans text-lg leading-relaxed pt-4">
            Explore uma seleção de projetos realizados ao longo da minha trajetória. 
            Sinta-se à vontade para navegar.
          </p>
        </header>

        {/* --- MASONRY LAYOUT REFINADO --- */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 lg:gap-12">
          {projects.map((project) => {
            const isCoverVideo = isVideo(project.cover);
            const youtubeEmbed = isCoverVideo ? getYoutubeEmbedUrl(project.cover?.url) : null;

            return (
              <Link
                to={`/projetos/${project.slug}`}
                key={project.id}
                className="group inline-block w-full mb-8 lg:mb-12 break-inside-avoid"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-700 group-hover:shadow-[0_30px_60px_rgba(113,86,44,0.15)] group-hover:-translate-y-4">
                  <div className="absolute inset-0 z-10 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {project.cover ? (
                    isCoverVideo ? (
                      youtubeEmbed ? (
                        /* RENDERIZA YOUTUBE COMO CAPA */
                        <div className="w-full aspect-video pointer-events-none overflow-hidden">
                          <iframe
                            src={youtubeEmbed}
                            className="w-full h-[150%] -mt-[25%] scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                            frameBorder="0"
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        /* RENDERIZA VÍDEO DIRETO (.MP4) COMO CAPA */
                        <video
                          src={project.cover.url}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out block pointer-events-none"
                        />
                      )
                    ) : (
                      /* RENDERIZA IMAGEM COMO CAPA */
                      <img
                        src={project.cover.url}
                        alt={project.title}
                        className="w-full h-auto object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out block"
                      />
                    )
                  ) : (
                    /* RENDERIZA FALLBACK SE NÃO TIVER CAPA */
                    <div className="w-full aspect-square flex items-center justify-center bg-primary/5 text-primary/20 font-bold uppercase text-xs tracking-widest">
                      Nenhuma Capa
                    </div>
                  )}
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-4">
                    <h3 className="font-titulo font-bold text-2xl text-primary group-hover:text-secondary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="h-[1px] flex-1 bg-primary/10 group-hover:bg-secondary/30 transition-colors"></div>
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