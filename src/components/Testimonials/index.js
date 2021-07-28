import React, { useState, useEffect } from 'react';

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
        <div className={s.slider}>
          {testimonials.map((testimonial, index) => {
            const { id, author, text, image } = testimonial;
            let position = index - activeSlide;

            let renderClass =
              position < 0 ? 'prev' : position > 0 ? 'next' : 'active';

            return (
              <section
                key={id}
                className={`${s[renderClass]} ${s.testimonial}`}
                style={{ transform: `translateX(${100 * position}%)` }}
              >
                <img src={image} alt={author} className={s.img} />
                <h3>{author}</h3>
                <p>"{text}"</p>
              </section>
            );
          })}
        </div>
        <div className={s.controls}>
          <button
            className={
              activeSlide === 0
                ? `${s.controlBtn} ${s.activeBtn}`
                : s.controlBtn
            }
            aria-label="Testimonial button"
            onClick={() => setActiveSlide(0)}
          ></button>
          <button
            className={
              activeSlide === 1
                ? `${s.controlBtn} ${s.activeBtn}`
                : s.controlBtn
            }
            aria-label="Testimonial button"
            onClick={() => setActiveSlide(1)}
          ></button>
          <button
            className={
              activeSlide === 2
                ? `${s.controlBtn} ${s.activeBtn}`
                : s.controlBtn
            }
            aria-label="Testimonial button"
            onClick={() => setActiveSlide(2)}
          ></button>
          <button
            className={
              activeSlide === 3
                ? `${s.controlBtn} ${s.activeBtn}`
                : s.controlBtn
            }
            aria-label="Testimonial button"
            onClick={() => setActiveSlide(3)}
          ></button>
        </div>
        <button type="button" className={s.ctaBtn}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
