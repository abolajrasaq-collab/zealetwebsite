
export type Project = {
  title: string;
  client: string;
  category: string;
  type: 'image' | 'video';
  description: string;
  role: string;
  story: string;
  media: { url: string, aiHint: string }[];
  btsMedia: { url: string, aiHint: string, type: 'image' | 'video' }[];
  youtubeUrl?: string;
};

export const projects: Project[] = [
  {
    title: 'Showreel 2024',
    client: 'Personal',
    category: 'Showreel',
    type: 'video',
    description: 'A collection of my best work in film, design, and storytelling.',
    role: 'Director, Designer, Editor',
    story: 'This is a fast-paced look at some of my favorite projects, showcasing a range of skills from directing and cinematography to motion graphics and 3D design.',
    media: [
        { url: 'https://i.ytimg.com/vi/N8hRH3nGn1E/hqdefault.jpg', aiHint: 'showreel film' },
    ],
    youtubeUrl: 'https://www.youtube.com/embed/N8hRH3nGn1E?autoplay=1',
    btsMedia: [
      { url: 'https://picsum.photos/seed/bts1-1/600/400', aiHint: 'film set camera', type: 'image' },
      { url: 'https://picsum.photos/seed/bts1-2/600/400', aiHint: 'director chair', type: 'image' },
      { url: 'https://picsum.photos/seed/bts1-3/600/400', aiHint: 'lighting setup', type: 'image' },
    ],
  },
  {
    title: 'Trophy Extra Special Stout',
    client: 'Trophy Beer (Spec)',
    category: 'Commercial',
    type: 'video',
    description: 'A spec commercial for Trophy Extra Special Stout, capturing the spirit of celebration and camaraderie.',
    role: 'Director',
    story: 'This spec ad was created to capture the energetic and celebratory essence of Trophy Extra Special Stout. The goal was to create a visually dynamic piece that felt authentic to the brand\'s target audience, focusing on moments of connection and shared enjoyment.',
    media: [
        { url: 'https://i.ytimg.com/vi/j9VXRaAILR8/hqdefault.jpg', aiHint: 'beer commercial' },
    ],
    youtubeUrl: 'https://www.youtube.com/embed/j9VXRaAILR8?autoplay=1',
    btsMedia: [
      { url: 'https://picsum.photos/seed/bts2-1/600/400', aiHint: 'beer product shot', type: 'image' },
      { url: 'https://picsum.photos/seed/bts2-2/600/400', aiHint: 'behind the scenes commercial', type: 'image' },
    ],
  },
   {
    title: 'SAKOPE (COMPLETE DOSAGE)',
    client: 'Personal Project',
    category: 'Narrative Short Film',
    type: 'video',
    description: 'An illiterate girl hawking drugs as a professional nurse soon finds her customers falling apart.',
    role: 'Director, Producer, DOP',
    story: 'Malomo, an illiterate girl undergoing training at a local hospital as an auxiliary nurse, leaves because of high handedness, and starts hawking drugs, claiming to be a professional nurse until her customers start falling apart.',
    media: [
      { url: 'https://i.ytimg.com/vi/ralH8-n4QKk/hqdefault.jpg', aiHint: 'girl hawking drugs' },
    ],
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
    category: 'Narrative Short Film',
    type: 'video',
    description: 'Two delinquent teenagers skip school to watch fight scenes at an abandoned warehouse. They are forced to confront each other in a deadly match that they will forever regret.',
    role: 'Director, DOP',
    story: 'Two delinquent teenagers skip school to watch fight scenes at an abandoned warehouse. They are forced to confront each other in a deadly match that they will forever regret.',
    media: [
      { url: 'https://i.ytimg.com/vi/8D3iVPDmasI/hqdefault.jpg', aiHint: 'teenagers fighting' },
    ],
    youtubeUrl: 'https://www.youtube.com/embed/8D3iVPDmasI?autoplay=1',
    btsMedia: [
        { url: 'https://picsum.photos/seed/bts-akiti1/600/400', aiHint: 'warehouse location', type: 'image' },
        { url: 'https://picsum.photos/seed/bts-akiti2/600/400', aiHint: 'fight choreography', type: 'image' },
    ]
  },
  {
    title: 'BEFORE SEVEN',
    client: 'Personal Project',
    category: 'Narrative Short Film',
    type: 'video',
    description: 'A teenage girl made a mistake that made her family rejects her. She\'s racing against time before she makes a decision she would forever regret.',
    role: 'Director, DOP',
    story: 'A teenage girl made a mistake that made her family rejects her. She\'s racing against time before she makes a decision she would forever regret.',
    media: [
      { url: 'https://i.ytimg.com/vi/qnwRZOHADsw/hqdefault.jpg', aiHint: 'teenage girl emotional' },
    ],
    youtubeUrl: 'https://www.youtube.com/embed/qnwRZOHADsw?autoplay=1',
    btsMedia: [
        { url: 'https://picsum.photos/seed/bts-beforeseven1/600/400', aiHint: 'dramatic lighting setup', type: 'image' },
    ]
  },
  {
    title: 'CBN Revolution',
    client: 'Documentary',
    category: 'Documentary',
    type: 'video',
    description: 'A documentary about wheat production in Nigeria.',
    role: 'Director',
    story: 'This documentary explores the revolution of wheat production in Nigeria, highlighting the stories of the farmers and the impact on the national economy.',
    media: [
        { url: 'https://i.ytimg.com/vi/-2UfFpUNPnE/hqdefault.jpg', aiHint: 'wheat farm documentary' },
    ],
    youtubeUrl: 'https://www.youtube.com/embed/-2UfFpUNPnE?autoplay=1',
    btsMedia: [
        { url: 'https://picsum.photos/seed/bts-cbn1/600/400', aiHint: 'interview setup', type: 'image' },
        { url: 'https://picsum.photos/seed/bts-cbn2/600/400', aiHint: 'drone shot wheat field', type: 'image' },
    ]
  },
];
