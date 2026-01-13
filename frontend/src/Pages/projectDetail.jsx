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
// ... (mantenha os imports e helpers de vídeo do seu arquivo original)

function ProjectDetail() {
  const { slug } = useParams();
  const { project, loading, error } = useProjectBySlug(slug);
  const swiperRef = useRef(null);

  if (loading)
    return (
      <div className="text-center py-40 font-bold uppercase tracking-widest text-primary/30 text-[10px]">
        Carregando Detalhes...
      </div>
    );
  if (error || !project)
    return (
      <div className="text-center py-40">
        <h1 className="text-2xl font-titulo text-primary">Não encontrado.</h1>
      </div>
    );

  const midias = project.midias || [];

  return (
    <div className="bg-[#F9F8F6] min-h-screen py-12 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* ÁREA DE MÍDIA - O PALCO */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div className="relative bg-white p-3 rounded-3xl shadow-2xl border border-primary/5 overflow-hidden">
              {midias.length > 0 ? (
                <Swiper
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  modules={[Navigation, Pagination, Autoplay]}
                  slidesPerView={1}
                  loop={midias.length > 1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 9000 }}
                  style={{
                    "--swiper-navigation-color": "#71562c",
                    "--swiper-pagination-color": "#71562c",
                  }}
                  className="w-full h-[50vh] lg:h-[75vh] rounded-2xl overflow-hidden bg-black"
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
                <div className="w-full h-[50vh] flex items-center justify-center uppercase tracking-widest text-[10px] text-primary/20">
                  Sem mídia
                </div>
              )}
            </div>
          </div>

          {/* ASIDE INFO - EDITORIAL */}
          <aside className="w-full lg:w-1/3 order-1 lg:order-2 lg:sticky lg:top-12 space-y-12">
            <header className="space-y-6">
              <div className="space-y-2">
                <h1 className="font-titulo font-bold text-5xl lg:text-6xl text-primary leading-none">
                  {project.title}
                </h1>
              </div>
              <div className="w-12 h-[2px] bg-secondary"></div>
            </header>

            <p className="text-primary/70 font-sans text-lg leading-relaxed text-justify">
              {project.description}
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
