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
import vitalitySmoothie2 from '../assets/products/smoothies/vitality2.webp';
import vitalitySmoothie3 from '../assets/products/smoothies/vitality3.webp';

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
    category: 'smoothies',
    directions: [
      'Add 200ml of water, coconut water, fruit juice or plant milk to your blender',
      'Add your fruit and veg pouch and superfood sachet and blend',
      'Enjoy your freshly made superfood smoothie',
    ],
    thumbnail: powerSmoothie1,
    images: [powerSmoothie1, powerSmoothie2, powerSmoothie3],
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
      '2 1/2 of your 5 per day',
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
    category: 'smoothies',
    directions: [
      'Add 200ml of water, coconut water, fruit juice or plant milk to your blender',
      'Add your fruit and veg pouch and superfood sachet and blend',
      'Enjoy your freshly made superfood smoothie',
    ],
    thumbnail: vitalitySmoothie1,
    images: [vitalitySmoothie1, vitalitySmoothie2, vitalitySmoothie3],
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
    category: 'smoothies',
    directions: [
      'Add 200ml of water, coconut water, fruit juice or plant milk to your blender',
      'Add your fruit and veg pouch and superfood sachet and blend',
      'Enjoy your freshly made superfood smoothie',
    ],
    thumbnail: replenishSmoothie1,
    images: [replenishSmoothie1, replenishSmoothie2, replenishSmoothie3],
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
    category: 'smoothies',
    directions: [
      'Add 200ml of water, coconut water, fruit juice or plant milk to your blender',
      'Add your fruit and veg pouch and superfood sachet and blend',
      'Enjoy your freshly made superfood smoothie',
    ],
    thumbnail: energySmoothie1,
    images: [energySmoothie1, energySmoothie2, energySmoothie3],
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
    category: 'smoothies',
    directions: [
      'Add 200ml of water, coconut water, fruit juice or plant milk to your blender',
      'Add your fruit and veg pouch and superfood sachet and blend',
      'Enjoy your freshly made superfood smoothie',
    ],
    thumbnail: boostSmoothie1,
    images: [boostSmoothie1, boostSmoothie2, boostSmoothie3],
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
    category: 'smoothies',
    directions: [
      'Add 200ml of water, coconut water, fruit juice or plant milk to your blender',
      'Add your fruit and veg pouch and superfood sachet and blend',
      'Enjoy your freshly made superfood smoothie',
    ],
    thumbnail: nourishSmoothie1,
    images: [nourishSmoothie1, nourishSmoothie2, nourishSmoothie3],
  },

  // fruit
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
    thumbnail: cherryFruit1,
    images: [cherryFruit1, cherryFruit2, cherryFruit3],
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
    thumbnail: strawberryFruit1,
    images: [strawberryFruit1, strawberryFruit2, strawberryFruit3],
  },

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
    price: 4.4,
    description:
      'Hand-picked organic frozen Blueberries certified by the UK soil association. \n We have carefully sourced the best quality Blueberries.  We freeze once perfectly ripe to lock in flavour.\n Perfect for home-made smoothies, breakfast, baking and healthy snacks.',

    ingredients: [{ name: 'Organic Blueberries', amount: 100 }],
    category: 'fruit',
    directions: [
      'Perfect for blending, baking, snacking, sauces, curries, salads and adding to yogurt, cereal and desserts - simply defrost for 30 minutes. For Smoothies blend from frozen.',
    ],
    thumbnail: blueberryFruit1,
    images: [blueberryFruit1, blueberryFruit2, blueberryFruit3],
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
    thumbnail: peachFruit1,
    images: [peachFruit1, peachFruit2, peachFruit3, peachFruit4],
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
    thumbnail: avocadoFruit1,
    images: [avocadoFruit1, avocadoFruit2],
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
    thumbnail: mangoFruit1,
    images: [mangoFruit1, mangoFruit2, mangoFruit3, mangoFruit4],
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
    thumbnail: berryFruit1,
    images: [berryFruit1, berryFruit2, berryFruit3],
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
    thumbnail: orchardFruit1,
    images: [orchardFruit1, orchardFruit2, orchardFruit3],
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
    thumbnail: tropicalFruit1,
    images: [tropicalFruit1, tropicalFruit2, tropicalFruit3],
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
    thumbnail: bananaFruit1,
    images: [bananaFruit1, bananaFruit2, bananaFruit3],
  },

  {
    id: 'fruit12tf',
    name: 'ORGANIC TROPICAL FRUIT',
    price: 4.3,
    description:
      'Handpicked and frozen on the day of harvest to capture all that goodness, our organic frozen fruit is a simple and sustainable way to add a little taste of sunshine to your day. We take time to carefully select and prepare the best, tastiest varieties so you can enjoy at home with no faff and zero waste. Perfect for Blending, Baking, Breakfast and More. \n All our Organic Frozen Fruit offer the ultimate in convenience and nutrition. \n We only use the highest quality ingredients, freshly frozen for maximum nutritional value.',
    ingredients: [
      { name: 'Pineapple', amount: 39 },
      { name: 'Passionfruit', amount: 22 },
      { name: 'Mango', amount: 39 },
    ],
    category: 'fruit',
    directions: [
      'Perfect for blending, baking, snacking, sauces, curries, salads and adding to yogurt, cereal and desserts - simply defrost for 30 minutes. For Smoothies blend from frozen.',
    ],
    thumbnail: tropicalFruit1,
    images: [tropicalFruit1, tropicalFruit2, tropicalFruit3],
  },

  // vegetables
  {
    id: 'veggie1s',
    name: 'ORGANIC SPINACH',
    price: 3.3,
    description:
      'Picked and frozen on the day of harvest to capture all that goodness, our organic frozen vegetables are a sustainable way to add a little taste of sunshine to your day. \n We take time to carefully select and prepare the best and tastiest varieties so you can enjoy at home with no faff and zero waste. Great as a smoothie ingredient, for sautéing or adding to your favourite stir-fry. \n All our Organic Frozen Veg offer the ultimate in convenience and nutrition. We only use the highest quality ingredients, freshly frozen for maximum nutritional value.',
    ingredients: [{ name: 'Spinach', amount: 100 }],
    category: 'vegetables',
    directions: [
      'Blend from frozen. \n Boil from frozen: Place in a saucepan of boiling water. Simmer for 1-2 minutes. Drain and serve.\n Sauté from frozen: Place in pan or wok and sauté for 4 mins on a high heat. Ensure food is cooked until piping hot. \n Season to taste.',
    ],
    thumbnail: spinachVeg1,
    images: [spinachVeg1, spinachVeg2, spinachVeg3],
  },
  {
    id: 'veggie2p',
    name: 'ORGANIC SWEET POTATO',
    price: 3.3,
    description:
      'Picked and frozen on the day of harvest to capture all that goodness, our organic frozen vegetables are a sustainable way to add a little taste of sunshine to your day \n  We take time to carefully select and prepare the best and tastiest varieties so you can enjoy at home with no faff and zero waste. Great as a smoothie ingredient or for simply roasting. \nAll our Organic Frozen Veg offer the ultimate in convenience and nutrition. We only use the highest quality ingredients, freshly frozen for maximum nutritional value.',
    ingredients: [{ name: 'Sweet Potatoe', amount: 100 }],
    category: 'vegetables',
    directions: [
      'Blend from frozen. \n Oven cook from Frozen: 220°C/ Fan 200°C/Gas 7 16-20 mins. Place on a lightly oiled baking tray in the centre of a pre-heated oven for 16-20 minutes. Turn halfway through cooking. Ensure food is cooked until piping hot.\n Season to taste.',
    ],
    thumbnail: potatoeVeg1,
    images: [potatoeVeg1, potatoeVeg2, potatoeVeg3],
  },
  {
    id: 'veggie3pp',
    name: 'ORGANIC PETIT POIS',
    price: 3.3,
    description:
      'Picked and frozen on the day of harvest to capture all that goodness, our organic frozen vegetables are a sustainable way to add a little taste of sunshine to your day \n  We take time to carefully select and prepare the best and tastiest varieties so you can enjoy at home with no faff and zero waste. Great as a smoothie ingredient or for simply roasting. \nAll our Organic Frozen Veg offer the ultimate in convenience and nutrition. We only use the highest quality ingredients, freshly frozen for maximum nutritional value.',
    ingredients: [{ name: 'Petit pois', amount: 100 }],
    category: 'vegetables',
    directions: [
      'Boil from frozen: Place in a saucepan of boiling water. Simmer for 2 minutes. Drain and serve. Ensure food is cooked until piping hot.\n Season to taste.',
    ],
    thumbnail: poisVeg1,
    images: [poisVeg1, poisVeg2, poisVeg3],
  },
  {
    id: 'veggie4cr',
    name: 'ORGANIC CAULIFLOWER RICE',
    price: 3.3,
    description:
      'Picked and frozen on the day of harvest to capture all that goodness, our organic frozen vegetables are a sustainable way to add a little taste of sunshine to your day \n  We take time to carefully select and prepare the best and tastiest varieties so you can enjoy at home with no faff and zero waste. Great as a smoothie ingredient or for simply roasting. \nAll our Organic Frozen Veg offer the ultimate in convenience and nutrition. We only use the highest quality ingredients, freshly frozen for maximum nutritional value.',
    ingredients: [{ name: 'Cauliflower', amount: 100 }],
    category: 'vegetables',
    directions: [
      'Blend from frozen.\n Sauté from frozen: Place in pan or wok and sauté for 4 mins on a high heat. Ensure food is cooked until piping hot.\nSeason to taste.',
    ],
    thumbnail: cauliflowerVeg1,
    images: [cauliflowerVeg1, cauliflowerVeg2, cauliflowerVeg3],
  },
  {
    id: 'veggie5sc',
    name: 'ORGANIC SWEETCORN',
    price: 3.3,
    description:
      'Picked and frozen on the day of harvest to capture all that goodness, our organic frozen vegetables are a sustainable way to add a little taste of sunshine to your day \n  We take time to carefully select and prepare the best and tastiest varieties so you can enjoy at home with no faff and zero waste. Great as a smoothie ingredient or for simply roasting. \nAll our Organic Frozen Veg offer the ultimate in convenience and nutrition. We only use the highest quality ingredients, freshly frozen for maximum nutritional value.',
    ingredients: [{ name: 'Corn', amount: 100 }],
    category: 'vegetables',
    directions: [
      'Boil from frozen: Place in a saucepan of boiling water. Simmer for 2 minutes. Drain and serve. Ensure food is cooked until piping hot.\nSeason to taste.',
    ],
    thumbnail: cornVeg1,
    images: [cornVeg1, cornVeg2, cornVeg3],
  },
];

export default productsData;
