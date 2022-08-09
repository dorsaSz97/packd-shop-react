import fruitImg from '../assets/ctas/fruit-cta.webp';
import smoothieImg from '../assets/ctas/smoothies-cta.webp';
import vegetableImg from '../assets/ctas/vegetables-cta.webp';

const HOME_CTAS = [
  {
    title: 'packd fruit',
    desc: 'We select the best varieties of organic fruit, handpicked and frozen on the day of harvest to capture all their natural goodness.',
    btnText: 'shop fruit',
    image: fruitImg,
    path: '/products?filter=fruit',
  },
  {
    title: 'packd smoothie',
    desc: 'Using the best plant-based ingredients and carefully selected superfood blends, each unique recipe kit is delicious, perfectly portioned and packed full of goodness for making eating well, easy',
    btnText: 'shop smoothies',
    image: smoothieImg,
    path: '/products?filter=smoothies',
  },
  {
    title: 'packd organic vegetables',
    desc: 'We have selected the tastiest varieties of organic vegetables for our range. We have prepared them already so you can enjoy at home with zero faff.',
    btnText: 'shop vegetables',
    image: vegetableImg,
    path: '/products?filter=vegetables',
  },
];

export default HOME_CTAS;
