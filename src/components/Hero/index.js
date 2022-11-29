import React from 'react';

// styles
import s from './Hero.module.css';

// img
import HeroImg from '../../images/illustration-intro.svg';

const Hero = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.left}>
          <h1 className={s.title}>
            Bring everyone together to build better products.
          </h1>
          <p className={s.text}>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className={s.btn}>Get Started</button>
        </div>
        <div className={s.right}>
          <img src={HeroImg} alt="" width="580" height="525" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
