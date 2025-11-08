import { ChevronLeft, ChevronRight, RotateCcw, Search, HelpCircle, Users, Gift, MoreVertical, X, Bell, Clock, Smile, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useWorkspaceStore } from '@/store/useWorkspaceStore';
import { useWorkspaceMembers } from '@/hooks/useWorkspaceMembers';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';

export const TopBar = () => {
  const navigate = useNavigate();
  const { toggleMembersSidebar, membersSidebarOpen } = useWorkspaceStore();
  const { totalCount } = useWorkspaceMembers();
  const [helpOpen, setHelpOpen] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleForward = () => {
    navigate(1);
  };

  return (
    <header className="h-[44px] bg-[hsl(var(--slack-purple))] border-b border-[hsl(var(--slack-purple-active))] flex items-center justify-between px-3 gap-3">
      {/* Navigation Buttons */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleBack}
          className="h-7 w-7 text-[hsl(var(--slack-text-muted))] hover:text-foreground hover:bg-[hsl(var(--slack-purple-hover))]"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleForward}
          className="h-7 w-7 text-[hsl(var(--slack-text-muted))] hover:text-foreground hover:bg-[hsl(var(--slack-purple-hover))]"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => window.location.reload()}
          className="h-7 w-7 text-[hsl(var(--slack-text-muted))] hover:text-foreground hover:bg-[hsl(var(--slack-purple-hover))]"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[hsl(var(--slack-text-muted))]" />
          <Input
            type="text"
            placeholder="Search Debugging Demons"
            className="w-full pl-10 bg-[hsl(var(--slack-purple-active))] border-[hsl(var(--slack-purple-active))] text-foreground placeholder:text-[hsl(var(--slack-text-muted))] focus-visible:ring-1 focus-visible:ring-[hsl(var(--slack-cyan))] h-8"
          />
        </div>
      </div>

      {/* Members & Help Buttons */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMembersSidebar}
          className={`h-7 px-3 text-[hsl(var(--slack-text-muted))] hover:text-foreground hover:bg-[hsl(var(--slack-purple-hover))] ${
            membersSidebarOpen ? 'bg-[hsl(var(--slack-purple-hover))] text-foreground' : ''
          }`}
        >
          <Users className="h-4 w-4 mr-1.5" />
          <span className="text-xs">{totalCount}</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setHelpOpen(true)}
          className="h-7 w-7 text-[hsl(var(--slack-text-muted))] hover:text-foreground hover:bg-[hsl(var(--slack-purple-hover))]"
        >
          <HelpCircle className="h-4 w-4" />
        </Button>
        
        <Sheet open={helpOpen} onOpenChange={setHelpOpen}>
          <SheetContent side="right" className="w-[520px] p-0 bg-[#1A1D21] border-l border-[#424242]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-[#424242]">
                <SheetTitle className="text-lg font-bold">Help</SheetTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setHelpOpen(false)}
                  className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-[#2C2D30]"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="p-4 border-b border-[#424242]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full pl-10 bg-[hsl(var(--slack-cyan))] border-[hsl(var(--slack-cyan))] text-foreground"
                  />
                </div>
              </div>

              <ScrollArea className="flex-1">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">✨ Discover more</span>
                    <span className="text-xs text-muted-foreground">1/3</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <button className="p-4 bg-[#2C2D30] rounded-lg text-left hover:bg-[#353638] transition-colors">
                      <div className="flex flex-col gap-2">
                        <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg p-3 h-24 flex items-center justify-center">
                          <div className="text-white text-xs font-bold">NEW</div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold mb-1">Quick start guide</p>
                          <p className="text-xs text-muted-foreground">Learn the basics and get to work in Slack</p>
                        </div>
                      </div>
                    </button>

                    <button className="p-4 bg-[#2C2D30] rounded-lg text-left hover:bg-[#353638] transition-colors">
                      <div className="flex flex-col gap-2">
                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-3 h-24 flex items-center justify-center">
                          <div className="text-white text-xs font-bold">NEW</div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold mb-1">New layout for channels and DMs</p>
                          <p className="text-xs text-muted-foreground">Add files, workflows and more to tabs</p>
                        </div>
                      </div>
                    </button>
                  </div>

                  <div className="mb-2">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-muted-foreground">👁️ Explore help topics</span>
                    </div>
                    
                    <div className="space-y-1">
                      <button className="w-full flex items-center gap-3 p-3 rounded hover:bg-[#2C2D30] transition-colors text-left">
                        <Bell className="h-4 w-4 text-red-500" />
                        <span className="text-sm">Configure your Slack notifications</span>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 rounded hover:bg-[#2C2D30] transition-colors text-left">
                        <Clock className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">Set your Slack status and availability</span>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 rounded hover:bg-[#2C2D30] transition-colors text-left">
                        <Bell className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">Set a reminder</span>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 rounded hover:bg-[#2C2D30] transition-colors text-left">
                        <Smile className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">Use emoji reactions</span>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 rounded hover:bg-[#2C2D30] transition-colors text-left">
                        <Video className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">Slack video tutorials</span>
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#424242]">
                    <button className="text-sm text-primary hover:underline">
                      Help requests →
                    </button>
                  </div>
                  
                  <div className="mt-4 flex justify-center">
                    <Button className="bg-background text-foreground hover:bg-background/90">
                      Contact us
                    </Button>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </SheetContent>
        </Sheet>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-[hsl(var(--slack-text-muted))] hover:text-foreground hover:bg-[hsl(var(--slack-purple-hover))]"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72 bg-popover z-50">
            <DropdownMenuItem>Open channel details</DropdownMenuItem>
            <DropdownMenuItem>Summarise channel</DropdownMenuItem>
            <DropdownMenuItem>Edit notifications</DropdownMenuItem>
            <DropdownMenuItem>Star channel</DropdownMenuItem>
            <DropdownMenuItem>Move channel</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Add template to channel</DropdownMenuItem>
            <DropdownMenuItem>Add a workflow</DropdownMenuItem>
            <DropdownMenuItem>Edit settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Copy</DropdownMenuItem>
            <DropdownMenuItem>Search in channel</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Leave channel</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
