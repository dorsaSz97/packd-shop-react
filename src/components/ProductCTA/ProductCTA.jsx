import React from 'react';

import ButtonLink from '../UI/ButtonLink';

const ProductCTA = ({ title, desc, btnText, path, imgPath, addedClasses }) => {
  return (
    <section
      className={`${
        addedClasses.section || ''
      } items-center gap-10 py-14 px-5 bg-primary md:px-8  lg:py-20 lg:gap-20`}
    >
      <figure className={`flex-1 ${addedClasses.image || ''}`}>
        <img src={imgPath} alt={title} />
      </figure>
      <div className="flex-1 flex flex-col items-center justify-between text-center">
        <h3 className="font-pp font-bold text-4xl uppercase tracking-wide">
          {title}
        </h3>
        <p className="mt-4 mb-8 lg:mb-16 ">{desc}</p>
        <ButtonLink text={btnText} path={path} />
      </div>
    </section>
  );
};

export default ProductCTA;
