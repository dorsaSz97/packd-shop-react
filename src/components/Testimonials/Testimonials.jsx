import React, { useState, useEffect } from 'react';

import TESTIMONIALS from '../../data/testimonials';

import styles from './Testimonials.module.css';

const Testimonials = () => {
  const [currId, setCurrId] = useState(1);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    let starsArr = [];
    for (let i = 0; i < TESTIMONIALS[currId].stars; i++) {
      starsArr.push('⭐️');
    }
    setStars(starsArr);
  }, [currId]);

  return (
    <section className="relative p-6 bg-black text-white">
      <span
        className="absolute top-[50%] left-[5%] translate-y-[-50%] font-radial cursor-pointer"
        onClick={() =>
          setCurrId(prev =>
            prev === 0 ? setCurrId(TESTIMONIALS.length - 1) : prev - 1
          )
        }
      >
        &lt;
      </span>
      <ul className="flex items-center justify-center relative mx-auto w-[70%] h-[20rem] font-radial">
        {TESTIMONIALS.map((testimonial, index) => {
          return (
            <li
              key={testimonial.name + index}
              className={`${
                currId === index
                  ? `${styles.slide} ${styles.active}`
                  : `${styles.slide}`
              } flex flex-col absolute left-0 p-7 h-fit w-[100%] bg-white text-black`}
            >
              <div className="flex justify-between">
                <p className="font-bold uppercase text-[16px]">
                  {testimonial.name}
                </p>
                <span className="text-sm">{stars.join(' ')}</span>
              </div>
              <p className="italic uppercase text-[13px]">
                {testimonial.product}
              </p>
              <p className="mt-3 mb-8 text-[15px]">{testimonial.text}</p>
              <p className="mt-auto text-right text-[11px]">
                {testimonial.time}
              </p>
            </li>
          );
        })}
      </ul>
      <span
        className="absolute top-[50%] right-[5%] translate-y-[-50%] font-radial cursor-pointer"
        onClick={() =>
          setCurrId(prev =>
            prev === TESTIMONIALS.length - 1 ? setCurrId(0) : prev + 1
          )
        }
      >
        &gt;
      </span>
    </section>
  );
};

export default Testimonials;
