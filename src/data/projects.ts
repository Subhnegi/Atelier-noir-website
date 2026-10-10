export type ProjectCategory = 'Architecture' | 'Interiors' | 'Spatial Planning';

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  sector: string; // e.g., Residential, Hospitality
  location: string;
  year: number;
  overview: string;
  concept: string;
  materialPalette: string;
  heroImage: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: 'the-courtyard-house',
    title: 'The Courtyard House',
    category: 'Architecture',
    sector: 'Residential',
    location: 'Kyoto, Japan',
    year: 2023,
    overview: 'A tranquil residential project centered around a lush internal courtyard, maximizing natural light while preserving absolute privacy.',
    concept: 'The design blurs the boundary between indoor and outdoor living. By organizing the program around a central void, every room benefits from cross-ventilation and shifting patterns of daylight throughout the seasons.',
    materialPalette: 'Board-formed concrete, warm cedar, hand-troweled plaster, and subtle brass accents.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&q=80'
    ]
  },
  {
    slug: 'quiet-form-residence',
    title: 'Quiet Form Residence',
    category: 'Interiors',
    sector: 'Residential',
    location: 'Copenhagen, Denmark',
    year: 2022,
    overview: 'A complete interior renovation of a historic apartment, prioritizing restraint, tactile materials, and effortless flow.',
    concept: 'Stripping back years of disjointed additions to reveal the structural purity of the original space. We introduced monolithic forms and a deeply cohesive material language to instill a sense of permanence and calm.',
    materialPalette: 'Travertine, natural oak, Belgian linen, and limewash.',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&q=80'
    ]
  },
  {
    slug: 'the-olive-retreat',
    title: 'The Olive Retreat',
    category: 'Architecture',
    sector: 'Hospitality',
    location: 'Mallorca, Spain',
    year: 2024,
    overview: 'A boutique hospitality experience integrated seamlessly into an ancient olive grove, respecting the fragile local ecosystem.',
    concept: 'Designed to feel unearthed rather than built. The structures hunker down into the topography, offering guests an intimate connection with the rugged landscape while sheltering them from the summer sun.',
    materialPalette: 'Rammed earth, reclaimed local stone, weathering steel, and polished concrete.',
    heroImage: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
    ]
  },
  {
    slug: 'material-house',
    title: 'Material House',
    category: 'Interiors',
    sector: 'Residential',
    location: 'Los Angeles, USA',
    year: 2023,
    overview: 'An interior exploration of texture and shadow within a modern canyon dwelling.',
    concept: 'Moving away from the stark white box, this project embraces shadow. Darker tones and richly textured surfaces create an enveloping, protective atmosphere that contrasts with the bright California light outside.',
    materialPalette: 'Ebonized walnut, cast bronze, dark plaster, and smoked glass.',
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80'
    ]
  }
];
