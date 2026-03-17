import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="mb-4 inline-block"
        >
          <Loader2 className="h-12 w-12 text-primary" />
        </motion.div>
        <h2 className="text-xl font-semibold text-foreground mb-2">Carregando obras</h2>
        <p className="text-sm text-muted-foreground">Preparando conteúdo...</p>
      </div>
    </motion.div>
  );
}
