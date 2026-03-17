import { useState, useMemo } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { StatsBar } from './components/StatsBar';
import { GalleryView } from './components/GalleryView';
import { CarouselView } from './components/CarouselView';
import { BottomNav } from './components/BottomNav';
import { ProjectDetail } from './components/ProjectDetail';
import { mockProjects, categories, cities, years } from './data/mock-projects';
import { ViewMode, Project } from './types/project';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('gallery');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedCity, setSelectedCity] = useState('Todas');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    return mockProjects.filter((project) => {
      const matchesCategory = selectedCategory === 'Todas' || project.category === selectedCategory;
      const matchesCity = selectedCity === 'Todas' || project.city === selectedCity;
      const matchesYear = selectedYear === null || project.year === selectedYear;
      
      return matchesCategory && matchesCity && matchesYear;
    });
  }, [selectedCategory, selectedCity, selectedYear]);

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
          categories={categories}
          cities={cities}
          years={years}
          onCategoryChange={setSelectedCategory}
          onCityChange={setSelectedCity}
          onYearChange={setSelectedYear}
        />

        {/* Stats Bar */}
        <StatsBar
          totalProjects={mockProjects.length}
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