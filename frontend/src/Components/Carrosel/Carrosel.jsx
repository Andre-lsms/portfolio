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
    <div className=" max-w-7xl mx-auto py-10 px-4">
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
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
        slideToClickedSlide={true}
      >
        {imagens.map((src, index) => (
          <SwiperSlide
            key={index}
            className="max-w-fit flex items-center justify-center mx-15"
          >
            <Card img={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrosel;
