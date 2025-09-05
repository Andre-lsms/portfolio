import { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../../data/projects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const isVideo = (src) => src.endsWith(".mp4") || src.endsWith(".webm");

function ProjectDetail() {
  const { slug } = useParams();
  const projeto = projectsData.find((p) => p.slug === slug);

  if (!projeto) {
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

  const validEntregas = (projeto.entregas || []).filter(
    (src) => src && typeof src === "string"
  );

  const swiperRef = useRef(null);
  const thumbnailsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);

    // Pausar vídeos fora do slide ativo
    swiper.slides.forEach((slide, i) => {
      const video = slide.querySelector("video");
      if (video) {
        if (i === swiper.activeIndex) {
          video.play();
        } else {
          video.pause();
        }
      }
    });

    // Scroll da miniatura
    const thumb = thumbnailsRef.current[swiper.activeIndex];
    if (thumb) {
      thumb.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <div className="py-10 px-4 sm:px-8 min-h-screen flex items-start">
      <div className="bg-offwhite rounded-2xl shadow-2xl p-4 sm:p-8 flex flex-col md:flex-row gap-8 w-full">
        {/* Coluna de texto no mobile, lateral no desktop */}
        <div className="w-full md:w-1/3 flex flex-col p-2 sm:p-4 order-1 md:order-none">
          <h1 className="font-titulo font-bold text-2xl sm:text-3xl md:text-4xl text-primary mb-4">
            {projeto.titulo}
          </h1>
          <p className="text-gray-700 font-sans text-base sm:text-lg leading-relaxed max-h-[30vh] md:max-h-none overflow-y-auto">
            {projeto.descricao}
          </p>
        </div>

        {/* Carrossel + miniaturas */}
        <div className="w-full md:w-2/3 flex flex-col gap-4 order-2 md:order-none">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            loop={validEntregas.length > 1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="rounded-lg w-full h-[40vh] lg:h-[60vh] "
          >
            {validEntregas.map((src, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                {isVideo(src) ? (
                  <video
                    src={src}
                    controls
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain rounded-lg"
                  />
                ) : (
                  <img
                    src={src}
                    alt={`Imagem ${index + 1}`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Miniaturas */}
          <div className="flex overflow-x-auto pb-2 gap-2 self-center">
            {projeto.entregas.map((src, index) => (
              <button
                key={index}
                tabIndex={-1}
                ref={(el) => (thumbnailsRef.current[index] = el)}
                onClick={() => swiperRef.current?.slideTo(index)}
                className={`flex-shrink-0 border-2 hover:border-secondary rounded-lg overflow-hidden transition-all p-0 ${
                  index === activeIndex
                    ? "border-primary"
                    : "border-transparent"
                }`}
              >
                {isVideo(src) ? (
                  <video
                    src={src}
                    muted
                    loop
                    playsInline
                    className=" w-20 h-20 object-cover rounded-lg"
                  />
                ) : (
                  <img
                    src={src}
                    alt={`Miniatura ${index + 1}`}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
