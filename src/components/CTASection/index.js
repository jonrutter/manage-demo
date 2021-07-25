import React from 'react';

// styles
import s from './CTASection.module.css';

const CTASection = () => (
  <div className={s.wrapper}>
    <section className={s.content}>
      <h2 className={s.title}>Simplify how your team works today.</h2>
      <button className={s.btn}>Get Started</button>
    </section>
  </div>
);

export default CTASection;
