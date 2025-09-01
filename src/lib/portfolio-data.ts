
export type ProjectMedia = {
  url: string;
  aiHint: string;
  type?: 'image' | 'video';
};

export type Project = {
  title: string;
  category: 'Film' | 'Commercial' | 'Design' | 'Drone' | 'Photography' | 'Showreel';
  tags: string[];
  description: string;
  year?: number;
  client?: string;
  role?: string;
  story?: string;
  thumbnail: string;
  media: ProjectMedia[];
  btsMedia?: ProjectMedia[];
  youtubeUrl?: string;
  vimeoId?: string;
};


export const projects: Project[] = [
  // Showreel
  {
    title: 'Showreel 2024',
    category: 'Showreel',
    tags: ['Directing', 'Design', 'Editing'],
    description: 'A collection of my best work in film, design, and storytelling.',
    role: 'Director, Designer, Editor',
    story: 'This is a fast-paced look at some of my favorite projects, showcasing a range of skills from directing and cinematography to motion graphics and 3D design.',
    thumbnail: 'https://i.ytimg.com/vi/N8hRH3nGn1E/hqdefault.jpg',
    media: [{ url: 'https://i.ytimg.com/vi/N8hRH3nGn1E/hqdefault.jpg', aiHint: 'showreel film' }],
    youtubeUrl: 'https://www.youtube.com/embed/N8hRH3nGn1E?autoplay=1',
    btsMedia: [
      { url: 'https://picsum.photos/seed/bts1-1/600/400', aiHint: 'film set camera', type: 'image' },
      { url: 'https://picsum.photos/seed/bts1-2/600/400', aiHint: 'director chair', type: 'image' },
      { url: 'https://picsum.photos/seed/bts1-3/600/400', aiHint: 'lighting setup', type: 'image' },
    ],
  },
  // Commercials
  {
    title: 'Trophy Extra Special Stout',
    client: 'Trophy Beer (Spec)',
    category: 'Commercial',
    tags: ['Directing', 'Commercial'],
    description: 'A spec commercial for Trophy Extra Special Stout, capturing the spirit of celebration and camaraderie.',
    role: 'Director',
    story: 'This spec ad was created to capture the energetic and celebratory essence of Trophy Extra Special Stout. The goal was to create a visually dynamic piece that felt authentic to the brand\'s target audience, focusing on moments of connection and shared enjoyment.',
    thumbnail: 'https://i.ytimg.com/vi/j9VXRaAILR8/hqdefault.jpg',
    media: [{ url: 'https://i.ytimg.com/vi/j9VXRaAILR8/hqdefault.jpg', aiHint: 'beer commercial' }],
    youtubeUrl: 'https://www.youtube.com/embed/j9VXRaAILR8?autoplay=1',
    btsMedia: [
      { url: 'https://picsum.photos/seed/bts2-1/600/400', aiHint: 'beer product shot', type: 'image' },
      { url: 'https://picsum.photos/seed/bts2-2/600/400', aiHint: 'behind the scenes commercial', type: 'image' },
    ],
  },
  {
    title: 'Project Alpha',
    year: 2018,
    category: 'Commercial',
    tags: ['Directing', 'Commercial'],
    role: 'Director',
    description: 'A fast-paced spot for a new tech product, blending slick motion graphics with live-action shots to create a futuristic feel.',
    thumbnail: 'https://i.imgur.com/N7L6dm6.jpeg',
    media: [{ url: 'https://i.imgur.com/N7L6dm6.jpeg', aiHint: 'tech commercial poster' }],
    vimeoId: '902839943',
  },
  // Films
  {
    title: 'SAKOPE (COMPLETE DOSAGE)',
    client: 'Personal Project',
    category: 'Film',
    tags: ['Narrative', 'Directing', 'Producing', 'DOP'],
    description: 'An illiterate girl hawking drugs as a professional nurse soon finds her customers falling apart.',
    role: 'Director, Producer, DOP',
    story: 'Malomo, an illiterate girl undergoing training at a local hospital as an auxiliary nurse, leaves because of high handedness, and starts hawking drugs, claiming to be a professional nurse until her customers start falling apart.',
    thumbnail: 'https://i.ytimg.com/vi/ralH8-n4QKk/hqdefault.jpg',
    media: [{ url: 'https://i.ytimg.com/vi/ralH8-n4QKk/hqdefault.jpg', aiHint: 'girl hawking drugs' }],
    youtubeUrl: 'https://www.youtube.com/embed/ralH8-n4QKk?autoplay=1',
    btsMedia: [
      { url: 'https://picsum.photos/seed/bts3-1/600/400', aiHint: 'short film set', type: 'image' },
      { url: 'https://picsum.photos/seed/bts3-2/600/400', aiHint: 'actress portrait', type: 'image' },
      { url: 'https://picsum.photos/seed/bts3-3/600/400', aiHint: 'camera on tripod', type: 'image' },
    ],
  },
  {
    title: 'AKITI (MONKEY)',
    client: 'Personal Project',
    category: 'Film',
    tags: ['Narrative', 'Directing', 'DOP'],
    description: 'Two delinquent teenagers skip school to watch fight scenes at an abandoned warehouse. They are forced to confront each other in a deadly match that they will forever regret.',
    role: 'Director, DOP',
    story: 'Two delinquent teenagers skip school to watch fight scenes at an abandoned warehouse. They are forced to confront each other in a deadly match that they will forever regret.',
    thumbnail: 'https://i.ytimg.com/vi/8D3iVPDmasI/hqdefault.jpg',
    media: [{ url: 'https://i.ytimg.com/vi/8D3iVPDmasI/hqdefault.jpg', aiHint: 'teenagers fighting' }],
    youtubeUrl: 'https://www.youtube.com/embed/8D3iVPDmasI?autoplay=1',
    btsMedia: [
      { url: 'https://picsum.photos/seed/bts-akiti1/600/400', aiHint: 'warehouse location', type: 'image' },
      { url: 'https://picsum.photos/seed/bts-akiti2/600/400', aiHint: 'fight choreography', type: 'image' },
    ]
  },
  {
    title: 'BEFORE SEVEN',
    client: 'Personal Project',
    category: 'Film',
    tags: ['Narrative', 'Directing', 'DOP'],
    description: 'A teenage girl made a mistake that made her family rejects her. She\'s racing against time before she makes a decision she would forever regret.',
    role: 'Director, DOP',
    story: 'A teenage girl made a mistake that made her family rejects her. She\'s racing against time before she makes a decision she would forever regret.',
    thumbnail: 'https://i.ytimg.com/vi/qnwRZOHADsw/hqdefault.jpg',
    media: [{ url: 'https://i.ytimg.com/vi/qnwRZOHADsw/hqdefault.jpg', aiHint: 'teenage girl emotional' }],
    youtubeUrl: 'https://www.youtube.com/embed/qnwRZOHADsw?autoplay=1',
    btsMedia: [
      { url: 'https://picsum.photos/seed/bts-beforeseven1/600/400', aiHint: 'dramatic lighting setup', type: 'image' },
    ]
  },
  {
    title: 'CBN Revolution',
    client: 'Documentary',
    category: 'Film',
    tags: ['Documentary', 'Directing'],
    description: 'A documentary about wheat production in Nigeria.',
    role: 'Director',
    story: 'This documentary explores the revolution of wheat production in Nigeria, highlighting the stories of the farmers and the impact on the national economy.',
    thumbnail: 'https://i.ytimg.com/vi/-2UfFpUNPnE/hqdefault.jpg',
    media: [{ url: 'https://i.ytimg.com/vi/-2UfFpUNPnE/hqdefault.jpg', aiHint: 'wheat farm documentary' }],
    youtubeUrl: 'https://www.youtube.com/embed/-2UfFpUNPnE?autoplay=1',
    btsMedia: [
      { url: 'https://picsum.photos/seed/bts-cbn1/600/400', aiHint: 'interview setup', type: 'image' },
      { url: 'https://picsum.photos/seed/bts-cbn2/600/400', aiHint: 'drone shot wheat field', type: 'image' },
    ]
  },
  {
    title: 'Solitude',
    year: 2023,
    category: 'Film',
    tags: ['Narrative', 'Directing', 'Writing', 'Editing'],
    role: 'Writer, Director, Editor',
    description: 'In a world silenced by a mysterious event, a lone survivor discovers he may not be truly alone.',
    thumbnail: 'https://i.imgur.com/1g9YgqV.jpeg',
    media: [{ url: 'https://i.imgur.com/1g9YgqV.jpeg', aiHint: 'dramatic movie poster' }],
    vimeoId: '902839943',
  },
  // Design
  {
    title: 'Project Phoenix',
    category: 'Design',
    tags: ['Brand Identity'],
    description: 'A complete brand identity system for a tech startup, focusing on a modern, scalable logo and visual language.',
    thumbnail: 'https://picsum.photos/seed/design1/800/600',
    media: [{ url: 'https://picsum.photos/seed/design1/1920/1080', aiHint: 'modern logo design', type: 'image' }],
  },
  {
    title: 'Quantum Leap',
    category: 'Design',
    tags: ['Motion Graphics'],
    description: 'An abstract title sequence using dynamic motion graphics to visualize complex scientific concepts in an engaging way.',
    thumbnail: 'https://picsum.photos/seed/design2/800/600',
    media: [{ url: 'https://picsum.photos/seed/design2/800/600', aiHint: 'abstract motion graphics', type: 'video' }],
    vimeoId: '902839943',
  },
  {
    title: 'Neo-Genesis',
    category: 'Design',
    tags: ['3D Illustration'],
    description: 'A series of futuristic 3D illustrations for an editorial piece on artificial intelligence and its impact on society.',
    thumbnail: 'https://picsum.photos/seed/design3/800/600',
    media: [{ url: 'https://picsum.photos/seed/design3/1920/1080', aiHint: 'futuristic 3d render', type: 'image' }],
  },
  // Drone
  {
    title: 'Coastal Serenity',
    category: 'Drone',
    tags: ['Videography', 'California'],
    description: 'A breathtaking flight over the cliffs of Big Sur, capturing the raw power and beauty of the Pacific coastline.',
    thumbnail: 'https://picsum.photos/seed/drone1/800/600',
    media: [{ url: 'https://picsum.photos/seed/drone1/800/600', aiHint: 'drone coastline video', type: 'video' }],
    vimeoId: '902839943',
  },
  // Photography
  {
    title: 'Urban Geometry',
    category: 'Photography',
    tags: ['Architecture', 'Chicago'],
    description: 'A top-down photograph of Chicago\'s iconic architecture, highlighting the geometric patterns of the city.',
    thumbnail: 'https://picsum.photos/seed/drone2/800/600',
    media: [{ url: 'https://picsum.photos/seed/drone2/1920/1080', aiHint: 'drone city architecture', type: 'image' }],
  },
];
