
export type ProjectMedia = {
  url: string;
  aiHint: string;
  type?: 'image' | 'video';
};

export type Project = {
  title: string;
  slug: string;
  category: 'Video Production' | 'Design' | 'Digital Marketing' | 'Showreel';
  tags: string[];
  description: string;
  year?: number;
  client?: string;
  role?: string;
  story?: string;
  process?: string;
  thumbnail: string;
  media: ProjectMedia[];
  btsMedia?: ProjectMedia[];
  youtubeUrl?: string;
  vimeoId?: string;
  filmUrl?: string;
};


export const projects: Project[] = [
  // Showreel
  {
    title: 'Showreel 2024',
    slug: 'showreel-2024',
    category: 'Showreel',
    tags: ['Directing', 'Design', 'Editing'],
    description: 'A collection of our best work in video production, design, and storytelling.',
    role: 'Director, Designer, Editor',
    story: 'This is a fast-paced look at some of our favorite projects, showcasing a range of skills from directing and cinematography to motion graphics and 3D design.',
    thumbnail: 'https://i.ytimg.com/vi/N8hRH3nGn1E/hqdefault.jpg',
    media: [{ url: 'https://i.ytimg.com/vi/N8hRH3nGn1E/hqdefault.jpg', aiHint: 'showreel film' }],
    youtubeUrl: 'https://www.youtube.com/embed/N8hRH3nGn1E?autoplay=1',
  },
  // Video Production
  {
    title: 'Trophy Extra Special Stout',
    slug: 'trophy-extra-special-stout',
    client: 'Trophy Beer (Spec)',
    category: 'Video Production',
    tags: ['Directing', 'Commercial'],
    description: 'A spec commercial for Trophy Extra Special Stout, capturing the spirit of celebration and camaraderie.',
    role: 'Director',
    story: 'This spec ad was created to capture the energetic and celebratory essence of Trophy Extra Special Stout. The goal was to create a visually dynamic piece that felt authentic to the brand\'s target audience, focusing on moments of connection and shared enjoyment.',
    thumbnail: 'https://i.ytimg.com/vi/j9VXRaAILR8/hqdefault.jpg',
    media: [{ url: 'https://i.ytimg.com/vi/j9VXRaAILR8/hqdefault.jpg', aiHint: 'beer commercial' }],
    youtubeUrl: 'https://www.youtube.com/embed/j9VXRaAILR8?autoplay=1',
  },
   {
    title: 'Peak Chocolate, 3-In-1 Family Nourishment',
    slug: 'peak-chocolate-3-in-1-family-nourishment',
    client: 'Peak Nigeria',
    category: 'Video Production',
    tags: ['Directing', 'Commercial'],
    description: 'Hot or Cold, At Work or at School, Enjoy your favourite beverage today and delight your taste buds.',
    role: 'Director',
    story: 'A commercial for Peak Chocolate, highlighting its versatility for the whole family to enjoy, whether hot or cold, at work or at school.',
    thumbnail: 'https://i.ytimg.com/vi/ODb7xM0TuFQ/hqdefault.jpg',
    media: [{ url: 'https://i.ytimg.com/vi/ODb7xM0TuFQ/hqdefault.jpg', aiHint: 'chocolate drink commercial' }],
    youtubeUrl: 'https://www.youtube.com/embed/ODb7xM0TuFQ?autoplay=1',
  },
  {
    title: 'Indomie Half Time',
    slug: 'indomie-half-time',
    client: 'Dufil Prima Food Ltd.',
    category: 'Video Production',
    tags: ['Directing', 'Commercial'],
    description: 'A commercial for Indomie, perfect for a half-time break.',
    role: 'Director',
    story: 'This commercial for Indomie captures the energy and excitement of enjoying a quick, delicious meal during a break.',
    thumbnail: 'https://i.ytimg.com/vi/rAmbeN2qaL0/hqdefault.jpg',
    media: [{ url: 'https://i.ytimg.com/vi/rAmbeN2qaL0/hqdefault.jpg', aiHint: 'instant noodles commercial' }],
    youtubeUrl: 'https://www.youtube.com/embed/rAmbeN2qaL0?autoplay=1',
  },
  {
    title: 'ATUNIDA',
    slug: 'atunida',
    category: 'Video Production',
    tags: ['Web Series', 'DOP'],
    role: 'Director of Photography',
    description: 'A Nollywood web series about a young man who will go to any length to win the heart of his neighbor.',
    story: 'Atúnidá is a nollywood limited web series that follows the story of a young shy man who falls in love with his neighbor and would go to any length to win her heart even if it would cost him his own life.',
    thumbnail: 'https://imgur.com/N7L6dm6.jpeg',
    media: [{ url: 'https://imgur.com/N7L6dm6.jpeg', aiHint: 'nollywood web series' }],
    youtubeUrl: 'https://www.youtube.com/embed/KkKJJ6hfWGc?autoplay=1',
  },
  {
    title: 'SAKOPE (COMPLETE DOSAGE)',
    slug: 'sakope-complete-dosage',
    client: 'Personal Project',
    category: 'Video Production',
    tags: ['Narrative', 'Directing', 'Producing', 'DOP'],
    description: 'An illiterate girl hawking drugs as a professional nurse soon finds her customers falling apart.',
    role: 'Director, Producer, DOP',
    story: 'Malomo, an illiterate girl undergoing training at a local hospital as an auxiliary nurse, leaves because of high handedness, and starts hawking drugs, claiming to be a professional nurse until her customers start falling apart.',
    thumbnail: 'https://imgur.com/iEpNS7H.jpeg',
    media: [{ url: 'https://imgur.com/iEpNS7H.jpeg', aiHint: 'girl hawking drugs' }],
    youtubeUrl: 'https://www.youtube.com/embed/ralH8-n4QKk?autoplay=1',
    filmUrl: 'https://www.youtube.com/watch?v=ralH8-n4QKk'
  },
  {
    title: 'AKITI (MONKEY)',
    slug: 'akiti-monkey',
    client: 'Personal Project',
    category: 'Video Production',
    tags: ['Narrative', 'Directing', 'DOP'],
    description: 'Two delinquent teenagers skip school to watch fight scenes at an abandoned warehouse. They are forced to confront each other in a deadly match that they will forever regret.',
    role: 'Director, DOP',
    story: 'Two delinquent teenagers skip school to watch fight scenes at an abandoned warehouse. They are forced to confront each other in a deadly match that they will forever regret.',
    thumbnail: 'https://imgur.com/u48VF7z.jpeg',
    media: [{ url: 'https://imgur.com/u48VF7z.jpeg', aiHint: 'teenagers fighting' }],
    youtubeUrl: 'https://www.youtube.com/embed/8D3iVPDmasI?autoplay=1',
    filmUrl: 'https://www.youtube.com/watch?v=8D3iVPDmasI'
  },
  {
    title: 'BEFORE SEVEN',
    slug: 'before-seven',
    client: 'Personal Project',
    category: 'Video Production',
    tags: ['Narrative', 'Directing', 'DOP'],
    description: 'A teenage girl made a mistake that made her family rejects her. She\'s racing against time before she makes a decision she would forever regret.',
    role: 'Director, DOP',
    story: 'A teenage girl made a mistake that made her family rejects her. She\'s racing against time before she makes a decision she would forever regret.',
    thumbnail: 'https://imgur.com/USxAmQq.jpeg',
    media: [{ url: 'https://imgur.com/USxAmQq.jpeg', aiHint: 'teenage girl emotional' }],
    youtubeUrl: 'https://www.youtube.com/embed/qnwRZOHADsw?autoplay=1',
    filmUrl: 'https://www.youtube.com/watch?v=qnwRZOHADsw'
  },
  {
    title: 'Badagry Heritage',
    slug: 'badagry-heritage',
    category: 'Video Production',
    tags: ['Documentary', 'Directing', 'History'],
    description: 'A documentary exploring the rich history and cultural heritage of Badagry.',
    role: 'Director',
    story: 'This film delves into the historical significance of Badagry, a coastal town with a profound and complex past, from its role in the slave trade to its vibrant culture today.',
    thumbnail: 'https://imgur.com/3FLoZax.jpeg',
    media: [{ url: 'https://imgur.com/3FLoZax.jpeg', aiHint: 'historical documentary' }],
    youtubeUrl: 'https://www.youtube.com/embed/6cOSPnWh9xQ?autoplay=1',
  },
  {
    title: 'The Samaritan',
    slug: 'the-samaritan',
    category: 'Video Production',
    tags: ['Narrative', 'Directing'],
    description: 'A short film about an act of kindness.',
    role: 'Director',
    story: 'This film explores what it means to be a good samaritan in the modern world.',
    thumbnail: 'https://imgur.com/qdjaTKy.jpeg',
    media: [{ url: 'https://imgur.com/qdjaTKy.jpeg', aiHint: 'dramatic film poster' }],
    youtubeUrl: 'https://www.youtube.com/embed/bRMvni0znGI?autoplay=1',
  },
  {
    title: 'CBN Revolution',
    slug: 'cbn-revolution',
    client: 'Documentary',
    category: 'Video Production',
    tags: ['Documentary', 'Directing'],
    description: 'A documentary about wheat production in Nigeria.',
    role: 'Director',
    story: 'This documentary explores the revolution of wheat production in Nigeria, highlighting the stories of the farmers and the impact on the national economy.',
    thumbnail: 'https://i.ytimg.com/vi/-2UfFpUNPnE/hqdefault.jpg',
    media: [{ url: 'https://i.ytimg.com/vi/-2UfFpUNPnE/hqdefault.jpg', aiHint: 'wheat farm documentary' }],
    youtubeUrl: 'https://www.youtube.com/embed/-2UfFpUNPnE?autoplay=1',
  },
  // Design
  {
    title: 'Zoropay Explainer animation Video',
    slug: 'zoropay-explainer-animation-video',
    category: 'Design',
    tags: ['Animation', 'Explainer Video'],
    description: 'An explainer animation video created for Zoropay.',
    thumbnail: 'https://i.ytimg.com/vi/PdmlejkTy50/hqdefault.jpg',
    media: [{ url: 'https://i.ytimg.com/vi/PdmlejkTy50/hqdefault.jpg', aiHint: 'explainer video animation' }],
    youtubeUrl: 'https://www.youtube.com/embed/PdmlejkTy50?autoplay=1',
    story: 'This is an explainer animation video created for the fintech company Zoropay, demonstrating how their service works in a clear and engaging way.',
    role: 'Motion Designer',
    client: 'Zoropay'
  },
  {
    title: 'ATIKO film OPENING TITLE SEQUENCE',
    slug: 'atiko-film-opening-title-sequence',
    category: 'Design',
    tags: ['Motion Graphics', 'Title Sequence'],
    description: 'An opening title sequence for the film "ATIKO".',
    thumbnail: 'https://i.ytimg.com/vi/eS9xn18Lwxw/hqdefault.jpg',
    media: [{ url: 'https://i.ytimg.com/vi/eS9xn18Lwxw/hqdefault.jpg', aiHint: 'film title sequence' }],
    youtubeUrl: 'https://www.youtube.com/embed/eS9xn18Lwxw?autoplay=1',
    role: 'Motion Graphics Designer',
    story: 'This project involved creating a dynamic and atmospheric opening title sequence for the film "ATIKO", setting the tone for the story to come.'
  },
    // Digital Marketing
  {
    title: 'Social Media Campaign: TechForward',
    slug: 'social-media-campaign-techforward',
    category: 'Digital Marketing',
    tags: ['Social Media', 'Content Creation'],
    description: 'A comprehensive social media campaign for a new tech product launch, resulting in a 300% increase in engagement.',
    thumbnail: 'https://picsum.photos/seed/marketing1/800/600',
    media: [{ url: 'https://picsum.photos/seed/marketing1/1920/1080', aiHint: 'social media analytics', type: 'image' }],
    story: 'We developed and executed a multi-platform social media strategy for the launch of TechForward\'s new app. The campaign involved creating engaging video and image content, running targeted ad campaigns, and managing community engagement, leading to a significant increase in brand awareness and app downloads.',
    role: 'Digital Marketing Strategist',
    client: 'TechForward Inc.'
  },
  {
    title: 'SEO Strategy for E-commerce Store',
    slug: 'seo-strategy-ecommerce',
    category: 'Digital Marketing',
    tags: ['SEO', 'Content Strategy'],
    description: 'An SEO overhaul for an online retailer, leading to a 50% increase in organic traffic and a 20% increase in sales.',
    thumbnail: 'https://picsum.photos/seed/marketing2/800/600',
    media: [{ url: 'https://picsum.photos/seed/marketing2/1920/1080', aiHint: 'search engine results page', type: 'image' }],
    story: 'Our team conducted a thorough SEO audit and implemented a content-driven strategy to improve the organic search ranking of a major e-commerce store. This involved keyword research, on-page optimization, technical SEO improvements, and creating high-quality blog content to attract and convert customers.',
    role: 'SEO Specialist',
    client: 'Fashionista Finds'
  },
];
