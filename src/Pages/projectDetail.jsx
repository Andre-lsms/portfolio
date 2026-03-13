import { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useProjectBySlug } from "../Hooks/useProjects";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* =========================
   Helpers
========================= */
const isVideo = (media) =>
  media.type === "video" ||
  media.url.includes("youtube") ||
  media.url.includes("youtu.be");

const getYoutubeEmbedUrl = (url) => {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match
    ? `https://www.youtube.com/embed/${match[1]}?autoplay=0&mute=0`
    : null;
};

function ProjectDetail() {
  const { slug } = useParams();
  const { project, loading, error } = useProjectBySlug(slug);
  const swiperRef = useRef(null);

  if (loading)
    return (
      <div className="bg-[#F9F8F6] min-h-screen flex items-center justify-center font-bold uppercase tracking-widest text-primary/30 text-[10px]">
        Carregando projeto...
      </div>
    );

  if (error || !project)
    return (
      <div className="bg-[#F9F8F6] min-h-screen flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl font-titulo font-bold text-primary">
          Projeto não encontrado.
        </h1>
        <Link
          to="/projetos"
          className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary hover:text-primary transition-colors"
        >
          &larr; Voltar para a Galeria
        </Link>
      </div>
    );

  const midias = project.midias || [];

  return (
    <div className="bg-[#F9F8F6] min-h-screen py-16 px-6 lg:px-24 selection:bg-secondary selection:text-white">
      <div className="max-w-7xl mx-auto">
        {/* --- NAVEGAÇÃO EDITORIAL --- */}
        <nav className="mb-16 lg:mb-24 flex items-center justify-between">
          <Link
            to="/projetos"
            className="group flex items-center gap-4 text-primary/40 hover:text-primary transition-all font-bold uppercase tracking-[0.3em] text-xl"
          >
            <span className="text-xl group-hover:-translate-x-2 transition-transform">
              &larr;
            </span>
            Voltar
          </Link>
          <div className="h-[1px] flex-1 bg-primary/10 mx-8 lg:mx-16 hidden sm:block"></div>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* --- ÁREA DE MÍDIA (O PALCO) --- */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div className="relative bg-white p-2 sm:p-3 rounded-[2rem] shadow-2xl border border-primary/5 overflow-hidden group">
              {midias.length > 0 ? (
                <Swiper
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  modules={[Navigation, Pagination, Autoplay]}
                  slidesPerView={1}
                  loop={midias.length > 1}
                  navigation
                  pagination={{ clickable: true, dynamicBullets: true }}
                  autoplay={{ delay: 8000, disableOnInteraction: true }}
                  style={{
                    "--swiper-navigation-color": "#71562c",
                    "--swiper-pagination-color": "#71562c",
                  }}
                  className="w-full h-[50vh] sm:h-[60vh] lg:h-[75vh] rounded-3xl overflow-hidden bg-[#111]"
                >
                  {midias.map((media) => {
                    const youtubeEmbed = getYoutubeEmbedUrl(media.url);
                    return (
                      <SwiperSlide key={media.id}>
                        <div className="w-full h-full flex items-center justify-center">
                          {isVideo(media) ? (
                            youtubeEmbed ? (
                              <iframe
                                src={youtubeEmbed}
                                className="w-full h-full"
                                frameBorder="0"
                                allowFullScreen
                              />
                            ) : (
                              <video
                                src={media.url}
                                controls
                                className="w-full h-full object-contain"
                              />
                            )
                          ) : (
                            <img
                              src={media.url}
                              alt={project.title}
                              className="w-full h-full object-contain"
                            />
                          )}
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              ) : (
                <div className="w-full h-[50vh] flex items-center justify-center uppercase tracking-widest text-[10px] text-primary/20 bg-[#f0f0f0] rounded-3xl">
                  Mídia Indisponível
                </div>
              )}
            </div>
          </div>

          {/* --- ASIDE INFO (TEXTO FIXO E METADADOS) --- */}
          <aside className="w-full lg:w-1/3 order-1 lg:order-2 lg:sticky lg:top-12 space-y-12">
            <header className="space-y-6">
              <div className="space-y-4">
       
                <h1 className="font-titulo font-bold text-5xl lg:text-7xl text-primary leading-[0.9] tracking-tight">
                  {project.title}
                </h1>
              </div>
              <div className="w-12 h-[2px] bg-secondary"></div>
            </header>

            <div className="prose prose-lg text-primary/75 font-sans leading-relaxed text-justify">
              <p>{project.description}</p>
            </div>

            {/* Metadados Técnicos (Dá o tom de "Agência/Studio") */}
            <div className="pt-10 border-t border-primary/10 flex flex-col gap-5">
              
              
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
