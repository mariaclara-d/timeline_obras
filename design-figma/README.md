# Sistema de Obras Políticas

Um aplicativo web moderno e responsivo para visualizar e filtrar obras políticas categorizadas por posts do Instagram.

## 🎨 Design System

### Cores
- **Primary**: Azul institucional (#2563eb)
- **Background**: Cinza claro (#f8f9fb)
- **Cards**: Branco (#ffffff)
- **Texto**: Escuro (#1a1d29)

### Componentes Principais

#### Header
- Avatar do político
- Nome e cargo
- Botões de notificação e menu

#### FilterBar
- Filtros por categoria, cidade e ano
- Pills interativos com dropdowns
- Indicador de filtros ativos

#### StatsBar
- Total de obras exibidas
- Porcentagem de filtros aplicados
- Design com gradiente sutil

#### ProjectCard
- Imagem da obra
- Badge de categoria
- Título e descrição
- Localização e ano
- Estatísticas de engajamento (curtidas/comentários)

#### Views
- **Galeria**: Grid responsivo de cards
- **Carrossel**: Visualização em slides com navegação

#### BottomNav
- Navegação fixa no rodapé
- Alternância entre Carrossel e Galeria
- Design estilo aplicativo mobile

#### ProjectDetail Modal
- Modal bottom-sheet estilo app
- Detalhes completos da obra
- Botão para ver no Instagram
- Animações suaves

## 🚀 Funcionalidades

- ✅ Filtros múltiplos (categoria, cidade, ano)
- ✅ Duas visualizações (galeria e carrossel)
- ✅ Modal de detalhes
- ✅ Design mobile-first
- ✅ Animações suaves
- ✅ Responsivo para desktop

## 📱 Experiência Mobile

- Safe areas para notch
- Scroll suave
- Sem pull-to-refresh
- Navegação por gestos
- Bottom navigation fixa
- Max-width centralizado em desktop

## 🛠️ Tecnologias

- React 18
- TypeScript
- Tailwind CSS v4
- Motion (animações)
- React Slick (carrossel)
- Radix UI (componentes)
- Lucide React (ícones)

## 📦 Estrutura

```
src/app/
├── components/          # Componentes React
│   ├── Header.tsx
│   ├── FilterBar.tsx
│   ├── StatsBar.tsx
│   ├── ProjectCard.tsx
│   ├── GalleryView.tsx
│   ├── CarouselView.tsx
│   ├── BottomNav.tsx
│   └── ProjectDetail.tsx
├── data/               # Mock data
│   └── mock-projects.ts
├── types/              # TypeScript types
│   └── project.ts
└── App.tsx            # Componente principal
```

## 🎯 Próximas Melhorias

- Adicionar busca por texto
- Implementar favoritos
- Integração com API real do Instagram
- Modo escuro
- Compartilhamento social
- Filtros salvos
- Notificações de novas obras
