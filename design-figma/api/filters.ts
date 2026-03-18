import type { VercelRequest, VercelResponse } from '@vercel/node';
import projects from '../src/app/data/projects.json';

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const categories = ['Todas', ...new Set(projects.map((p) => p.category))].sort();
  const cities = ['Todas', ...new Set(projects.map((p) => p.city))].sort();
  const years = [...new Set(projects.map((p) => p.year))].sort((a, b) => b - a);

  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.status(200).json({ categories, cities, years });
}
