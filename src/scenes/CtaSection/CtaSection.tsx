import React from 'react';

export const CtaSection = () => (
  <div className="bg-ctaMobile bg-no-repeat [background-position:_conter_left] [background-size:20%] text-white py-20 px-6 md:bg-ctaDesktop md:bg-cover bg-red">
    <section className="max-w-site mx-auto flex flex-col items-center md:flex-row md:justify-between">
      <h2 className="text-center [font-size:2.5rem] mb-4 max-w-[500px] md:text-left font-bold">
        Simplify how your team works today.
      </h2>
      <button className="bg-white text-red py-3 px-8 rounded-full font-bold shadow-ctaShadowDark transition-color hover:text-[#f69175]">
        Get Started
      </button>
    </section>
  </div>
);
