import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { useProjects } from '../../Hooks/useProjects'

function ProjectsCarousel() {
  const { projects, loading, error } = useProjects();

  if (loading) return <div className="text-center py-20">Carregando...</div>;
  if (error)
    return <div className="text-center py-20 text-red-500">Erro: {error}</div>;

  const imagensParaCarrossel = projects.map((project) => ({
    src: project.thumb_url,
    alt: `Imagem do projeto ${project.title}`,
  }));

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full"
        slideToClickedSlide={true}
      >
        {imagensParaCarrossel.map((imagem, index) => (
          <SwiperSlide
            key={index}
            className="!w-[250px] sm:!w-[300px] md:!w-[350px] lg!w-[400px] flex items-center justify-center rounded-xl overflow-hidden"
          >
            <img
              src={imagem.src}
              alt={imagem.alt}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectsCarousel;
