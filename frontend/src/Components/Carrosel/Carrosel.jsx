import Card from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

function Carrosel() {
  const imagens = Object.values(
    import.meta.glob("/src/assets/carrosel/*.{jpg,jpeg,png}", { eager: true })
  ).map((img) => img.default);

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
          reverseDirection: false,
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
        {imagens.map((src, index) => (
          <SwiperSlide
            key={index}
            className="!w-[250px] sm:!w-[300px] md:!w-[350px] lg:!w-[400px] flex items-center justify-center"
          >
            <Card img={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrosel;
