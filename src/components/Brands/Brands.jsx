import React from 'react';

import LOGOS from '../../data/brandLogos';

const Brands = () => {
  return (
    <section className="flex items-center justify-center p-16 border-dark border-b-2 border-t-2 bg-primary">
      <ul className="flex items-center justify-center flex-wrap gap-6 w-full max-w-[500px]">
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
      </ul>
    </section>
  );
};

export default Brands;
