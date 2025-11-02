import { MessageSquare } from 'lucide-react';

const DMs = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 rounded-full bg-[hsl(var(--slack-purple-active))] flex items-center justify-center mx-auto">
          <MessageSquare className="h-10 w-10 text-[hsl(var(--slack-cyan))]" />
        </div>
        <h2 className="text-2xl font-black">Direct Messages</h2>
        <p className="text-muted-foreground max-w-md">
          Start conversations with your teammates. Direct messages are private conversations between you and another person.
        </p>
      </div>
    </div>
  );
};

export default DMs;
