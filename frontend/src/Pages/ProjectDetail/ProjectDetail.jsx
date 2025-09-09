import { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useProjectDetail } from '../../Hooks/useProjectDetail'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const isVideo = (media) => media.type === 'video';

function ProjectDetail() {
  const { slug } = useParams();
  const { project, loading, error } = useProjectDetail(slug);
  
  const swiperRef = useRef(null);
  const thumbnailsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  if (loading) {
    return <div className="text-center py-40">Carregando projeto...</div>;
  }

  if (error || !project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Projeto não encontrado!</h1>
        <Link to="/projetos" className="text-primary hover:underline mt-4 inline-block">
          Voltar para todos os projetos
        </Link>
      </div>
    );
  }

  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex !== undefined ? swiper.realIndex : swiper.activeIndex;
    setActiveIndex(realIndex);

    swiper.slides.forEach((slide) => {
      const video = slide.querySelector("video");
      if (video) video.pause();
    });

    const activeSlide = swiper.slides[swiper.activeIndex];
    const activeVideo = activeSlide?.querySelector("video");
    if (activeVideo) activeVideo.play().catch(() => {});

    const thumb = thumbnailsRef.current[realIndex];
    if (thumb) {
      thumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  const handleThumbnailClick = (index) => {
    swiperRef.current?.slideToLoop(index);
  };
  
  const themeColors = {
    primary: '#71562c',
  };
  
  const resolvedImages = project.midias || [];

  return (
    <div className="w-full bg-offwhite min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <Link to="/projetos" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-4 font-bold">
          <span className="text-2xl">&larr;</span>
          Voltar para todos os projetos
        </Link>
        <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 flex flex-col gap-4 order-2 lg:order-1">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
              style={{'--swiper-navigation-color': themeColors.primary, '--swiper-pagination-color': themeColors.primary}}
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              loop={resolvedImages.length > 1}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 7000, disableOnInteraction: true }}
              className="w-full h-[40vh] sm:h-[50vh] lg:h-[65vh] rounded-lg"
            >
              {resolvedImages.map((media) => (
                <SwiperSlide key={media.id} className="bg-black/5 rounded-lg">
                  {isVideo(media) ? (
                    <video src={media.url} controls muted loop playsInline className="w-full h-full object-contain"/>
                  ) : (
                    <img src={media.url} alt={`Mídia do projeto ${project.title}`} className="w-full h-full object-contain"/>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {resolvedImages.length > 1 && (
              <div className="w-full overflow-x-auto">
                <div className="flex justify-center pb-2 gap-3">
                  {resolvedImages.map((media, index) => (
                    <button
                      key={media.id}
                      ref={(el) => (thumbnailsRef.current[index] = el)}
                      onClick={() => handleThumbnailClick(index)}
                      className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 ${activeIndex === index ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"}`}
                    >
                      {isVideo(media) ? (
                        <video src={media.url} muted className="w-full h-full object-cover"/>
                      ) : (
                        <img src={media.url} alt={`Miniatura ${index + 1}`} className="w-full h-full object-cover"/>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/3 flex flex-col pt-4 order-1 lg:order-2">
            <h1 className="font-titulo font-bold text-2xl sm:text-3xl lg:text-4xl text-primary mb-4">
              {project.title}
            </h1>
            <p className="text-gray-700 font-sans text-base sm:text-lg leading-relaxed">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;