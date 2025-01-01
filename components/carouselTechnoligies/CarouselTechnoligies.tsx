"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

interface CarouselProps {
  images: string[];
  names: string[];
}

const CarouselFooter: React.FC<CarouselProps> = ({ images, names }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: { slidesPerView: 1 },
        370: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 6 },
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center justify-center w-28 h-36">
            {" "}
            {/* Aumentamos la altura del contenedor */}
            <div className="relative w-28 h-28 rounded-3xl flex items-center justify-center">
              <div className="absolute inset-0 bg-black opacity-25 rounded-3xl"></div>
              <div className="z-10">
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  priority
                  width={70}
                  height={70}
                  style={{ width: "70px", height: "70px" }}
                />
              </div>
            </div>
            <p className="text-sm mt-2 text-center">{names[index]}</p>{" "}
            {/* El párrafo está ahora centrado debajo de la imagen */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselFooter;
