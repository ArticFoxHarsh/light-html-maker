import { Home, MessageSquare, Files, MoreHorizontal } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: MessageSquare, label: 'DMs', path: '/dms' },
  { icon: Files, label: 'Files', path: '/files' },
  { icon: MoreHorizontal, label: 'More', path: '/more' },
];

export const MainSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (item: typeof navItems[0]) => {
    if (item.label === 'Home') {
      return location.pathname === '/' || location.pathname.startsWith('/c/');
    }
    return item.path && location.pathname.startsWith(item.path);
  };

  return (
    <aside className="w-[88px] h-screen bg-[hsl(var(--slack-purple-dark))] flex flex-col items-center py-3 gap-2 border-r border-[hsl(var(--slack-purple-active))]">
      {/* Workspace Icon */}
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button 
              onClick={() => navigate('/')}
              className="w-12 h-12 rounded-lg bg-[hsl(var(--slack-purple-active))] flex items-center justify-center font-black text-sm hover:bg-[hsl(var(--slack-purple-hover))] transition-colors mb-2"
            >
              NW
            </button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>New Workspace</p>
          </TooltipContent>
        </Tooltip>

        {/* Navigation Items */}
        {navItems.map((item) => (
          <Tooltip key={item.label}>
            <TooltipTrigger asChild>
              <div className="flex flex-col items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    if (item.label === 'Home') {
                      navigate('/');
                    } else if (item.path) {
                      navigate(item.path);
                    }
                  }}
                  className={cn(
                    'w-12 h-12 rounded-lg transition-colors',
                    isActive(item)
                      ? 'bg-[hsl(var(--slack-cyan))] text-foreground'
                      : 'text-[hsl(var(--slack-text-muted))] hover:bg-[hsl(var(--slack-purple-hover))] hover:text-foreground'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                </Button>
                <span className="text-xs text-[hsl(var(--slack-text-muted))] font-medium">
                  {item.label}
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </aside>
  );
};
