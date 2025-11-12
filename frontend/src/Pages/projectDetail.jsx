import { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useProjectDetail } from "../Hooks/useProjectDetail";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const isVideo = (media) => media.type === "video";

// NOVO: Função mais robusta para obter a URL de embed do YouTube
const getYoutubeEmbedUrl = (url) => {
  let videoId = null;
  // Expressão regular para extrair o ID de vários formatos de URL do YouTube
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);

  if (match && match[1]) {
    videoId = match[1];
  } else {
    // Retorna null ou a URL original se não for um link do YouTube válido
    return null;
  }

  // Adiciona parâmetros para autoplay (silenciado) para melhor compatibilidade com navegadores
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
};

function ProjectDetail() {
  const { slug } = useParams();
  const id = slug.split("-")[0];
  const { project, loading, error } = useProjectDetail(id);

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (loading) {
    return <div className="text-center py-40">Carregando projeto...</div>;
  }

  if (error || !project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Projeto não encontrado!</h1>
        <Link
          to="/projetos"
          className="text-primary hover:underline mt-4 inline-block"
        >
          Voltar para todos os projetos
        </Link>
      </div>
    );
  }

  const handleSlideChange = (swiper) => {
    // Pausa todos os vídeos (HTML5 e iframes) ao trocar de slide
    swiper.slides.forEach((slide) => {
      const video = slide.querySelector("video");
      if (video) video.pause();

      const iframe = slide.querySelector("iframe");
      if (iframe) {
        // Para parar o vídeo do YouTube, recarregamos o src
        const originalSrc = iframe.getAttribute("src");
        iframe.setAttribute("src", "");
        iframe.setAttribute("src", originalSrc);
      }
    });

    const activeSlide = swiper.slides[swiper.activeIndex];

    // Tenta dar play no vídeo HTML5 do slide ativo
    const activeVideo = activeSlide?.querySelector("video");
    if (activeVideo) activeVideo.play().catch(() => {});
    
    // O autoplay do YouTube é controlado pelo parâmetro na URL (?autoplay=1)
  };

  const themeColors = {
    primary: "#71562c",
  };

  const resolvedImages = project.midias || [];

  return (
    <div className="w-full bg-offwhite min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <Link
          to="/projetos"
          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-4 font-bold"
        >
          <span className="text-2xl">&larr;</span>
          Voltar para todos os projetos
        </Link>
        <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 flex flex-col gap-4 order-2 lg:order-1">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
              style={{
                "--swiper-navigation-color": themeColors.primary,
                "--swiper-pagination-color": themeColors.primary,
              }}
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              loop={resolvedImages.length > 1}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 7000, disableOnInteraction: true }}
              className="w-full h-[40vh] sm:h-[50vh] lg:h-[65vh] rounded-lg"
            >
              {/* MODIFICADO */}
              {resolvedImages.map((media) => {
                const youtubeEmbedUrl = getYoutubeEmbedUrl(media.url);
                return (
                  <SwiperSlide key={media.id} className="bg-black/5 rounded-lg">
                    {isVideo(media) ? (
                      youtubeEmbedUrl ? (
                        <iframe
                          src={youtubeEmbedUrl}
                          className="w-full h-full rounded-lg"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                        alt={`Mídia do projeto ${project.title}`}
                        // BÔNUS: Adicionado classes para a imagem preencher o slide corretamente
                        className="w-full h-full object-cover rounded-lg"
                      />
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col pt-4 order-1 lg:order-2">
            <h1 className="font-titulo font-bold text-2xl sm:text-3xl lg:text-4xl text-primary mb-4">
              {project.title}
            </h1>
            <p className="text-gray-700 font-sans text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;