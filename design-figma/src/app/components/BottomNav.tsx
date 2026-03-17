import { LayoutGrid, PlaySquare } from 'lucide-react';
import { ViewMode } from '../types/project';

interface BottomNavProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export function BottomNav({ viewMode, onViewModeChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border safe-area-bottom">
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-1 p-2">
          <button
            onClick={() => onViewModeChange('carousel')}
            className={`flex flex-col items-center justify-center gap-1 py-3 rounded-xl transition-all ${
              viewMode === 'carousel'
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-secondary'
            }`}
          >
            <PlaySquare className="h-6 w-6" />
            <span className="text-xs font-medium">Carrossel</span>
          </button>
          
          <button
            onClick={() => onViewModeChange('gallery')}
            className={`flex flex-col items-center justify-center gap-1 py-3 rounded-xl transition-all ${
              viewMode === 'gallery'
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-secondary'
            }`}
          >
            <LayoutGrid className="h-6 w-6" />
            <span className="text-xs font-medium">Galeria</span>
          </button>
        </div>
      </div>
    </nav>
  );
}