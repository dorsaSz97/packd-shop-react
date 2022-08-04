import React from 'react';

const ImagesCol = ({ images, changeSliderPrevHandler }) => {
  console.log('fuckkk');
  return (
    <div className="flex flex-col gap-7">
      {images.map((image, index) => {
        return (
          <img
            className="w-[100px]"
            key={Math.random() * 1000}
            src={image}
            alt=""
            onClick={() => changeSliderPrevHandler(index)}
          />
        );
      })}
    </div>
  );
};

export default React.memo(ImagesCol);
