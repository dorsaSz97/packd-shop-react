import React from 'react';
import ButtonLink from '../UI/ButtonLink';

const ProductCTA = ({ title, desc, text, path, imgPath }) => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 bg-[#FEF9EF] pt-20 pb-10 px-5">
      <figure>
        <img src={imgPath} alt="" />
      </figure>
      <div className="text-center">
        <h3 className="font-bold text-4xl uppercase font-pp tracking-wide">
          {title}
        </h3>
        <p className="my-4 mb-16">{desc}</p>
        <ButtonLink text={text} path={path} />
      </div>
    </section>
  );
};

export default ProductCTA;
