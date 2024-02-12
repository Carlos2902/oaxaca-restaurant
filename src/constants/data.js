import images from './images';

const wines = [
  {
    title: 'Divino Espiritu',
    price: '$56',
    tags: 'MX | Bottle',
  },
  {
    title: 'Aguila Dorada',
    price: '$59',
    tags: 'MX | Bottle',
  },
  {
    title: 'Fuego Sagrado',
    price: '$44',
    tags: 'MX | 750 ml',
  },
  {
    title: 'Lion Phale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'American Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Tropical Sunset',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Citrus Bliss",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Midnight Martini',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Berry Breeze',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Smoky Sazerac',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
