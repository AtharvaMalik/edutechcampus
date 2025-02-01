import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Define the Image type
type Image = {
  src: string;
  alt: string;
};

// Define the SlideshowProps type
type SlideshowProps = {
  images: Image[];
};

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 10000 }}
      loop
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image.src}
            alt={image.alt}
            style={{ objectFit: 'fill', height: '100%' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slideshow;