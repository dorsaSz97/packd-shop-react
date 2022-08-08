import React from 'react';

import LOGOS from '../../data/brandLogos';

const Brands = () => {
  return (
    <section className="flex flex-wrap gap-6 p-16 border-black border-b-2 border-t-2 bg-primary">
      {LOGOS.map(logo => {
        return (
          <img
            key={logo.path}
            src={logo.path}
            alt="brand logo"
            className="inline-block w-[20%] object-contain filter grayscale-[1] sepia-[1] opacity-60 bg-transparent"
          />
        );
      })}
    </section>
  );
};

export default Brands;
