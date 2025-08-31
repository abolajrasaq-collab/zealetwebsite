export type DesignWork = {
  title: string;
  type: 'image' | 'video';
  category: string;
  description: string;
  thumbnail: string;
  aiHint: string;
  mediaUrl: string; // URL for image or Vimeo/YouTube embed
};

export const designWork: DesignWork[] = [
  {
    title: 'Project Phoenix',
    type: 'image',
    category: 'Brand Identity',
    description: 'A complete brand identity system for a tech startup, focusing on a modern, scalable logo and visual language.',
    thumbnail: 'https://picsum.photos/seed/design1/800/600',
    aiHint: 'modern logo design',
    mediaUrl: 'https://picsum.photos/seed/design1/1920/1080',
  },
  {
    title: 'Quantum Leap',
    type: 'video',
    category: 'Motion Graphics',
    description: 'An abstract title sequence using dynamic motion graphics to visualize complex scientific concepts in an engaging way.',
    thumbnail: 'https://picsum.photos/seed/design2/800/600',
    aiHint: 'abstract motion graphics',
    mediaUrl: 'https://player.vimeo.com/video/902839943?autoplay=1',
  },
  {
    title: 'Neo-Genesis',
    type: 'image',
    category: '3D Illustration',
    description: 'A series of futuristic 3D illustrations for an editorial piece on artificial intelligence and its impact on society.',
    thumbnail: 'https://picsum.photos/seed/design3/800/600',
    aiHint: 'futuristic 3d render',
    mediaUrl: 'https://picsum.photos/seed/design3/1920/1080',
  },
  {
    title: 'Connect App',
    type: 'image',
    category: 'UI/UX Design',
    description: 'A full UI/UX design process for a new social networking app, from wireframes and user flows to a polished high-fidelity prototype.',
    thumbnail: 'https://picsum.photos/seed/design4/800/600',
    aiHint: 'mobile app interface',
    mediaUrl: 'https://picsum.photos/seed/design4/1920/1080',
  },
  {
    title: 'Heritage Brand',
    type: 'image',
    category: 'Packaging Design',
    description: 'Luxury packaging design for a heritage brand, combining traditional motifs with modern minimalism to appeal to a new generation.',
    thumbnail: 'https://picsum.photos/seed/design5/800/600',
    aiHint: 'luxury product packaging',
    mediaUrl: 'https://picsum.photos/seed/design5/1920/1080',
  },
  {
    title: 'Kinetic Typography',
    type: 'video',
    category: 'Animation',
    description: 'A dynamic kinetic typography piece created for a conference opener, bringing a powerful speech to life through animated text.',
    thumbnail: 'https://picsum.photos/seed/design6/800/600',
    aiHint: 'kinetic typography animation',
    mediaUrl: 'https://player.vimeo.com/video/902839943?autoplay=1',
  },
];
