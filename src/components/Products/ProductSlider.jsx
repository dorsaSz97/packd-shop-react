import React, { useState } from 'react';

const ProductSlider = ({ images }) => {
  console.log(images);
  const [currImage, setCurrImage] = useState(images[0]);

  const imageClickHandler = index => {
    setCurrImage(images[index]);
  };

  return (
    <div className="flex gap-4 items-center">
      <figure>
        <img src={currImage} alt="" className="mix-blend-darken" />
      </figure>
      <div className="flex flex-col gap-7">
        {images.map((image, index) => {
          return (
            <img
              key={Math.random() * 1000}
              className="w-[100px] mix-blend-darken"
              src={image}
              alt=""
              onClick={() => imageClickHandler(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(ProductSlider);
