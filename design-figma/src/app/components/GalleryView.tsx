import { Project } from '../types/project';
import { ProjectCard } from './ProjectCard';
import { EmptyState } from './EmptyState';

interface GalleryViewProps {
  projects: Project[];
  onProjectClick?: (project: Project) => void;
  onResetFilters?: () => void;
}

export function GalleryView({ projects, onProjectClick, onResetFilters }: GalleryViewProps) {
  if (projects.length === 0) {
    return <EmptyState onResetFilters={onResetFilters} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onProjectClick?.(project)}
        />
      ))}
    </div>
  );
}