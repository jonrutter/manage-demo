import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/a11y';
import 'swiper/scss/pagination';
import { testimonials } from '@/data';

export const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (activeSlide < 0) {
      setActiveSlide(testimonials.length - 1);
    } else if (activeSlide > testimonials.length - 1) {
      setActiveSlide(0);
    }
  }, [activeSlide]);

  return (
    <div className="px-6 pb-12 md:px-0">
      <div>
        <h2 className="text-center text-blue [font-size:_2rem] font-bold">
          What they've said
        </h2>
        <div className="mb-16">
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[A11y, Pagination]}
            slidesPerView={1}
            loop={true}
            style={{ maxWidth: '600px' }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <section className="bg-lightGrey pt-16 pb-8 px-6 transition-all max-w-[450px] relative mx-auto mt-20 mb-12">
                  <Image
                    src={item.image}
                    alt={item.author}
                    className="w-20 h-auto absolute top-0 right-[calc(50%-40px)] -translate-y-1/2"
                  />
                  <h3 className="text-center text-blue mb-4 font-medium text-lg">
                    {item.author}
                  </h3>
                  <p className="mb-10 text-grey text-center">"{item.text}"</p>
                </section>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          type="button"
          className="bg-red text-white font-bold py-3 px-8 shadow-ctaShadow block mx-auto transition-opacity hover:opacity-50 rounded-full"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};
