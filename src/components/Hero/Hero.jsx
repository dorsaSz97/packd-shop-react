import React from 'react';
import ButtonLink from '../UI/ButtonLink';

const Hero = () => {
  return (
    <div className="bg-hero-img py-40 px-20 text-lg">
      <div className="w-1/2 text-white">
        <h1 className="text-4xl">EAT WELL, FEEL GOOD, REPEAT</h1>
        <p>
          We're on a mission to make it super simple to get the nutrition you
          deserve so you can feel great and do what you do best.
        </p>
        <ButtonLink text="shop now" path="/products" />
      </div>
    </div>
  );
};

export default Hero;
