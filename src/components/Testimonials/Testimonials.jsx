import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Rosalind Michael',
    stars: 5,
    text: 'Absolutely love these smoothies and highly recommend them. So easy and quick to make and being able to add your own liquid means you can enjoy it how you want. A great way to add some fruit and nutrients to your diet',
    product: 'SMOOTHIE KIT VALUE BOXt',
    time: 'Brighton, United Kingdom, 2 weeks ago',
  },
  {
    name: 'Kay Sutt',
    stars: 4,
    text: 'Amazing taste, organic and full of goodness.',
    product: 'POWER SMOOTHIE KIT',
    time: 'Derby, United Kingdom, 2 weeks ago',
  },
  {
    name: 'Suzanne Owen',
    stars: 2,
    text: 'The bags are tiny & the fruit’s not organic! Definitely not worth the money, more plastic bags to go into waste, cheaper to go to the supermarket',
    product: 'All three kits',
    time: 'Leatherhead, United Kingdom, a months ago',
  },
];

const Testimonials = () => {
  const [currId, setCurrId] = useState(1);

  const [stars, setStars] = useState([]);

  useEffect(() => {
    console.log(testimonials[currId]);
    let starsArr = [];
    for (let i = 0; i < testimonials[currId].stars; i++) {
      starsArr.push('*');
    }
    setStars(starsArr);
  }, [currId]);

  return (
    <div className=" p-8 bg-black relative text-white">
      <span
        className="font-sans absolute top-[50%] left-0"
        onClick={() =>
          setCurrId(p => (p === 0 ? setCurrId(testimonials.length - 1) : p - 1))
        }
      >
        &lt;
      </span>
      <ul className="flex relative h-[300px] w-[80%] mx-auto ">
        {testimonials.map((testimonial, index) => {
          return (
            <li
              key={testimonial.name + index}
              className={`${
                currId === index ? 'slide active' : 'slide'
              } p-10 h-[100%] w-[100%] absolute l-[0%]  bg-white text-black flex flex-col`}
            >
              {stars.join('')}
              <div className="font-bold uppercase text-[19px]">
                {testimonial.name}
              </div>
              <div className="font-italic uppercase text-[13px]">
                {testimonial.product}
              </div>
              <div className=" text-[15px]">{testimonial.text}</div>
              <div className="text-right text-[11px] mt-auto">
                {testimonial.time}
              </div>
            </li>
          );
        })}
      </ul>

      <span
        className="font-sans absolute top-[50%] right-0"
        onClick={() =>
          setCurrId(p => (p === testimonials.length - 1 ? setCurrId(0) : p + 1))
        }
      >
        &gt;
      </span>
    </div>
  );
};

export default Testimonials;
