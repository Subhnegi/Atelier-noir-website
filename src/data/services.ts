export interface Service {
  id: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: '01',
    title: 'Architecture',
    description: 'Concept development, spatial planning, and architectural design.'
  },
  {
    id: '02',
    title: 'Interior Design',
    description: 'Material palettes, lighting, furnishings, and cohesive interior concepts.'
  },
  {
    id: '03',
    title: 'Spatial Planning',
    description: 'Thoughtful layouts that balance circulation, function, and atmosphere.'
  }
];
