const SELECTIONS = [
  {
    kind: 'filter',
    options: ['All', 'Smoothies', 'Fruit', 'Organic Vegetables'],
    values: ['', 'smoothies', 'fruit', 'vegetables'],
    defaultValue: 'All',
  },
  {
    kind: 'sort',
    options: [
      'Not Set',
      'Alphabetically, A to Z',
      'Alphabetically, Z to A',
      'Price, Low to High',
      'Price, High to Low',
    ],
    values: ['', 'AtoZ', 'ZtoA', 'LtoH', 'HtoL'],
    defaultValue: 'Not Set',
  },
];

export default SELECTIONS;
