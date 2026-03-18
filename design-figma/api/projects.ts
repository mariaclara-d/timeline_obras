import type { VercelRequest, VercelResponse } from '@vercel/node';
import projects from '../src/app/data/projects.json';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { category, city, year } = req.query;

  let result = [...projects];

  if (category && category !== 'Todas') {
    result = result.filter((p) => p.category === category);
  }
  if (city && city !== 'Todas') {
    result = result.filter((p) => p.city === city);
  }
  if (year) {
    result = result.filter((p) => p.year === Number(year));
  }

  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.status(200).json(result);
}
