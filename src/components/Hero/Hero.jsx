import React from 'react';
import ButtonLink from '../UI/ButtonLink';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section
      className={`${styles.hero} relative py-20 px-8 bg-hero-img bg-cover bg-right font-radial text-xl`}
    >
      <div className=" md:w-1/2 text-white relative z-[1]">
        <h2 className="font-pp text-[4.5rem] uppercase leading-none tracking-wide">
          eat well, feel good, repeat
        </h2>
        <p className="mt-7 mb-6 text-[1.03rem] leading-normal">
          We are on a mission to make it super simple to get the nutrition you
          deserve so you can feel great and do what you do best
        </p>
        <ButtonLink text="shop now" path="/products" />
      </div>
    </section>
  );
};

export default Hero;
