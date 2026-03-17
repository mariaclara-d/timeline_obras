import { Search, Filter } from 'lucide-react';
import { Button } from './ui/button';

interface EmptyStateProps {
  onResetFilters?: () => void;
}

export function EmptyState({ onResetFilters }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
        <div className="relative bg-primary/5 p-6 rounded-full">
          <Search className="h-12 w-12 text-primary" />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-2">
        Nenhuma obra encontrada
      </h3>
      
      <p className="text-sm text-muted-foreground text-center max-w-sm mb-6">
        Não encontramos obras que correspondam aos filtros selecionados. 
        Tente ajustar os filtros para ver mais resultados.
      </p>

      {onResetFilters && (
        <Button 
          onClick={onResetFilters}
          className="rounded-full"
          variant="outline"
        >
          <Filter className="h-4 w-4 mr-2" />
          Limpar Filtros
        </Button>
      )}
    </div>
  );
}
