import { useState, useEffect, useMemo } from 'react';
import { Project } from '../types/project';
import rawProjects from '../data/projects.json';

interface Filters {
  category: string;
  city: string;
  year: number | null;
}

interface FilterOptions {
  categories: string[];
  cities: string[];
  years: number[];
}

const allProjects = rawProjects as unknown as Project[];

export function useProjects(filters: Filters) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, []);

  const filterOptions = useMemo<FilterOptions>(() => ({
    categories: ['Todas', ...Array.from(new Set(allProjects.map((p) => p.category))).sort()],
    cities: ['Todas', ...Array.from(new Set(allProjects.map((p) => p.city))).sort()],
    years: Array.from(new Set(allProjects.map((p) => p.year))).sort((a, b) => b - a),
  }), []);

  const projects = useMemo(() => {
    return allProjects.filter((p) => {
      if (filters.category !== 'Todas' && p.category !== filters.category) return false;
      if (filters.city !== 'Todas' && p.city !== filters.city) return false;
      if (filters.year !== null && p.year !== filters.year) return false;
      return true;
    });
  }, [filters.category, filters.city, filters.year]);

  return { projects, allProjects, filterOptions, loading };
}
