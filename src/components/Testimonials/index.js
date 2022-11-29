import React, { useState, useEffect } from 'react';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/a11y';
import 'swiper/scss/pagination';

// styles
import s from './Testimonials.module.css';

// data
import { testimonials } from '../../data';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (activeSlide < 0) {
      setActiveSlide(testimonials.length - 1);
    } else if (activeSlide > testimonials.length - 1) {
      setActiveSlide(0);
    }
  }, [activeSlide]);

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <h2 className={s.title}>What they've said</h2>
        <div style={{ marginBottom: '4rem' }}>
          <Swiper
            pagination={true}
            modules={[A11y, Pagination]}
            slidesPerView={1}
            loop={true}
            style={{ maxWidth: '600px' }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <section className={s.testimonial}>
                  <img src={item.image} alt={item.author} className={s.img} />
                  <h3>{item.author}</h3>
                  <p>"{item.text}"</p>
                </section>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button type="button" className={s.ctaBtn}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
