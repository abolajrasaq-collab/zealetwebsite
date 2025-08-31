export type DroneWork = {
  title: string;
  type: 'image' | 'video';
  location: string;
  thumbnail: string;
  aiHint: string;
  mediaUrl: string; // URL for image or Vimeo/YouTube embed
};

export const droneWork: DroneWork[] = [
  {
    title: 'Coastal Serenity',
    type: 'video',
    location: 'Big Sur, California',
    thumbnail: 'https://picsum.photos/seed/drone1/800/600',
    aiHint: 'drone coastline video',
    mediaUrl: 'https://player.vimeo.com/video/902839943?autoplay=1',
  },
  {
    title: 'Urban Geometry',
    type: 'image',
    location: 'Chicago, Illinois',
    thumbnail: 'https://picsum.photos/seed/drone2/800/600',
    aiHint: 'drone city architecture',
    mediaUrl: 'https://picsum.photos/seed/drone2/1920/1080',
  },
  {
    title: 'Forest Canopy',
    type: 'image',
    location: 'Amazon Rainforest, Brazil',
    thumbnail: 'https://picsum.photos/seed/drone3/800/600',
    aiHint: 'drone forest canopy',
    mediaUrl: 'https://picsum.photos/seed/drone3/1920/1080',
  },
  {
    title: 'Desert Dunes',
    type: 'video',
    location: 'Sahara Desert, Morocco',
    thumbnail: 'https://picsum.photos/seed/drone4/800/600',
    aiHint: 'drone desert video',
    mediaUrl: 'https://player.vimeo.com/video/902839943?autoplay=1',
  },
  {
    title: 'Mountain Majesty',
    type: 'image',
    location: 'The Alps, Switzerland',
    thumbnail: 'https://picsum.photos/seed/drone5/800/600',
    aiHint: 'drone mountain peak',
    mediaUrl: 'https://picsum.photos/seed/drone5/1920/1080',
  },
  {
    title: 'Island Paradise',
    type: 'image',
    location: 'Maldives',
    thumbnail: 'https://picsum.photos/seed/drone6/800/600',
    aiHint: 'drone tropical island',
    mediaUrl: 'https://picsum.photos/seed/drone6/1920/1080',
  },
];
