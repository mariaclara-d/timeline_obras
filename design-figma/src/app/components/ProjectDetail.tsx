import { X, Heart, MessageCircle, MapPin, Calendar, ExternalLink, Share2 } from 'lucide-react';
import { Project } from '../types/project';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectDetailProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetail({ project, isOpen, onClose }: ProjectDetailProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 z-50 max-h-[90vh] overflow-y-auto bg-card rounded-t-3xl"
          >
            {/* Header */}
            <div className="sticky top-0 bg-card z-10 border-b border-border">
              <div className="flex items-center justify-between p-4">
                <h2 className="font-semibold text-lg">Detalhes da Obra</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
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

              {/* Title */}
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>

              {/* Meta Info */}
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

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Engagement Stats */}
              <div className="flex items-center gap-6 py-4 border-y border-border mb-6">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold text-foreground">{project.likes}</p>
                    <p className="text-xs text-muted-foreground">Curtidas</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold text-foreground">{project.comments}</p>
                    <p className="text-xs text-muted-foreground">Comentários</p>
                  </div>
                </div>
              </div>

              {/* Date */}
              <p className="text-sm text-muted-foreground mb-6">
                Publicado em {project.date}
              </p>

              {/* Actions */}
              <div className="flex gap-3">
                {project.instagramUrl && (
                  <Button
                    asChild
                    className="flex-1 rounded-full"
                  >
                    <a
                      href={project.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver no Instagram
                    </a>
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
