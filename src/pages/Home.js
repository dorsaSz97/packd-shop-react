import React from 'react';

import Hero from '../components/Hero/Hero';
import Brands from '../components/Brands';
import ProductCTA from '../components/ProductCTA';
import Testimonials from '../components/Testimonials';
import Signup from '../components/Signup';
import HOME_CTAS from '../data/homeCTAs';

import heroImg from '../assets/banners/hero.webp';

const Home = () => {
  return (
    <div>
      <Hero
        headingText="eat well, feel good, repeat"
        text="We are on a mission to make it super simple to get the nutrition you deserve so you can feel great and do what you do best"
        img={heroImg}
      />

      <Brands />

      <div>
        {HOME_CTAS.map((cta, index) => {
          return (
            <ProductCTA
              addedClasses={{
                section: 'flex',
                image: `${index % 2 ? 'order-2' : ''}`,
              }}
              key={cta.path}
              btnText={cta.btnText}
              desc={cta.desc}
              title={cta.title}
              path={cta.path}
              imgPath={cta.image}
            />
          );
        })}
      </div>

      <Testimonials />

      <Signup />
    </div>
  );
};

export default Home;
