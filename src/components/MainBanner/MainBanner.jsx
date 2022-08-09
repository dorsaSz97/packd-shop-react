import React from 'react';
import { useSelector } from 'react-redux';

import MainBannerHeader from './MainBannerHeader';

const MainBanner = () => {
  const currCategory = useSelector(state => state.products.currProduct);

  return (
    <section
      style={{ backgroundImage: `url(${currCategory.bannerImg})` }}
      className="py-[7rem] bg-cover bg-center bg-no-repeat"
    >
      <MainBannerHeader
        title={currCategory.category}
        text={currCategory.desc}
      />
    </section>
  );
};

export default MainBanner;
