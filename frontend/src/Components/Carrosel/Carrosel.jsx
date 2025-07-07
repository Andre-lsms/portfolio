import Card from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

function Carrosel() {
  const imagens = Object.values(
    import.meta.glob("/src/assets/carrosel/*.{jpg,jpeg,png}", { eager: true })
  ).map((mod) => mod.default);

  // duplica se tiver poucas imagens para o loop
  const imagensFinal = imagens.length < 5 ? [...imagens, ...imagens] : imagens;

  return (
    <div className="w-full max-w-full mx-auto py-10 px-4">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
        slideToClickedSlide ={true}
      >
        {imagensFinal.map((src, index) => (
          <SwiperSlide
            key={index}
            className="max-w-fit max-h-fit rounded-xl overflow-hidden shadow-xl flex flex-col items-center justify-center"
          >
            <Card img={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrosel;
