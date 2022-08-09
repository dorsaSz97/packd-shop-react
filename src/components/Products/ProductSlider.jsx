import React, { useState } from 'react';

const ProductSlider = ({ images, productName }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const imageClickHandler = activeIndex => {
    setActiveImageIndex(activeIndex);
  };

  return (
    <div className="flex flex-col items-center gap-6 lg:flex-row md:w-[50%]">
      <figure>
        <img
          className="mix-blend-darken"
          src={images[activeImageIndex]}
          alt={productName}
        />
      </figure>
      <div className="flex gap-3 lg:flex-col lg:order-first">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              className={`w-[100px] object-contain mix-blend-darken ${
                index === activeImageIndex ? 'border-2 border-dark' : ''
              }`}
              src={image}
              alt={productName}
              onClick={() => imageClickHandler(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
