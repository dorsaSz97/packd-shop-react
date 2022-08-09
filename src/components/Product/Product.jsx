import React from 'react';

import ProductSlider from '../Products/ProductSlider';
import QuantityForm from '../QuantityForm';

const Product = ({ product }) => {
  return (
    <>
      <div className="flex flex-col gap-20 py-5 px-6 md:flex-row md:justify-around">
        <ProductSlider images={product.images} productName={product.name} />

        <div className="flex flex-col gap-10 md:w-[40%]">
          <div className="flex flex-col gap-3">
            <h2 className="font-pp text-5xl font-bold tracking-wider">
              {product.name}
            </h2>
            <span className="text-[1.3rem]">${product.price.toFixed(2)}</span>

            <ul>
              {product.ingredients.map((ing, index) => {
                return (
                  <li className="capitalize" key={index}>
                    * {ing}
                  </li>
                );
              })}
            </ul>
          </div>

          <QuantityForm product={product} />

          <p className="text-[1.16rem]">{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
