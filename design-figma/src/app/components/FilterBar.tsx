import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface FilterBarProps {
  selectedCategory: string;
  selectedCity: string;
  selectedYear: number | null;
  categories: string[];
  cities: string[];
  years: number[];
  onCategoryChange: (category: string) => void;
  onCityChange: (city: string) => void;
  onYearChange: (year: number | null) => void;
}

export function FilterBar({
  selectedCategory,
  selectedCity,
  selectedYear,
  categories,
  cities,
  years,
  onCategoryChange,
  onCityChange,
  onYearChange,
}: FilterBarProps) {
  const activeFiltersCount = 
    (selectedCategory !== 'Todas' ? 1 : 0) +
    (selectedCity !== 'Todas' ? 1 : 0) +
    (selectedYear !== null ? 1 : 0);

  return (
    <div className="sticky top-[57px] z-40 bg-background border-b border-border">
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {/* Category Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant={selectedCategory !== 'Todas' ? 'default' : 'outline'} 
                size="sm"
                className="shrink-0 rounded-full"
              >
                {selectedCategory}
                <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className="cursor-pointer"
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* City Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant={selectedCity !== 'Todas' ? 'default' : 'outline'} 
                size="sm"
                className="shrink-0 rounded-full"
              >
                {selectedCity}
                <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {cities.map((city) => (
                <DropdownMenuItem
                  key={city}
                  onClick={() => onCityChange(city)}
                  className="cursor-pointer"
                >
                  {city}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Year Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant={selectedYear !== null ? 'default' : 'outline'} 
                size="sm"
                className="shrink-0 rounded-full"
              >
                {selectedYear || 'Ano'}
                <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-32">
              <DropdownMenuItem
                onClick={() => onYearChange(null)}
                className="cursor-pointer"
              >
                Todos
              </DropdownMenuItem>
              {years.map((year) => (
                <DropdownMenuItem
                  key={year}
                  onClick={() => onYearChange(year)}
                  className="cursor-pointer"
                >
                  {year}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="shrink-0 rounded-full">
              {activeFiltersCount} {activeFiltersCount === 1 ? 'filtro' : 'filtros'}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}
