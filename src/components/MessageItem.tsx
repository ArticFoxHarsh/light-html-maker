import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Smile, Bookmark, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Message } from '@/hooks/useMessages';

interface MessageItemProps {
  message: Message;
  showAvatar?: boolean;
}

export const MessageItem = ({ message, showAvatar = true }: MessageItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showThread, setShowThread] = useState(false);

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  const getDisplayName = () => {
    return message.profiles?.display_name || message.profiles?.username || 'User';
  };

  const getAvatar = () => {
    if (message.profiles?.avatar_url) {
      return <img src={message.profiles.avatar_url} alt="Avatar" className="w-full h-full rounded object-cover" />;
    }
    return '👤';
  };

  // Group reactions by emoji
  const groupedReactions = message.reactions?.reduce((acc, reaction) => {
    if (!acc[reaction.emoji]) {
      acc[reaction.emoji] = { emoji: reaction.emoji, count: 0, users: [] as string[] };
    }
    acc[reaction.emoji].count++;
    acc[reaction.emoji].users.push(reaction.user_id);
    return acc;
  }, {} as Record<string, { emoji: string; count: number; users: string[] }>);

  const reactionList = groupedReactions ? Object.values(groupedReactions) : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex gap-3 hover:bg-muted/50 -mx-2 px-2 py-1.5 rounded-lg group relative"
    >
      {showAvatar && (
        <div className="w-9 h-9 rounded bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-lg flex-shrink-0 border border-primary/20 overflow-hidden">
          {getAvatar()}
        </div>
      )}
      {!showAvatar && <div className="w-9 flex-shrink-0" />}

      <div className="flex-1 min-w-0">
        {showAvatar && (
          <div className="flex items-baseline gap-2 mb-0.5">
            <span className="font-bold text-[15px]">{getDisplayName()}</span>
            <span className="text-xs text-muted-foreground">{formatTime(message.created_at)}</span>
          </div>
        )}
        {!showAvatar && (
          <div className="absolute left-2 top-1.5 text-[11px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            {formatTime(message.created_at)}
          </div>
        )}
        <div className="text-[15px] leading-[1.46668]">{message.content}</div>

        {/* Reactions */}
        {reactionList.length > 0 && (
          <div className="flex gap-1 mt-1">
            {reactionList.map((reaction, idx) => (
              <button
                key={idx}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/20 text-xs transition-colors"
              >
                <span>{reaction.emoji}</span>
                <span className="font-semibold">{reaction.count}</span>
              </button>
            ))}
            <button className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-border hover:border-primary/50 hover:bg-muted transition-colors opacity-0 group-hover:opacity-100">
              <Smile className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
          </div>
        )}

        {/* Thread indicator */}
        {message.thread_count !== undefined && message.thread_count > 0 && (
          <button className="flex items-center gap-2 mt-1 text-xs text-primary hover:underline">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>{message.thread_count} {message.thread_count === 1 ? 'reply' : 'replies'}</span>
          </button>
        )}
      </div>

      {/* Hover Actions */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute -top-3 right-4 flex items-center gap-1 bg-card border border-border rounded-lg shadow-lg px-1 py-1"
          >
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <Smile className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setShowThread(!showThread)}>
              <MessageSquare className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <Bookmark className="h-4 w-4" />
            </Button>
            <div className="w-px h-4 bg-border mx-0.5" />
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
