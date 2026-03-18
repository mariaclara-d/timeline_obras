import { Menu, Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import boboImg from '../../assets/bobo.jpg';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={boboImg} />
            <AvatarFallback>BT</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-sm font-semibold text-foreground">Bobô Tavares</h1>
            <p className="text-xs text-muted-foreground">Deputado Estadual</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-secondary rounded-full transition-colors">
            <Bell className="h-5 w-5 text-muted-foreground" />
          </button>
          <button className="p-2 hover:bg-secondary rounded-full transition-colors">
            <Menu className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}
