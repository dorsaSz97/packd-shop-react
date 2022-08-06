import energySmoothieThumbImg from '../assets/energy-smoothie-thumb.webp';
import energySmoothie2 from '../assets/energy-smoothie-2.webp';
import energySmoothie3 from '../assets/energy-smoothie-3.webp';

const productsData = [
  // smoothie

  {
    id: 'smoothie1p',
    name: 'POWER SMOOTHIE KIT',
    price: 2,
    description:
      'A delicious chocolatey blend of frozen fruit, vegetables, cacao and plant-based protein. Naturally high in protein and Vitamin C it is designed to help support muscle maintenance and reduce tiredness and fatigue.',
    benefits: [
      'Source of Zinc which helps maintain normal skin, hair and nails',
      'Source of Magnesium which supports normal protein synthesis',
      'Rich in Iron, Folate, Vitamins B-6 and C ',
    ],
    diets: [
      { title: 'Gluten Free', icon: '' },
      { title: 'Vegan', icon: '' },
      { text: 'Freshly Frozen', icon: '' },
    ],
    ingredients: [
      'banana',
      'blueberries',
      'spinach',
      'cauliflower',
      'dates',
      'avocado',
      'pea protein',
      'pumpkin seed',
      'maca',
    ],
    category: 'smoothie',
    directions: [
      'Add 200ml of water, coconut water, fruit juice or plant milk to your blender',
      'Add your fruit and veg pouch and superfood sachet and blend',
      'Enjoy your freshly made superfood smoothie',
    ],
  },

  {
    id: 'smoothie2v',
    name: 'VITALITY SMOOTHIE KIT',
    price: 2,
    description:
      'A delicious blend of frozen fruits and specially selected superfoods designed to give your immune system a natural boost.  Our recipes are 100% natural and packed with vitamins and minerals.',
    benefits: [
      'Helps function of immune system',
      'Source of fibre for positive gut health',
      '1 1/2 of your 5 per day',
    ],
    diets: [
      { title: 'Gluten Free', icon: '' },
      { title: 'Vegan', icon: '' },
      { text: 'Freshly Frozen', icon: '' },
    ],
    ingredients: [
      'pineapple',
      'mango',
      'papaya',
      'banana',
      'ginger',
      'flex seed',
      'goji berries',
      'baobab',
      'sunflower seed',
      'pumpkin seed',
    ],
    category: 'smoothie',
    directions: [
      'Add 200ml of water, coconut water, fruit juice or plant milk to your blender',
      'Add your fruit and veg pouch and superfood sachet and blend',
      'Enjoy your freshly made superfood smoothie',
    ],
    thumbnail: '',
    images: [],
  },

  {
    id: 'smoothie3r',
    name: 'REPLENISH SMOOTHIE KIT',
    price: 2,
    description:
      'A delicious Multi-Vit smoothie mix designed to support overall wellbeing for body and mind. Our recipes are 100% natural and packed with vitamins and minerals.',
    benefits: [
      'Helps protect cells from oxidative stress',
      'Helps to maintain healthy skin',
      'Source of fibre for positive gut health',
      '1 1/2 of your 5 a day',
    ],
    diets: [
      { title: 'Gluten Free', icon: '' },
      { title: 'Vegan', icon: '' },
      { text: 'Freshly Frozen', icon: '' },
    ],
    ingredients: [
      'pineapple',
      'apple',
      'spinach',
      'kale',
      'ginger',
      'lemon zest',
      'spirulina',
      'chlorella',
      'wheatgrass',
      'barleygrass',
    ],
    category: 'smoothie',
    directions: [
      'Add 200ml of water, coconut water, fruit juice or plant milk to your blender',
      'Add your fruit and veg pouch and superfood sachet and blend',
      'Enjoy your freshly made superfood smoothie',
    ],
    thumbnail: '',
    images: [],
  },

  {
    id: 'smoothie4e',
    name: 'ENERGY SMOOTHIE KIT',
    price: 2,
    description:
      'A delicious blend of frozen fruits, vegetables and specially selected superfoods designed to deliver a natural energy boost. Our recipes are 100% natural and packed with vitamins and minerals.',
    benefits: [
      'Contains natural source of caffeine',
      'Helps reduce tiredness and fatigue',
      'Source of fibre for positive gut health',
      '1 1/2 of your 5 per day',
    ],
    diets: [
      { title: 'Gluten Free', icon: '' },
      { title: 'Vegan', icon: '' },
      { text: 'Freshly Frozen', icon: '' },
    ],
    ingredients: [
      'banana',
      'strawberries',
      'blueberries',
      'raspberries',
      'blackcurrant',
      'spinach',
      'maca',
      'chia seed',
      'cacao',
      'guarana',
    ],
    category: 'smoothie',
    directions: [
      'Add 200ml of water, coconut water, fruit juice or plant milk to your blender',
      'Add your fruit and veg pouch and superfood sachet and blend',
      'Enjoy your freshly made superfood smoothie',
    ],
    thumbnail: energySmoothieThumbImg,
    images: [energySmoothieThumbImg, energySmoothie2, energySmoothie3],
  },

  {
    id: 'smoothie5b',
    name: 'BOOST SMOOTHIE KIT',
    price: 2,
    description:
      'A delicious blend of frozen fruits, vegetables and specially selected superfoods designed to boost energy and focus. Our recipes are 100% natural and packed with vitamins and minerals.',
    benefits: [
      'High in Vitamin C to boost immunity',
      'Rich in Vitamin B6 which helps normal psychological function',
      'Source of Fibre and Potassium',
    ],
    diets: [
      { title: 'Gluten Free', icon: '' },
      { title: 'Vegan', icon: '' },
      { text: 'Freshly Frozen', icon: '' },
    ],
    ingredients: [
      'banana',
      'cherry',
      'blueberry',
      'carrot',
      'strawberry',
      'goji berry',
      'flax seed',
      'sunflower seed',
      'acerola',
      'siberian ginseng',
    ],
    category: 'smoothie',
    directions: [
      'Add 200ml of water, coconut water, fruit juice or plant milk to your blender',
      'Add your fruit and veg pouch and superfood sachet and blend',
      'Enjoy your freshly made superfood smoothie',
    ],
    thumbnail: '',
    images: [],
  },

  {
    id: 'smoothie6n',
    name: 'NOURISH SMOOTHIE KIT',
    price: 2,
    description:
      'A delicious blend of frozen fruit, vegetables, prebiotic fibre and specially selected superfoods designed to aid positive gut health.',
    benefits: [
      'High Fibre: 7g of chicory inulin per serving (58% of RDI*)',
      'Vitamin C, Vitamin B-6 & Copper to support normal function of the immune system',
      'Source of Iron',
    ],
    diets: [
      { title: 'Gluten Free', icon: '' },
      { title: 'Vegan', icon: '' },
      { text: 'Freshly Frozen', icon: '' },
    ],
    ingredients: [
      'banana',
      'avocado',
      'date',
      'kale',
      'courgette',
      'apple',
      'chicory root',
      'pumpkin seed',
      'flax seed',
      'baobab',
    ],
    category: 'smoothie',
    directions: [
      'Add 200ml of water, coconut water, fruit juice or plant milk to your blender',
      'Add your fruit and veg pouch and superfood sachet and blend',
      'Enjoy your freshly made superfood smoothie',
    ],
    thumbnail: '',
    images: [],
  },

  // fruit
  {
    id: 'fruit1r',
    name: 'ORGANIC RASPBERRIES',
    price: 5.3,
    description:
      'Hand-picked whole organic frozen raspberries certified by the UK soil association. \n We have carefully sourced the best quality raspberries.  We freeze once perfectly ripe to lock in flavour.\n Perfect for home-made smoothies, breakfast, baking and healthy snacks',

    ingredients: [{ name: 'Organic Raspberries', amount: 100 }],
    category: 'fruit',
    directions: [
      'Perfect for blending, baking, snacking, sauces, curries, salads and adding to yogurt, cereal and desserts - simply defrost for 30 minutes. For Smoothies blend from frozen.',
    ],
    diets: [],
    thumbnail: '',
    images: [],
  },

  {
    id: 'fruit2c',
    name: 'ORGANIC CHERRIES',
    price: 4.4,
    description:
      'Sweet organic frozen Cherries certified by the UK soil association. \n We have carefully sourced the best quality Cherries.  We freeze once perfectly ripe to lock in flavour. Pitted and ready to use.\n Perfect for home-made smoothies, breakfast, baking and healthy snacks.',

    ingredients: [{ name: 'Organic Cherries', amount: 100 }],
    category: 'fruit',
    directions: [
      'Perfect for blending, baking, snacking, sauces, curries, salads and adding to yogurt, cereal and desserts - simply defrost for 30 minutes. For Smoothies blend from frozen.',
    ],
    diets: [],
    thumbnail: '',
    images: [],
  },

  {
    id: 'fruit3s',
    name: 'ORGANIC STRAWBERRIES',
    price: 4.4,
    description:
      'Sweet organic frozen strawberries certified by the UK soil association. \n  We have carefully sourced the best quality strawberries.  We freeze once perfectly ripe to lock in flavour.  Diced and ready to use. \n Perfect for healthy smoothies, breakfast, baking and healthy snacks.',

    ingredients: [{ name: 'Organic Strawberries', amount: 100 }],
    category: 'fruit',
    directions: [
      'Perfect for blending, baking, snacking, sauces, curries, salads and adding to yogurt, cereal and desserts - simply defrost for 30 minutes. For Smoothies blend from frozen.',
    ],
    diets: [],
    thumbnail: '',
    images: [],
  },

  {
    id: 'fruit4b',
    name: 'ORGANIC BLUEBERRIES',
    price: 4.4,
    description:
      'Hand-picked organic frozen Blueberries certified by the UK soil association. \n We have carefully sourced the best quality Blueberries.  We freeze once perfectly ripe to lock in flavour.\n Perfect for home-made smoothies, breakfast, baking and healthy snacks.',

    ingredients: [{ name: 'Organic Blueberries', amount: 100 }],
    category: 'fruit',
    directions: [
      'Perfect for blending, baking, snacking, sauces, curries, salads and adding to yogurt, cereal and desserts - simply defrost for 30 minutes. For Smoothies blend from frozen.',
    ],
    diets: [],
    thumbnail: '',
    images: [],
  },

  {
    id: 'fruit5p',
    name: 'ORGANIC PEACHES',
    price: 4.3,
    description:
      'Sweet organic frozen chopped mangoes certified by the UK soil association.\n  We have carefully sourced the best quality mangoes.  We freeze once perfectly ripe.  Chopped and ready to use. \n  Perfect for home-made smoothies, breakfast, baking and healthy snacks.',

    ingredients: [{ name: 'Organic Mango', amount: 100 }],
    category: 'fruit',
    directions: [
      'Perfect for blending, baking, snacking, sauces, curries, salads and adding to yogurt, cereal and desserts - simply defrost for 30 minutes. For Smoothies blend from frozen.',
    ],
    diets: [],
    thumbnail: '',
    images: [],
  },

  {
    id: 'fruit6a',
    name: 'AVOCADO',
    price: 3.3,
    description:
      'We have carefully sourced the best quality Hass Avocado. Chopped and ready to use.\n Superfood high in vitamins and minerals.  Perfect for healthy smoothies and dips. ',

    ingredients: [{ name: 'Avocado', amount: 100 }],
    category: 'fruit',
    directions: [
      'Perfect for blending, baking, snacking, sauces, curries, salads and adding to yogurt, cereal and desserts - simply defrost for 30 minutes. For Smoothies blend from frozen.',
    ],
    diets: [],
    thumbnail: '',
    images: [],
  },

  {
    id: 'fruit7m',
    name: 'ORGANIC MANGOES',
    price: 4.3,
    description:
      'Sweet organic frozen chopped mangoes certified by the UK soil association.\n  We have carefully sourced the best quality mangoes.  We freeze once perfectly ripe.  Chopped and ready to use. \n  Perfect for home-made smoothies, breakfast, baking and healthy snacks.',

    ingredients: [{ name: 'Organic Mango', amount: 100 }],
    category: 'fruit',
    directions: [
      'Perfect for blending, baking, snacking, sauces, curries, salads and adding to yogurt, cereal and desserts - simply defrost for 30 minutes. For Smoothies blend from frozen.',
    ],
    diets: [],
    thumbnail: '',
    images: [],
  },

  {
    id: 'fruit8sb',
    name: 'ORGANIC SUMMER BERRIES',
    price: 4.4,
    description:
      'Handpicked and frozen on the day of harvest to capture all that goodness, our organic frozen fruit is a simple and sustainable way to add a little taste of sunshine to your day. We take time to carefully select and prepare the best, tastiest varieties so you can enjoy at home with no faff and zero waste. \n Perfect for blending, baking, breakfast and more. \n All our Organic Frozen Fruit offer the ultimate in convenience and nutrition. \n We only use the highest quality ingredients, freshly frozen for maximum nutritional value.',

    ingredients: [
      { name: 'Organic Berries', amount: 36 },
      { name: 'Organic Blackberries', amount: 30 },
      { name: 'Organic Blueberries', amount: 34 },
    ],
    category: 'fruit',
    directions: [
      'Perfect for blending, baking, snacking, sauces, curries, salads and adding to yogurt, cereal and desserts - simply defrost for 30 minutes. For Smoothies blend from frozen.',
    ],
    diets: [],
    thumbnail: '',
    images: [],
  },

  {
    id: 'fruit9of',
    name: 'ORGANIC ORCHARD FRUITS',
    price: 4.3,
    description:
      'Handpicked and frozen on the day of harvest to capture all that goodness, our organic frozen fruit is a simple and sustainable way to add a little taste of sunshine to your day. We take time to carefully select and prepare the best, tastiest varieties so you can enjoy at home with no faff and zero waste. \n Perfect for blending, baking, breakfast and more. \n All our Organic Frozen Fruit offer the ultimate in convenience and nutrition. \n We only use the highest quality ingredients, freshly frozen for maximum nutritional value.',

    ingredients: [
      { name: 'Organic Apple', amount: 36 },
      { name: 'Organic Peach', amount: 34 },
      { name: 'Organic Pear', amount: 30 },
    ],
    category: 'fruit',
    directions: [
      'Perfect for blending, baking, snacking, sauces, curries, salads and adding to yogurt, cereal and desserts - simply defrost for 30 minutes. For Smoothies blend from frozen.',
    ],
    diets: [],
    thumbnail: '',
    images: [],
  },

  {
    id: 'fruit10tf',
    name: 'ORGANIC TROPICAL FRUITS',
    price: 4.3,
    description:
      'Handpicked and frozen on the day of harvest to capture all that goodness, our organic frozen fruit is a simple and sustainable way to add a little taste of sunshine to your day. We take time to carefully select and prepare the best, tastiest varieties so you can enjoy at home with no faff and zero waste. \n Perfect for blending, baking, breakfast and more. \n All our Organic Frozen Fruit offer the ultimate in convenience and nutrition. \n We only use the highest quality ingredients, freshly frozen for maximum nutritional value.',

    ingredients: [
      { name: 'Organic Pineapple', amount: 39 },
      { name: 'Organic Mango', amount: 39 },
      { name: 'Organic Passionfruit', amount: 22 },
    ],
    category: 'fruit',
    directions: [
      'Perfect for blending, baking, snacking, sauces, curries, salads and adding to yogurt, cereal and desserts - simply defrost for 30 minutes. For Smoothies blend from frozen.',
    ],
    diets: [
      { title: 'Gluten Free', icon: '' },
      { title: 'Vegan', icon: '' },
      { text: 'Freshly Frozen', icon: '' },
    ],
    thumbnail: '',
    images: [],
  },

  {
    id: 'fruit11b',
    name: 'BANANAS',
    price: 2.5,
    description:
      'We have carefully sourced the best quality Bananas.  We freeze once perfectly ripe to lock in flavour. Sliced and ready to use. Perfect for home-made smoothies, breakfast, baking and healthy snacks.',
    ingredients: [{ name: 'Bananas', amount: 100 }],
    category: 'fruit',
    directions: [
      'Perfect for blending, baking, snacking, sauces, curries, salads and adding to yogurt, cereal and desserts - simply defrost for 30 minutes. For Smoothies blend from frozen.',
    ],
    diets: [
      { title: 'Gluten Free', icon: '' },
      { title: 'Vegan', icon: '' },
      { text: 'Freshly Frozen', icon: '' },
    ],
    thumbnail: '',
    images: [],
  },
];

export default productsData;
