import { MoreHorizontal } from 'lucide-react';

const More = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 rounded-full bg-[hsl(var(--slack-purple-active))] flex items-center justify-center mx-auto">
          <MoreHorizontal className="h-10 w-10 text-[hsl(var(--slack-cyan))]" />
        </div>
        <h2 className="text-2xl font-black">More</h2>
        <p className="text-muted-foreground max-w-md">
          Additional features and settings. Explore more tools and options for your workspace.
        </p>
      </div>
    </div>
  );
};

export default More;
