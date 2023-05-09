import React from 'react';
import Image from 'next/image';
import HeroImg from '@/images/illustration-intro.svg';

/** Renders the home page's hero section */
export const Hero = () => (
  <div className="pt-5 pb-12 px-6 md:pt-6">
    <div className="max-w-site mx-auto grid grid-cols-1 justify-items-center text-center md:grid-cols-2 md:items-center md:justify-items-start md:text-left gap-8">
      <div className="max-w-[400px] md:justify-self-start lg:max-w-full">
        <h1 className="[font-size:_2.5rem] font-bold leading-tight mb-4 text-blue lg:[font-size:3rem] xl:[font-size:_4rem] lg:mb-8">
          Bring everyone together to build better products.
        </h1>
        <p className="text-grey mb-6 max-w-[400px] lg:mb-8">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className="bg-red text-white font-bold py-3 px-8 rounded-full shadow-ctaShadow transition-opacity hover:opacity-50">
          Get Started
        </button>
      </div>
      <div className="max-w-400px md:justify-self-end lg:max-w-[600px]">
        <Image
          src={HeroImg}
          alt=""
          className="select-none pointer-events-none"
        />
      </div>
    </div>
  </div>
);
