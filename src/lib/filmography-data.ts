
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
    poster: 'https://i.imgur.com/1g9YgqV.jpeg',
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
    poster: 'https://i.imgur.com/u48VF7z.jpeg',
    aiHint: 'sports commercial poster',
    vimeoId: '902839943',
  },
  {
    title: 'City Lights',
    year: 2021,
    type: 'Music Video',
    role: 'Director',
    synopsis: 'A visually rich music video for an indie-pop artist. The video follows a couple through a dreamlike, neon-lit cityscape over the course of one night.',
    poster: 'https://i.imgur.com/iEpNS7H.jpeg',
    aiHint: 'neon music video',
    vimeoId: '902839943',
  },
  {
    title: 'The Artisan',
    year: 2020,
    type: 'Documentary',
    role: 'Director, Producer',
    synopsis: 'A short documentary profiling a master woodworker who has dedicated his life to a fading craft. The film is an intimate look at skill, passion, and legacy.',
    poster: 'https://i.imgur.com/USxAmQq.jpeg',
    aiHint: 'documentary film poster',
    vimeoId: '902839943',
    filmUrl: '#',
  },
  {
    title: 'Echoes',
    year: 2019,
    type: 'Narrative Short',
    role: 'Writer, Director',
    synopsis: 'A haunting tale of memory and loss, where a man is forced to confront his past through a series of fragmented dreams.',
    poster: 'https://i.imgur.com/3FLoZax.jpeg',
    aiHint: 'mystery film poster',
    vimeoId: '902839943',
  },
  {
    title: 'Project Alpha',
    year: 2018,
    type: 'Commercial',
    role: 'Director',
    synopsis: 'A fast-paced spot for a new tech product, blending slick motion graphics with live-action shots to create a futuristic feel.',
    poster: 'https://i.imgur.com/N7L6dm6.jpeg',
    aiHint: 'tech commercial poster',
    vimeoId: '902839943',
  },
  {
    title: 'Wanderer',
    year: 2017,
    type: 'Music Video',
    role: 'Director, Editor',
    synopsis: 'A folk music video that follows a lone traveler through stunning, remote landscapes, capturing a sense of freedom and introspection.',
    poster: 'https://i.imgur.com/qdjaTKy.jpeg',
    aiHint: 'folk music video poster',
    vimeoId: '902839943',
  },
];
