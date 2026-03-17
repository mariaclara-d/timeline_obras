import { Search, X } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function SearchBar({ onSearch, placeholder = 'Buscar obras...' }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="px-4 py-3 bg-card border-b border-border">
      <div
        className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all ${
          isFocused
            ? 'bg-primary/5 ring-2 ring-primary/20'
            : 'bg-secondary'
        }`}
      >
        <Search className={`h-4 w-4 transition-colors ${
          isFocused ? 'text-primary' : 'text-muted-foreground'
        }`} />
        
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground"
        />
        
        {query && (
          <button
            onClick={handleClear}
            className="p-1 hover:bg-secondary rounded-full transition-colors"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
      </div>
    </div>
  );
}
