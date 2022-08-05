import React from 'react';
import brand1 from '../../assets/Woman_2_360x.webp';
import brand2 from '../../assets/womens-health-logo_360x-1.webp';
import brand3 from '../../assets/Plant_Based_360x.webp';
import brand4 from '../../assets/image_4_360x.webp';
import brand5 from '../../assets/Evening_Standard_360x.webp';
import brand6 from '../../assets/Good_Housekeeping_360x.webp';
import brand7 from '../../assets/Cosmopolitan_360x.webp';
import brand8 from '../../assets/Bella_360x.webp';

const brands = [
  {
    path: brand1,
  },
  {
    path: brand2,
  },
  {
    path: brand3,
  },
  {
    path: brand4,
  },
  {
    path: brand5,
  },
  {
    path: brand6,
  },
  {
    path: brand7,
  },
  {
    path: brand8,
  },
];

const BrandsFt = () => {
  return (
    <section className="flex flex-wrap gap-6 bg-[#FEF9EF] p-16 border-black border-2">
      {brands.map(brand => {
        return (
          <img
            key={brand.path}
            src={brand.path}
            alt=""
            className="inline-block w-[20%] h-[20px] object-contain filter grayscale-[1] bg-transparent"
          />
        );
      })}
    </section>
  );
};

export default BrandsFt;
