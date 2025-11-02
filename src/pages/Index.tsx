import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useChannels } from '@/hooks/useChannels';
import { useWorkspaceStore } from '@/store/useWorkspaceStore';

const Index = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { channels } = useChannels();
  const { activeChannel } = useWorkspaceStore();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  // Redirect to first channel or active channel
  useEffect(() => {
    if (channels.length > 0) {
      if (activeChannel) {
        navigate(`/c/${activeChannel}`);
      } else {
        navigate(`/c/${channels[0].id}`);
      }
    }
  }, [channels, activeChannel, navigate]);

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return null;
};

export default Index;
