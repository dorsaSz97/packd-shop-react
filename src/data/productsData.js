import powerSmoothie1 from '../assets/products/smoothies/power1.webp';
import powerSmoothie2 from '../assets/products/smoothies/power2.webp';
import powerSmoothie3 from '../assets/products/smoothies/power3.webp';
import boostSmoothie1 from '../assets/products/smoothies/boost1.webp';
import boostSmoothie2 from '../assets/products/smoothies/boost2.webp';
import boostSmoothie3 from '../assets/products/smoothies/boost3.webp';
import energySmoothie1 from '../assets/products/smoothies/energy1.webp';
import energySmoothie2 from '../assets/products/smoothies/energy2.webp';
import energySmoothie3 from '../assets/products/smoothies/energy3.webp';
import nourishSmoothie1 from '../assets/products/smoothies/nourish1.webp';
import nourishSmoothie2 from '../assets/products/smoothies/nourish2.webp';
import nourishSmoothie3 from '../assets/products/smoothies/nourish3.webp';
import replenishSmoothie1 from '../assets/products/smoothies/replenish1.webp';
import replenishSmoothie2 from '../assets/products/smoothies/replenish2.webp';
import replenishSmoothie3 from '../assets/products/smoothies/replenish3.webp';
import vitalitySmoothie1 from '../assets/products/smoothies/vitality1.webp';
import vitalitySmoothie2 from '../assets/products/smoothies/vitality3.webp';

import avocadoFruit1 from '../assets/products/fruit/avocado1.webp';
import avocadoFruit2 from '../assets/products/fruit/avocado2.webp';
import bananaFruit1 from '../assets/products/fruit/banana1.webp';
import bananaFruit2 from '../assets/products/fruit/banana2.webp';
import bananaFruit3 from '../assets/products/fruit/banana3.webp';
import blueberryFruit1 from '../assets/products/fruit/blueberry1.webp';
import blueberryFruit2 from '../assets/products/fruit/blueberry2.webp';
import blueberryFruit3 from '../assets/products/fruit/blueberry3.webp';
import berryFruit1 from '../assets/products/fruit/berry1.webp';
import berryFruit2 from '../assets/products/fruit/berry2.webp';
import berryFruit3 from '../assets/products/fruit/berry3.webp';
import cherryFruit1 from '../assets/products/fruit/cherry1.webp';
import cherryFruit2 from '../assets/products/fruit/cherry2.webp';
import cherryFruit3 from '../assets/products/fruit/cherry3.webp';
import mangoFruit1 from '../assets/products/fruit/mango1.webp';
import mangoFruit2 from '../assets/products/fruit/mango2.webp';
import mangoFruit3 from '../assets/products/fruit/mango3.webp';
import mangoFruit4 from '../assets/products/fruit/mango4.webp';
import orchardFruit1 from '../assets/products/fruit/orchard1.webp';
import orchardFruit2 from '../assets/products/fruit/orchard2.webp';
import orchardFruit3 from '../assets/products/fruit/orchard3.webp';
import peachFruit1 from '../assets/products/fruit/peach1.webp';
import peachFruit2 from '../assets/products/fruit/peach2.webp';
import peachFruit3 from '../assets/products/fruit/peach3.webp';
import peachFruit4 from '../assets/products/fruit/peach4.webp';
import raspberryFruit1 from '../assets/products/fruit/raspberry1.webp';
import raspberryFruit2 from '../assets/products/fruit/raspberry2.webp';
import raspberryFruit3 from '../assets/products/fruit/raspberry3.webp';
import raspberryFruit4 from '../assets/products/fruit/raspberry4.webp';
import strawberryFruit1 from '../assets/products/fruit/strawberry1.webp';
import strawberryFruit2 from '../assets/products/fruit/strawberry2.webp';
import strawberryFruit3 from '../assets/products/fruit/strawberry3.webp';
import tropicalFruit1 from '../assets/products/fruit/tropical1.webp';
import tropicalFruit2 from '../assets/products/fruit/tropical2.webp';
import tropicalFruit3 from '../assets/products/fruit/tropical3.webp';

import cauliflowerVeg1 from '../assets/products/vegetables/cauliflower1.webp';
import cauliflowerVeg2 from '../assets/products/vegetables/cauliflower2.webp';
import cauliflowerVeg3 from '../assets/products/vegetables/cauliflower3.webp';
import cornVeg1 from '../assets/products/vegetables/corn1.webp';
import cornVeg2 from '../assets/products/vegetables/corn2.webp';
import cornVeg3 from '../assets/products/vegetables/corn3.webp';
import poisVeg1 from '../assets/products/vegetables/pois1.webp';
import poisVeg2 from '../assets/products/vegetables/pois2.webp';
import poisVeg3 from '../assets/products/vegetables/pois3.webp';
import potatoeVeg1 from '../assets/products/vegetables/potatoe1.webp';
import potatoeVeg2 from '../assets/products/vegetables/potatoe2.webp';
import potatoeVeg3 from '../assets/products/vegetables/potatoe3.webp';
import spinachVeg1 from '../assets/products/vegetables/spinach1.webp';
import spinachVeg2 from '../assets/products/vegetables/spinach2.webp';
import spinachVeg3 from '../assets/products/vegetables/spinach3.webp';

const productsData = [
  {
    id: 'smoothie1p',
    name: 'POWER SMOOTHIE KIT',
    category: 'smoothies',

    price: 2,
    description:
      'A delicious chocolatey blend of frozen fruit, vegetables, cacao and plant-based protein. Naturally high in protein and Vitamin C it is designed to help support muscle maintenance and reduce tiredness and fatigue.',
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

    thumbnail: powerSmoothie1,
    images: [powerSmoothie1, powerSmoothie2, powerSmoothie3],
  },

  {
    id: 'smoothie2v',
    name: 'VITALITY SMOOTHIE KIT',
    category: 'smoothies',

    price: 2,
    description:
      'A delicious blend of frozen fruits and specially selected superfoods designed to give your immune system a natural boost. Our recipes are 100% natural and packed with vitamins and minerals.',
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

    thumbnail: vitalitySmoothie1,
    images: [vitalitySmoothie1, vitalitySmoothie2],
  },

  {
    id: 'smoothie3r',
    name: 'REPLENISH SMOOTHIE KIT',
    category: 'smoothies',

    price: 2,
    description:
      'A delicious Multi-Vit smoothie mix designed to support overall wellbeing for body and mind. Our recipes are 100% natural and packed with vitamins and minerals.',
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

    thumbnail: replenishSmoothie1,
    images: [replenishSmoothie1, replenishSmoothie2, replenishSmoothie3],
  },

  {
    id: 'smoothie4e',
    name: 'ENERGY SMOOTHIE KIT',
    category: 'smoothies',

    price: 2,
    description:
      'A delicious blend of frozen fruits, vegetables and specially selected superfoods designed to deliver a natural energy boost. Our recipes are 100% natural and packed with vitamins and minerals.',
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

    thumbnail: energySmoothie1,
    images: [energySmoothie1, energySmoothie2, energySmoothie3],
  },

  {
    id: 'smoothie5b',
    name: 'BOOST SMOOTHIE KIT',
    category: 'smoothies',

    price: 2,
    description:
      'A delicious blend of frozen fruits, vegetables and specially selected superfoods designed to boost energy and focus. Our recipes are 100% natural and packed with vitamins and minerals.',
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

    thumbnail: boostSmoothie1,
    images: [boostSmoothie1, boostSmoothie2, boostSmoothie3],
  },

  {
    id: 'smoothie6n',
    name: 'NOURISH SMOOTHIE KIT',
    category: 'smoothies',

    price: 2,
    description:
      'A delicious blend of frozen fruit, vegetables, prebiotic fibre and specially selected superfoods designed to aid positive gut health.',
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

    thumbnail: nourishSmoothie1,
    images: [nourishSmoothie1, nourishSmoothie2, nourishSmoothie3],
  },

  {
    id: 'fruit2c',
    name: 'ORGANIC CHERRIES',
    category: 'fruit',

    price: 4.4,
    description:
      'Sweet organic frozen Cherries certified by the UK soil association. \n We have carefully sourced the best quality Cherries. We freeze once perfectly ripe to lock in flavour. Pitted and ready to use.\n Perfect for home-made smoothies, breakfast, baking and healthy snacks.',

    ingredients: ['Organic Cherries'],

    thumbnail: cherryFruit1,
    images: [cherryFruit1, cherryFruit2, cherryFruit3],
  },

  {
    id: 'fruit3s',
    name: 'ORGANIC STRAWBERRIES',
    category: 'fruit',

    price: 4.4,
    description:
      'Sweet organic frozen strawberries certified by the UK soil association. \n We have carefully sourced the best quality strawberries. We freeze once perfectly ripe to lock in flavour. Diced and ready to use.\n Perfect for healthy smoothies, breakfast, baking and healthy snacks.',
    ingredients: ['Organic Strawberries'],

    thumbnail: strawberryFruit1,
    images: [strawberryFruit1, strawberryFruit2, strawberryFruit3],
  },

  {
    id: 'fruit1r',
    name: 'ORGANIC RASPBERRIES',
    category: 'fruit',

    price: 5.3,
    description:
      'Hand-picked whole organic frozen raspberries certified by the UK soil association. \n We have carefully sourced the best quality raspberries. We freeze once perfectly ripe to lock in flavour.\n Perfect for home-made smoothies, breakfast, baking and healthy snacks',
    ingredients: ['Organic Raspberries'],

    thumbnail: raspberryFruit1,
    images: [
      raspberryFruit1,
      raspberryFruit2,
      raspberryFruit3,
      raspberryFruit4,
    ],
  },

  {
    id: 'fruit4b',
    name: 'ORGANIC BLUEBERRIES',
    category: 'fruit',

    price: 4.4,
    description:
      'Hand-picked organic frozen Blueberries certified by the UK soil association. \n We have carefully sourced the best quality Blueberries. We freeze once perfectly ripe to lock in flavour.\n Perfect for home-made smoothies, breakfast, baking and healthy snacks.',
    ingredients: ['Organic Blueberries'],

    thumbnail: blueberryFruit1,
    images: [blueberryFruit1, blueberryFruit2, blueberryFruit3],
  },

  {
    id: 'fruit5p',
    name: 'ORGANIC PEACHES',
    category: 'fruit',

    price: 4.3,
    description:
      'Sweet organic frozen chopped mangoes certified by the UK soil association.\n We have carefully sourced the best quality mangoes. We freeze once perfectly ripe. Chopped and ready to use. \n  Perfect for home-made smoothies, breakfast, baking and healthy snacks.',
    ingredients: ['Organic Mango'],

    thumbnail: peachFruit1,
    images: [peachFruit1, peachFruit2, peachFruit3, peachFruit4],
  },

  {
    id: 'fruit6a',
    name: 'AVOCADO',
    category: 'fruit',

    price: 3.3,
    description:
      'We have carefully sourced the best quality Hass Avocado. Chopped and ready to use.\n Superfood high in vitamins and minerals. Perfect for healthy smoothies and dips.',
    ingredients: ['Avocado'],

    thumbnail: avocadoFruit1,
    images: [avocadoFruit1, avocadoFruit2],
  },

  {
    id: 'fruit7m',
    name: 'ORGANIC MANGOES',
    category: 'fruit',

    price: 4.3,
    description:
      'Sweet organic frozen chopped mangoes certified by the UK soil association.\n  We have carefully sourced the best quality mangoes. We freeze once perfectly ripe. Chopped and ready to use. \n  Perfect for home-made smoothies, breakfast, baking and healthy snacks.',
    ingredients: ['Organic Mango'],

    thumbnail: mangoFruit1,
    images: [mangoFruit1, mangoFruit2, mangoFruit3, mangoFruit4],
  },

  {
    id: 'fruit8sb',
    name: 'ORGANIC SUMMER BERRIES',
    category: 'fruit',

    price: 4.4,
    description:
      'Handpicked and frozen on the day of harvest to capture all that goodness, our organic frozen fruit is a simple and sustainable way to add a little taste of sunshine to your day. We take time to carefully select and prepare the best, tastiest varieties so you can enjoy at home with no faff and zero waste. \n Perfect for blending, baking, breakfast and more. \n All our Organic Frozen Fruit offer the ultimate in convenience and nutrition. \n We only use the highest quality ingredients, freshly frozen for maximum nutritional value.',
    ingredients: [
      'Organic Berries',
      'Organic Blackberries',
      'Organic Blueberries',
    ],

    thumbnail: berryFruit1,
    images: [berryFruit1, berryFruit2, berryFruit3],
  },

  {
    id: 'fruit9of',
    name: 'ORGANIC ORCHARD FRUITS',
    category: 'fruit',

    price: 4.3,
    description:
      'Handpicked and frozen on the day of harvest to capture all that goodness, our organic frozen fruit is a simple and sustainable way to add a little taste of sunshine to your day. We take time to carefully select and prepare the best, tastiest varieties so you can enjoy at home with no faff and zero waste. \n Perfect for blending, baking, breakfast and more. \n All our Organic Frozen Fruit offer the ultimate in convenience and nutrition. \n We only use the highest quality ingredients, freshly frozen for maximum nutritional value.',
    ingredients: ['Organic Apple', 'Organic Peach', 'Organic Pear'],

    thumbnail: orchardFruit1,
    images: [orchardFruit1, orchardFruit2, orchardFruit3],
  },

  {
    id: 'fruit10tf',
    name: 'ORGANIC TROPICAL FRUITS',
    category: 'fruit',

    price: 4.3,
    description:
      'Handpicked and frozen on the day of harvest to capture all that goodness, our organic frozen fruit is a simple and sustainable way to add a little taste of sunshine to your day. We take time to carefully select and prepare the best, tastiest varieties so you can enjoy at home with no faff and zero waste. \n Perfect for blending, baking, breakfast and more. \n All our Organic Frozen Fruit offer the ultimate in convenience and nutrition. \n We only use the highest quality ingredients, freshly frozen for maximum nutritional value.',
    ingredients: ['Organic Pineapple', 'Organic Mango', 'Organic Passionfruit'],

    thumbnail: tropicalFruit1,
    images: [tropicalFruit1, tropicalFruit2, tropicalFruit3],
  },

  {
    id: 'fruit11b',
    name: 'BANANAS',
    category: 'fruit',

    price: 2.5,
    description:
      'We have carefully sourced the best quality Bananas. We freeze once perfectly ripe to lock in flavour. Sliced and ready to use. Perfect for home-made smoothies, breakfast, baking and healthy snacks.',
    ingredients: ['Bananas'],

    thumbnail: bananaFruit1,
    images: [bananaFruit1, bananaFruit2, bananaFruit3],
  },

  {
    id: 'fruit12tf',
    name: 'ORGANIC TROPICAL FRUIT',
    category: 'fruit',

    price: 4.3,
    description:
      'Handpicked and frozen on the day of harvest to capture all that goodness, our organic frozen fruit is a simple and sustainable way to add a little taste of sunshine to your day. We take time to carefully select and prepare the best, tastiest varieties so you can enjoy at home with no faff and zero waste. Perfect for Blending, Baking, Breakfast and More. \n All our Organic Frozen Fruit offer the ultimate in convenience and nutrition. \n We only use the highest quality ingredients, freshly frozen for maximum nutritional value.',
    ingredients: ['Pineapple', 'Passionfruit', 'Mango'],

    thumbnail: tropicalFruit1,
    images: [tropicalFruit1, tropicalFruit2, tropicalFruit3],
  },

  {
    id: 'veggie1s',
    name: 'ORGANIC SPINACH',
    category: 'vegetables',

    price: 3.3,
    description:
      'Picked and frozen on the day of harvest to capture all that goodness, our organic frozen vegetables are a sustainable way to add a little taste of sunshine to your day. \n We take time to carefully select and prepare the best and tastiest varieties so you can enjoy at home with no faff and zero waste. Great as a smoothie ingredient, for sautéing or adding to your favourite stir-fry. \n All our Organic Frozen Veg offer the ultimate in convenience and nutrition. We only use the highest quality ingredients, freshly frozen for maximum nutritional value.',
    ingredients: ['Spinach'],

    thumbnail: spinachVeg1,
    images: [spinachVeg1, spinachVeg2, spinachVeg3],
  },

  {
    id: 'veggie2p',
    name: 'ORGANIC SWEET POTATO',
    category: 'vegetables',

    price: 3.3,
    description:
      'Picked and frozen on the day of harvest to capture all that goodness, our organic frozen vegetables are a sustainable way to add a little taste of sunshine to your day \n  We take time to carefully select and prepare the best and tastiest varieties so you can enjoy at home with no faff and zero waste. Great as a smoothie ingredient or for simply roasting. \nAll our Organic Frozen Veg offer the ultimate in convenience and nutrition. We only use the highest quality ingredients, freshly frozen for maximum nutritional value.',
    ingredients: ['Sweet Potatoe'],

    thumbnail: potatoeVeg1,
    images: [potatoeVeg1, potatoeVeg2, potatoeVeg3],
  },

  {
    id: 'veggie3pp',
    name: 'ORGANIC PETIT POIS',
    category: 'vegetables',

    price: 3.3,
    description:
      'Picked and frozen on the day of harvest to capture all that goodness, our organic frozen vegetables are a sustainable way to add a little taste of sunshine to your day \n  We take time to carefully select and prepare the best and tastiest varieties so you can enjoy at home with no faff and zero waste. Great as a smoothie ingredient or for simply roasting. \nAll our Organic Frozen Veg offer the ultimate in convenience and nutrition. We only use the highest quality ingredients, freshly frozen for maximum nutritional value.',
    ingredients: ['Petit pois'],

    thumbnail: poisVeg1,
    images: [poisVeg1, poisVeg2, poisVeg3],
  },

  {
    id: 'veggie4cr',
    name: 'ORGANIC CAULIFLOWER RICE',
    category: 'vegetables',

    price: 3.3,
    description:
      'Picked and frozen on the day of harvest to capture all that goodness, our organic frozen vegetables are a sustainable way to add a little taste of sunshine to your day \n  We take time to carefully select and prepare the best and tastiest varieties so you can enjoy at home with no faff and zero waste. Great as a smoothie ingredient or for simply roasting. \nAll our Organic Frozen Veg offer the ultimate in convenience and nutrition. We only use the highest quality ingredients, freshly frozen for maximum nutritional value.',
    ingredients: ['Cauliflower'],

    thumbnail: cauliflowerVeg1,
    images: [cauliflowerVeg1, cauliflowerVeg2, cauliflowerVeg3],
  },

  {
    id: 'veggie5sc',
    name: 'ORGANIC SWEETCORN',
    category: 'vegetables',

    price: 3.3,
    description:
      'Picked and frozen on the day of harvest to capture all that goodness, our organic frozen vegetables are a sustainable way to add a little taste of sunshine to your day \n  We take time to carefully select and prepare the best and tastiest varieties so you can enjoy at home with no faff and zero waste. Great as a smoothie ingredient or for simply roasting. \nAll our Organic Frozen Veg offer the ultimate in convenience and nutrition. We only use the highest quality ingredients, freshly frozen for maximum nutritional value.',
    ingredients: ['Corn'],

    thumbnail: cornVeg1,
    images: [cornVeg1, cornVeg2, cornVeg3],
  },
];

export default productsData;
