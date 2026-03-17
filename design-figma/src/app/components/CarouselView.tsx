import { useRef } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, Heart, MessageCircle, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Project } from '../types/project';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { EmptyState } from './EmptyState';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselViewProps {
  projects: Project[];
  onResetFilters?: () => void;
}

export function CarouselView({ projects, onResetFilters }: CarouselViewProps) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    centerMode: false,
  };

  if (projects.length === 0) {
    return <EmptyState onResetFilters={onResetFilters} />;
  }

  return (
    <div className="relative px-4 py-6">
      <style>{`
        .slick-dots {
          bottom: -30px;
        }
        .slick-dots li button:before {
          font-size: 8px;
          color: #3b82f6;
        }
        .slick-dots li.slick-active button:before {
          color: #3b82f6;
          opacity: 1;
        }
        .slick-slide > div {
          padding: 0 8px;
        }
      `}</style>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10">
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full h-10 w-10 shadow-lg"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10">
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full h-10 w-10 shadow-lg"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {projects.map((project) => (
          <div key={project.id}>
            <div className="bg-card rounded-2xl overflow-hidden shadow-md border border-border">
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="rounded-full bg-primary text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    <span>{project.city}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Engagement */}
                <div className="flex items-center gap-5 pt-4 border-t border-border">
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Heart className="h-5 w-5" />
                    <span className="text-sm font-medium">{project.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <MessageCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">{project.comments}</span>
                  </button>
                  {project.instagramUrl && (
                    <a
                      href={project.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors ml-auto"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-xs">Ver no Instagram</span>
                    </a>
                  )}
                </div>
                
                <p className="text-xs text-muted-foreground mt-3">
                  {project.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}