import React from 'react';

const MainBannerHeader = ({ title, text }) => {
  return (
    <header className="px-10 py-16 m-auto w-[90%] max-w-[40rem] bg-dark bg-opacity-25 text-white lg:mx-0 lg:ml-10">
      <h2 className="mb-2 font-pp tracking-wider text-6xl uppercase">
        {title || 'All Products'}
      </h2>
      <p className="font-radial text-sm md:text-[1rem] lg:text-lg">
        {text || ''}
      </p>
    </header>
  );
};

export default MainBannerHeader;
