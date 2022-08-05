import React from 'react';
import Hero from '../components/Hero/Hero';
import bundleImg from '../assets/packd-bundles_99ac40e7-a588-4ffc-8794-a917ff7c7987_540x.webp';
import fruitImg from '../assets/packd-tropical-gruite-being-eaten_540x.webp';
import smoothieImg from '../assets/packd-smoothies-lifestyle_540x.webp';
import vegetableImg from '../assets/Organic-Vegetables_by-PACKD_540x.webp';
import ProductSection from '../components/ProductSection/ProductSection';
import BrandsFt from '../components/BrandsFt/BrandsFt';
import Testimonials from '../components/Testimonials/Testimonials';
import Signup from '../components/Signup/Signup';
const productSections = [
  {
    title: 'packd bundles',
    desc: 'Our new bundles have been created to offer you the most convenient solution to purchase and enjoy our super nutritious range of products',
    text: 'shop bundle',
    image: bundleImg,
    path: '/products/?filter=bundles',
  },
  {
    title: 'packd fruit',
    desc: 'We select the best varieties of organic fruit, handpicked and frozen on the day of harvest to capture all their natural goodness.',
    text: 'shop fruit',
    image: fruitImg,
    path: '/products/?filter=fruit',
  },
  {
    title: 'packd smoothie',
    desc: 'Using the best plant-based ingredients and carefully selected superfood blends, each unique recipe kit is delicious, perfectly portioned and packed full of goodness for making eating well, easy',
    text: 'shop smoothies',
    image: smoothieImg,
    path: '/products/?filter=smoothie',
  },
  {
    title: 'packd organic vegetables',
    desc: 'We have selected the tastiest varieties of organic vegetables for our range. We have prepared them already so you can enjoy at home with zero faff.',
    text: 'shop vegetables',
    image: vegetableImg,
    path: '/products/?filter=vegetable',
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <BrandsFt />
      <div>
        {productSections.map(pro => {
          return (
            <ProductSection
              key={Math.random() * 1000}
              text={pro.text}
              desc={pro.desc}
              title={pro.title}
              path={pro.path}
              imgPath={pro.image}
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
