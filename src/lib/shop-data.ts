
export type Product = {
  name: string;
  slug: string;
  category: string;
  price: number;
  description: string;
  details: string[];
  image: string;
  aiHint: string;
};

export const products: Product[] = [
  {
    name: 'Framed Cityscape Print',
    slug: 'framed-cityscape-print',
    category: 'Wall Art',
    price: 120.00,
    description: 'A stunning, high-quality print of an urban skyline at dusk, captured with a professional drone. Perfect for any modern home or office.',
    details: [
      'Giclée print on archival-quality paper',
      'Solid wood frame with a black matte finish',
      'Anti-glare acrylic glass',
      'Dimensions: 24" x 36" (61cm x 91cm)',
    ],
    image: 'https://picsum.photos/seed/shop1/800/800',
    aiHint: 'framed photo wall',
  },
  {
    name: 'The Creative Eye',
    slug: 'the-creative-eye-book',
    category: 'Books',
    price: 45.00,
    description: 'A hardcover coffee table book showcasing a decade of my best photographic work, from landscapes to portraits. Includes notes and stories behind the shots.',
    details: [
      'Hardcover with dust jacket',
      '180 pages on premium matte paper',
      'Offset-printed for rich color reproduction',
      'Dimensions: 10" x 12" (25cm x 30cm)',
    ],
    image: 'https://picsum.photos/seed/shop2/800/800',
    aiHint: 'coffee table book',
  },
  {
    name: 'Filmmaker\'s Notebook Set',
    slug: 'filmmakers-notebook-set',
    category: 'Gear',
    price: 35.00,
    description: 'A set of three pocket-sized notebooks, perfect for storyboarding, shot lists, and jotting down ideas on the go. Each cover features a unique design.',
    details: [
      'Set of 3 notebooks (lined, grid, blank)',
      'Durable soft-touch cover',
      '100gsm acid-free paper',
      'Dimensions: 3.5" x 5.5" (9cm x 14cm)',
    ],
    image: 'https://picsum.photos/seed/shop3/800/800',
    aiHint: 'notebooks pens',
  },
  {
    name: 'Director\'s Cut T-Shirt',
    slug: 'directors-cut-t-shirt',
    category: 'Apparel',
    price: 28.00,
    description: 'A comfortable, high-quality cotton t-shirt with a minimalist "Director\'s Cut" graphic. A subtle nod for fellow film lovers.',
    details: [
      '100% combed and ring-spun cotton',
      'Unisex sizing',
      'Pre-shrunk fabric',
      'Available in Black and White',
    ],
    image: 'https://picsum.photos/seed/shop4/800/800',
    aiHint: 't-shirt graphic design',
  },
];
