import React from 'react';

import ProductCTA from '../components/ProductCTA';

import ABOUT_CTAS from '../data/aboutCTAs';
import Hero from '../components/Hero/Hero';
import aboutImg from '../assets/banners/about-banner.webp';

const About = () => {
  return (
    <section>
      <Hero
        headingText="PLANET FRIENDLY FOOD"
        text="We are on a mission to help consumers choose products that help to sustain our world."
        img={aboutImg}
      />
      <div className="flex flex-wrap justify-around px-8 lg:px-20">
        {ABOUT_CTAS.map((cta, index) => {
          return (
            <ProductCTA
              addedClasses={{
                section: 'flex flex-col w-[100%] lg:w-[45%]',
                image: '',
              }}
              key={index}
              btnText={cta.btnText}
              desc={cta.desc}
              title={cta.title}
              path={cta.path}
              imgPath={cta.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default About;
