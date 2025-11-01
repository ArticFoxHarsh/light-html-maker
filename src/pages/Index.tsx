import { WorkspaceSidebar } from '@/components/WorkspaceSidebar';
import { MessageArea } from '@/components/MessageArea';
import { useAuth } from '@/hooks/useAuth';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <WorkspaceSidebar />
      <MessageArea />
    </div>
  );
};

export default Index;
