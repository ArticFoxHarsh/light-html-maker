import { Layout } from '@/components/Layout';
import { MessageSquare } from 'lucide-react';

export default function Threads() {
  return (
    <Layout>
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <MessageSquare className="h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-black mb-2">Threads</h1>
        <p className="text-muted-foreground text-center max-w-md">
          View and manage all your message threads in one place. Thread functionality coming soon!
        </p>
      </div>
    </Layout>
  );
}
