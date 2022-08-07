import { useEffect, useState, useRef } from 'react';
import React from 'react';
import styles from './SliderBanner.module.css';
const images = ['VEGAN', 'VEGETERIAN', 'GLUTEN FREE'];
const SliderBanner = () => {
  // const [index, setIndex] = useState(0);

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex(prevIndex =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  // useEffect(() => {
  //   const int = setInterval(() => {
  //     setIndex(prev => prev + 1);
  //     if (index >= 2) setIndex(0);
  //   }, 2000);

  //   return () => {
  //     clearInterval(int);
  //   };
  // }, [index]);

  return (
    <div className="relative">
      {images.map((image, indx) => {
        console.log(index);
        let computedClass =
          indx === index
            ? `${styles.active} ${styles.slide}`
            : `${styles.slide}`;
        return (
          <p key={indx} className={computedClass}>
            {image}
          </p>
        );
      })}
    </div>
  );
};

export default SliderBanner;
