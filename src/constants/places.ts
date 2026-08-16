// constants/places.ts
export type Place = {
  slug: string;
  title: string;
  tags: [string, string];
  rating: number;
  description: string;
  location: string;
  image?: string; // TODO: trocar por import de asset real
};

export const places: Place[] = [
  {
    slug: 'parque-das-aracarias',
    title: 'Parque das Araucárias',
    tags: ['Natureza', 'Parques'],
    rating: 4.8,
    description: 'Área de conservação com trilhas entre araucárias centenárias.',
    location: 'Rua Guaíra, s/n — Trianon, Guarapuava/PR',
  },
  {
    slug: 'cachoeira-da-santa-clara',
    title: 'Cachoeira da Santa Clara',
    tags: ['Natureza', 'Cachoeiras'],
    rating: 4.9,
    description: "Queda d'água imponente cercada por mata atlântica.",
    location: 'Estrada Rural de Entre Rios, km 12',
  },
  {
    slug: 'catedral-nossa-senhora-de-belem',
    title: 'Catedral Nossa Senhora de Belém',
    tags: ['Histórico', 'Religioso'],
    rating: 4.7,
    description: 'Marco histórico e religioso da praça central.',
    location: 'Praça 9 de Dezembro, s/n — Centro',
  },
  {
    slug: 'lagoa-das-lagrimas',
    title: 'Lagoa das Lágrimas',
    tags: ['Parques', 'Natureza'],
    rating: 4.6,
    description: 'Cartão-postal urbano com pista de caminhada.',
    location: 'Av. Manoel Ribas — Centro',
  },
  {
    slug: 'salto-sao-francisco',
    title: 'Salto São Francisco',
    tags: ['Natureza', 'Cachoeiras'],
    rating: 5.0,
    description: "Uma das maiores quedas d'água do Sul do Brasil.",
    location: 'Prudentópolis (região de Guarapuava)',
  },
  {
    slug: 'museu-municipal-visconde',
    title: 'Museu Municipal Visconde de...',
    tags: ['Histórico', 'Cultural'],
    rating: 4.5,
    description: 'Acervo histórico e cultural da região.',
    location: 'Rua Guaíra, 815 — Centro',
  },
];