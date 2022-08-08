import React from 'react';

import ButtonLink from '../UI/ButtonLink';

import heroImg from '../../assets/banners/hero.webp';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section
      className={`${styles.hero} relative py-20 px-8 bg-cover bg-right font-radial`}
      style={{ backgroundImage: `url(${heroImg}` }}
    >
      <div className="relative z-[1]">
        <h2 className="font-pp text-[4.5rem] text-white font-bold uppercase tracking-wide">
          eat well, feel good, repeat
        </h2>
        <p className="mt-7 mb-6 text-white text-[1.03rem] leading-normal">
          We are on a mission to make it super simple to get the nutrition you
          deserve so you can feel great and do what you do best
        </p>
        <ButtonLink text="shop now" path="/products" />
      </div>
    </section>
  );
};

export default Hero;
