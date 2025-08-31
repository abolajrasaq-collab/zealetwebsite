
export type FilmProject = {
  title: string;
  year: number;
  type: 'Narrative Short' | 'Commercial' | 'Music Video' | 'Documentary';
  role: string;
  synopsis: string;
  poster: string;
  aiHint: string;
  vimeoId: string;
  filmUrl?: string;
};

export const filmProjects: FilmProject[] = [
  {
    title: 'Solitude',
    year: 2023,
    type: 'Narrative Short',
    role: 'Writer, Director, Editor',
    synopsis: 'In a world silenced by a mysterious event, a lone survivor discovers he may not be truly alone. A story about connection in the face of absolute isolation.',
    poster: 'https://picsum.photos/seed/film1/500/750',
    aiHint: 'dramatic movie poster',
    vimeoId: '902839943',
    filmUrl: '#',
  },
  {
    title: 'Momentum',
    year: 2022,
    type: 'Commercial',
    role: 'Director, DOP',
    synopsis: 'A high-energy commercial for a new sports drink, capturing athletes pushing their limits in urban landscapes. The piece focuses on dynamic movement and vibrant visuals.',
    poster: 'https://picsum.photos/seed/film2/500/750',
    aiHint: 'sports commercial poster',
    vimeoId: '902839943',
  },
  {
    title: 'City Lights',
    year: 2021,
    type: 'Music Video',
    role: 'Director',
    synopsis: 'A visually rich music video for an indie-pop artist. The video follows a couple through a dreamlike, neon-lit cityscape over the course of one night.',
    poster: 'https://picsum.photos/seed/film3/500/750',
    aiHint: 'neon music video',
    vimeoId: '902839943',
  },
  {
    title: 'The Artisan',
    year: 2020,
    type: 'Documentary',
    role: 'Director, Producer',
    synopsis: 'A short documentary profiling a master woodworker who has dedicated his life to a fading craft. The film is an intimate look at skill, passion, and legacy.',
    poster: 'https://picsum.photos/seed/film4/500/750',
    aiHint: 'documentary film poster',
    vimeoId: '902839943',
    filmUrl: '#',
  },
];
