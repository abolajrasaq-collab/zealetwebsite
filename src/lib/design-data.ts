export type DesignWork = {
  title: string;
  type: 'image' | 'video';
  category: string;
  thumbnail: string;
  aiHint: string;
  mediaUrl: string; // URL for image or Vimeo/YouTube embed
};

export const designWork: DesignWork[] = [
  {
    title: 'Project Phoenix',
    type: 'image',
    category: 'Brand Identity',
    thumbnail: 'https://picsum.photos/seed/design1/800/600',
    aiHint: 'modern logo design',
    mediaUrl: 'https://picsum.photos/seed/design1/1920/1080',
  },
  {
    title: 'Quantum Leap',
    type: 'video',
    category: 'Motion Graphics',
    thumbnail: 'https://picsum.photos/seed/design2/800/600',
    aiHint: 'abstract motion graphics',
    mediaUrl: 'https://player.vimeo.com/video/902839943?autoplay=1',
  },
  {
    title: 'Neo-Genesis',
    type: 'image',
    category: '3D Illustration',
    thumbnail: 'https://picsum.photos/seed/design3/800/600',
    aiHint: 'futuristic 3d render',
    mediaUrl: 'https://picsum.photos/seed/design3/1920/1080',
  },
  {
    title: 'Connect App',
    type: 'image',
    category: 'UI/UX Design',
    thumbnail: 'https://picsum.photos/seed/design4/800/600',
    aiHint: 'mobile app interface',
    mediaUrl: 'https://picsum.photos/seed/design4/1920/1080',
  },
  {
    title: 'Heritage Brand',
    type: 'image',
    category: 'Packaging Design',
    thumbnail: 'https://picsum.photos/seed/design5/800/600',
    aiHint: 'luxury product packaging',
    mediaUrl: 'https://picsum.photos/seed/design5/1920/1080',
  },
  {
    title: 'Kinetic Typography',
    type: 'video',
    category: 'Animation',
    thumbnail: 'https://picsum.photos/seed/design6/800/600',
    aiHint: 'kinetic typography animation',
    mediaUrl: 'https://player.vimeo.com/video/902839943?autoplay=1',
  },
];
