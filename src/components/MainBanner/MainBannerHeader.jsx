import React from 'react';

const MainBannerHeader = ({ title, text }) => {
  return (
    <header className="bg-black text-white bg-opacity-25 w-[90%] m-auto p-10">
      <h1 className="font-pp tracking-wider text-6xl uppercase ">
        {title || 'All Products'}
      </h1>
      <p className="text-sm">{text || ''}</p>
    </header>
  );
};

export default MainBannerHeader;
