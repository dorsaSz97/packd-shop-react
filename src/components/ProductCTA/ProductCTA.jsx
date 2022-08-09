import React from 'react';

import ButtonLink from '../UI/ButtonLink';

const ProductCTA = ({ title, desc, btnText, path, imgPath, addedClasses }) => {
  return (
    <section
      className={`${
        addedClasses.section || ''
      } items-center gap-20 py-20 px-5 bg-primary md:px-8 lg:px-40`}
    >
      <figure className={`flex-1 ${addedClasses.image || ''}`}>
        <img src={imgPath} alt={title} />
      </figure>
      <div className="flex-1 text-center">
        <h3 className="font-pp font-bold text-4xl uppercase tracking-wide">
          {title}
        </h3>
        <p className="mt-4 mb-16">{desc}</p>
        <ButtonLink text={btnText} path={path} />
      </div>
    </section>
  );
};

export default ProductCTA;
