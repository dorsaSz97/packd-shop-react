import React from 'react';

import ButtonLink from '../UI/ButtonLink';

import styles from './Hero.module.css';

const Hero = ({ headingText, text, img }) => {
  return (
    <section
      className={`${styles.hero} relative py-20 px-8 bg-cover bg-right font-radial lg:px-20`}
      style={{ backgroundImage: `url(${img}` }}
    >
      <div className="relative max-w-[40rem] z-[1]">
        <h2 className="font-pp text-[4.5rem] text-white font-bold uppercase tracking-wide leading-[1.2]">
          {headingText}
        </h2>
        <p className="mt-7 mb-6 text-white text-[1.03rem] leading-normal">
          {text}
        </p>
        <ButtonLink text="shop now" path="/products" />
      </div>
    </section>
  );
};

export default Hero;
