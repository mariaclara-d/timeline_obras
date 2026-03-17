import { Project } from '../types/project';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Nova Ponte da Cidade',
    description: 'Inauguração da moderna ponte que conecta os bairros Norte e Sul, facilitando o acesso e reduzindo o tempo de deslocamento.',
    category: 'Infraestrutura',
    city: 'São Paulo',
    year: 2024,
    imageUrl: 'https://images.unsplash.com/photo-1764449321624-913ca52646c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGluZnJhc3RydWN0dXJlJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3MjU3NTQyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    instagramUrl: 'https://instagram.com',
    likes: 1243,
    comments: 89,
    date: '15 de Janeiro, 2024'
  },
  {
    id: '2',
    title: 'Escola Municipal Renovada',
    description: 'Reforma completa da Escola Municipal com novas salas de aula, laboratório de informática e quadra poliesportiva.',
    category: 'Educação',
    city: 'São Paulo',
    year: 2024,
    imageUrl: 'https://images.unsplash.com/photo-1759643740737-9ba5a2e62332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBzY2hvb2wlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI1NzUyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    instagramUrl: 'https://instagram.com',
    likes: 892,
    comments: 45,
    date: '22 de Janeiro, 2024'
  },
  {
    id: '3',
    title: 'Hospital Regional Ampliado',
    description: 'Ampliação do Hospital Regional com 100 novos leitos, UTI moderna e centro cirúrgico de última geração.',
    category: 'Saúde',
    city: 'Rio de Janeiro',
    year: 2024,
    imageUrl: 'https://images.unsplash.com/photo-1710074213379-2a9c2653046a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGhlYWx0aGNhcmUlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NzI1MzQ5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    instagramUrl: 'https://instagram.com',
    likes: 2156,
    comments: 134,
    date: '5 de Fevereiro, 2024'
  },
  {
    id: '4',
    title: 'Parque da Família',
    description: 'Inauguração do Parque da Família com área de lazer, playground moderno, pista de caminhada e academia ao ar livre.',
    category: 'Lazer',
    city: 'São Paulo',
    year: 2023,
    imageUrl: 'https://images.unsplash.com/photo-1769921595437-78821f0f6ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJrJTIwcGxheWdyb3VuZCUyMHJlY3JlYXRpb258ZW58MXx8fHwxNzcyNTc1NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    instagramUrl: 'https://instagram.com',
    likes: 1678,
    comments: 92,
    date: '18 de Março, 2023'
  },
  {
    id: '5',
    title: 'Recapeamento Avenida Central',
    description: 'Obra de recapeamento e melhoria da Avenida Central, incluindo novas sinalizações e iluminação LED.',
    category: 'Infraestrutura',
    city: 'Campinas',
    year: 2023,
    imageUrl: 'https://images.unsplash.com/photo-1708117242652-25dc76c4b30c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwcGF2aW5nJTIwYXNwaGFsdHxlbnwxfHx8fDE3NzI1NzU0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    instagramUrl: 'https://instagram.com',
    likes: 734,
    comments: 28,
    date: '10 de Abril, 2023'
  },
  {
    id: '6',
    title: 'Centro Comunitário Novo Horizonte',
    description: 'Construção do Centro Comunitário com espaço para eventos, cursos profissionalizantes e atividades culturais.',
    category: 'Social',
    city: 'Rio de Janeiro',
    year: 2023,
    imageUrl: 'https://images.unsplash.com/photo-1771607500173-c87fcddc5fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBjZW50ZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI1MzEwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    instagramUrl: 'https://instagram.com',
    likes: 1421,
    comments: 67,
    date: '25 de Maio, 2023'
  },
  {
    id: '7',
    title: 'Quadra Poliesportiva Renovada',
    description: 'Revitalização completa da quadra poliesportiva do bairro com nova cobertura, iluminação e vestiários.',
    category: 'Esporte',
    city: 'Campinas',
    year: 2024,
    imageUrl: 'https://images.unsplash.com/photo-1641138294059-8bbb8f809a54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjb3VydCUyMGJhc2tldGJhbGx8ZW58MXx8fHwxNzcyNTc1NDI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    instagramUrl: 'https://instagram.com',
    likes: 956,
    comments: 41,
    date: '8 de Junho, 2024'
  },
  {
    id: '8',
    title: 'Biblioteca Pública Digital',
    description: 'Inauguração da Biblioteca Pública com acervo digital, salas de estudo e espaço maker para a comunidade.',
    category: 'Educação',
    city: 'São Paulo',
    year: 2023,
    imageUrl: 'https://images.unsplash.com/photo-1559867632-9a4ed11e09b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBsaWJyYXJ5JTIwbW9kZXJufGVufDF8fHx8MTc3MjU3NTQyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    instagramUrl: 'https://instagram.com',
    likes: 1834,
    comments: 103,
    date: '14 de Julho, 2023'
  },
  {
    id: '9',
    title: 'Iluminação LED nas Ruas',
    description: 'Substituição de toda iluminação pública por LED, economizando energia e melhorando a segurança.',
    category: 'Infraestrutura',
    city: 'Rio de Janeiro',
    year: 2024,
    imageUrl: 'https://images.unsplash.com/photo-1574876463941-993c490e6643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBsaWdodGluZyUyMHVyYmFufGVufDF8fHx8MTc3MjU3NTQyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    instagramUrl: 'https://instagram.com',
    likes: 1123,
    comments: 56,
    date: '30 de Agosto, 2024'
  }
];

export const categories = ['Todas', 'Infraestrutura', 'Educação', 'Saúde', 'Lazer', 'Social', 'Esporte'];
export const cities = ['Todas', 'São Paulo', 'Rio de Janeiro', 'Campinas'];
export const years = [2024, 2023, 2022];
