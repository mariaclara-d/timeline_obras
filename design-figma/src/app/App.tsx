import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { StatsBar } from './components/StatsBar';
import { GalleryView } from './components/GalleryView';
import { CarouselView } from './components/CarouselView';
import { BottomNav } from './components/BottomNav';
import { ProjectDetail } from './components/ProjectDetail';
import { useProjects } from './hooks/useProjects';
import { ViewMode, Project } from './types/project';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('gallery');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedCity, setSelectedCity] = useState('Todas');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const { projects: filteredProjects, allProjects, filterOptions } = useProjects({
    category: selectedCategory,
    city: selectedCity,
    year: selectedYear,
  });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleResetFilters = () => {
    setSelectedCategory('Todas');
    setSelectedCity('Todas');
    setSelectedYear(null);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="max-w-2xl mx-auto w-full flex flex-col min-h-screen md:shadow-xl">
        {/* Fixed Header */}
        <Header />

        {/* Sticky Filters */}
        <FilterBar
          selectedCategory={selectedCategory}
          selectedCity={selectedCity}
          selectedYear={selectedYear}
          categories={filterOptions.categories}
          cities={filterOptions.cities}
          years={filterOptions.years}
          onCategoryChange={setSelectedCategory}
          onCityChange={setSelectedCity}
          onYearChange={setSelectedYear}
        />

        {/* Stats Bar */}
        <StatsBar
          totalProjects={allProjects.length}
          filteredCount={filteredProjects.length}
        />

        {/* Main Content */}
        <main className="flex-1 pb-24">
          {viewMode === 'gallery' ? (
            <GalleryView 
              projects={filteredProjects} 
              onProjectClick={handleProjectClick}
              onResetFilters={handleResetFilters}
            />
          ) : (
            <CarouselView 
              projects={filteredProjects}
              onResetFilters={handleResetFilters}
            />
          )}
        </main>

        {/* Bottom Navigation */}
        <BottomNav viewMode={viewMode} onViewModeChange={setViewMode} />

        {/* Project Detail Modal */}
        <AnimatePresence>
          <ProjectDetail
            project={selectedProject}
            isOpen={isDetailOpen}
            onClose={handleCloseDetail}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}