'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Header = ({ banners }) => {
  return (
    <div className="w-full bg-white flex justify-center py-4">
      <div className="w-full max-w-7xl">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-[320px] md:h-[380px] rounded-2xl"
        >
          {banners?.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[320px] md:h-[380px] rounded-2xl overflow-hidden">
                <Image
                  src={banner.image.url}
                  alt={banner.title}
                  fill
                  className="object-cover rounded-2xl"
                  priority={index === 0}
                />
                {/* Optional overlay for text */}
                {banner.title && (
                  <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/60 to-transparent">
                    <div>
                      <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{banner.title}</h2>
                      <p className="text-lg md:text-xl text-white">{banner.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Header; 