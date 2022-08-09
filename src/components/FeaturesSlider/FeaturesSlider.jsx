import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './FeaturesSlider.module.css';

const FeaturesSlider = () => {
  const [sliderCounter, setSliderCounter] = useState(0);
  const { currProduct } = useSelector(state => state.products);

  useEffect(() => {
    const timeoutId = setInterval(
      () =>
        setSliderCounter(prev =>
          prev === currProduct.features.length - 1 ? 0 : prev + 1
        ),
      3000
    );
    return () => {
      clearTimeout(timeoutId);
    };
  }, [currProduct]);

  return (
    <div className="flex justify-center items-center relative p-4 h-[5rem] border-t-2 border-b-2 border-dark md:h-[7rem]">
      <ul className="flex justify-center items-center">
        {currProduct.features.map((feature, index) => {
          const computedClass =
            index === sliderCounter
              ? `${styles.active} ${styles.feature}`
              : `${styles.feature}`;
          return (
            <li
              key={index}
              className={`${computedClass} flex gap-4 items-center absolute
            `}
            >
              <img
                src={feature.icon}
                alt={feature.text}
                className="w-[40px] h-[40px]"
              />
              <p className="flex-2 text-center">{feature.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeaturesSlider;
