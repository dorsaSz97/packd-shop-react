import React from 'react';
import { useSelector } from 'react-redux';

import MainBannerHeader from './MainBannerHeader';

const MainBanner = () => {
  const currProduct = useSelector(state => state.products.currProduct);

  if (!currProduct) return; //TODO:LOADER SPINNER

  return (
    <section
      className="py-[8rem] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${currProduct.bannerImg})` }}
    >
      <MainBannerHeader text={currProduct.desc} title={currProduct.category} />
    </section>
  );
};

export default MainBanner;
