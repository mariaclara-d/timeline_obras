import { ChevronDown } from 'lucide-react';

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

function FilterSelect({
  value,
  options,
  onChange,
  placeholder,
}: {
  value: string;
  options: string[];
  onChange: (v: string) => void;
  placeholder: string;
}) {
  const active = value !== options[0];
  return (
    <div className="relative shrink-0">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none pl-3 pr-7 py-1.5 text-sm rounded-full border cursor-pointer outline-none transition-colors ${
          active
            ? 'bg-primary text-primary-foreground border-primary'
            : 'bg-background text-foreground border-border hover:border-primary'
        }`}
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <ChevronDown className={`absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 pointer-events-none ${
        active ? 'text-primary-foreground' : 'text-muted-foreground'
      }`} />
    </div>
  );
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

  const yearOptions = ['Todos', ...years.map(String)];
  const yearValue = selectedYear !== null ? String(selectedYear) : 'Todos';

  return (
    <div className="sticky top-[57px] z-40 bg-background border-b border-border">
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <FilterSelect
            value={selectedCategory}
            options={categories}
            onChange={onCategoryChange}
            placeholder="Categoria"
          />
          <FilterSelect
            value={selectedCity}
            options={cities}
            onChange={onCityChange}
            placeholder="Cidade"
          />
          <FilterSelect
            value={yearValue}
            options={yearOptions}
            onChange={(v) => onYearChange(v === 'Todos' ? null : Number(v))}
            placeholder="Ano"
          />
          {activeFiltersCount > 0 && (
            <span className="shrink-0 text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full">
              {activeFiltersCount} {activeFiltersCount === 1 ? 'filtro' : 'filtros'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
