import { TrendingUp } from 'lucide-react';

interface StatsBarProps {
  totalProjects: number;
  filteredCount: number;
}

export function StatsBar({ totalProjects, filteredCount }: StatsBarProps) {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Obras Realizadas</p>
              <p className="text-lg font-semibold text-foreground">
                {filteredCount} {filteredCount === totalProjects ? '' : `de ${totalProjects}`}
              </p>
            </div>
          </div>
          {filteredCount !== totalProjects && (
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Filtros ativos</p>
              <p className="text-sm font-medium text-primary">
                {((filteredCount / totalProjects) * 100).toFixed(0)}% exibido
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
