import bundlesBannerImg from '../assets/banners/bundles-banner.webp';
import fruitBannerImg from '../assets/banners/fruit-banner.webp';
import smoothieBannerImg from '../assets/banners/smoothies-banner.webp';
import vegetablesBannerImg from '../assets/banners/vegetables-banner.webp';

import noSugarIcon from '../assets/benefits/zero-sugar.webp';
import noWasteIcon from '../assets/benefits/zero-waste.webp';
import frozenIcon from '../assets/benefits/frozen.webp';
import blendIcon from '../assets/benefits/blend.webp';
import ripeIcon from '../assets/benefits/ripe.webp';
import gradeAIcon from '../assets/benefits/grade-a.webp';
import superfoodIcon from '../assets/benefits/superfood.webp';

const PRODUCTS_BANNER = [
  {
    category: '',
    bannerImg: bundlesBannerImg,
    desc: '',
    features: [
      { text: '100% Plant based', icon: ripeIcon },
      { text: 'Full of natural goodness', icon: gradeAIcon },
      { text: 'Freshly Frozen', icon: frozenIcon },
      { text: 'Zero Waste', icon: noWasteIcon },
    ],
  },
  {
    category: 'Smoothies',
    bannerImg: smoothieBannerImg,
    desc: 'Using the best plant-based ingredients and carefully selected superfood blends, each unique recipe kit is delicious, perfectly portioned and packed full of goodness for making eating well, easy.',
    features: [
      { text: 'No Added Sugar', icon: noSugarIcon },
      { text: 'Ready to Blend', icon: blendIcon },
      { text: 'Unique Superfood Mix', icon: superfoodIcon },
      { text: 'Zero Waste', icon: noWasteIcon },
    ],
  },
  {
    category: 'Organic Vegetables',
    bannerImg: vegetablesBannerImg,
    desc: 'Picked and Frozen on the day of harvest to capture all that goodness, our frozen organic vegetables are a sustainable way to add a little taste of sunshine to your day.',
    features: [
      { text: 'Freshly Frozen', icon: frozenIcon },
      { text: 'Grade A Organic Vegetables', icon: gradeAIcon },
      { text: 'Ripe & Ready to use', icon: ripeIcon },
      { text: 'Zero Waste', icon: noWasteIcon },
    ],
  },
  {
    category: 'Fruit',
    bannerImg: fruitBannerImg,
    desc: 'We select the best varieties of organic fruit, handpicked and frozen on the day of harvest to capture all their natural goodness.',
    features: [
      { text: 'Freshly Frozen', icon: frozenIcon },
      { text: 'Grade A Organic Fruit', icon: gradeAIcon },
      { text: 'Ripe & Ready to use', icon: ripeIcon },
      { text: 'Zero Waste', icon: noWasteIcon },
    ],
  },
];

export default PRODUCTS_BANNER;
